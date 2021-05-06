import React, { useEffect } from 'react';
import ErrorPage from 'next/error';
import { useRouter } from 'next/router';
import { WithUserAgentProps } from 'next-useragent';

import { getStrapiURL, getPageData } from 'utils/api';
import Seo from '@components/elements/seo';
import Sections from 'components/sections';
import _ from 'lodash';

// The file is called [[...slug]].js because we're using Next's
// optional catch all routes feature. See the related docs:
// https://nextjs.org/docs/routing/dynamic-routes#optional-catch-all-routes

interface DynamicPageProps extends WithUserAgentProps {
  sections: any;
  metadata: any;
  preview: any;
  previewData: any;
}

const DynamicPage = ({ sections, metadata, preview, previewData = {}, ua }: DynamicPageProps) => {
  const router = useRouter();

  useEffect(() => {
    if (!_.isEmpty(previewData) && `/${previewData.slug}` !== router.asPath) {
      router.push(`/api/exit-preview?redirect=${encodeURIComponent(router.asPath)}`);
    }
  }, [previewData]);

  useEffect(() => {
    if (!['Firefox', 'Edge', 'Chrome', 'Safari', 'Mobile Safari'].includes(ua?.browser as string)) {
      router.push('/supported-browsers');
    }
  }, []);

  // Check if the required data was provided
  if (!router.isFallback && !sections?.length) {
    return <ErrorPage statusCode={404} />;
  }

  // Loading screen (only possible in preview mode)
  if (router.isFallback) {
    return <div className="container">Loading...</div>;
  }

  return (
    <>
      {/* Add meta tags for SEO */}
      <Seo metadata={metadata} />
      {/* Display content sections */}
      <Sections sections={sections} preview={preview} ua={ua} />
    </>
  );
};

export async function getStaticPaths() {
  // Get all pages from Strapi
  const pages = await (await fetch(getStrapiURL('/pages'))).json();
  const paths = Array.isArray(pages)
    ? pages.map((page: any) => {
        // Decompose the slug that was saved in Strapi
        const slugArray = page.slug.split('__');
        return {
          params: { slug: slugArray },
        };
      })
    : [];
  return { paths, fallback: true };
}

export async function getStaticProps({
  params,
  preview = null,
  previewData = {},
}: {
  params: any;
  preview: any;
  previewData: any;
}) {
  // Find the page data for the current slug
  let chainedSlugs;
  if (params === {} || !params.slug) {
    // To get the homepage, find the only page where slug is an empty string
    chainedSlugs = ``;
  } else {
    // Otherwise find a page with a matching slug
    // Recompose the slug that was saved in Strapi
    chainedSlugs = params.slug.join('__');
  }

  // Fetch pages. Include drafts if preview mode is on
  const pageData = await getPageData(chainedSlugs, preview);

  if (pageData == null) {
    // Giving the page no props will trigger a 404 page
    return { props: {}, revalidate: 1 };
  }

  // We have the required page data, pass it to the page component
  const { contentSections, metadata = {} } = pageData;
  return {
    props: {
      preview,
      sections: contentSections,
      metadata,
      previewData: _.isEmpty(previewData) ? {} : previewData,
    },
    // we will attempt to re-generate the page:
    // - when a request comes in
    // - at most once every second
    revalidate: 1,
  };
}

export default DynamicPage;
