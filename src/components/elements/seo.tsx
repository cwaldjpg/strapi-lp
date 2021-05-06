import React from 'react';
import { NextSeo } from 'next-seo';
import { getStrapiMedia } from 'utils/media';
import { imageInterface, metadataInterface } from 'utils/types';

interface SeoInterface {
  metadata?: metadataInterface;
}

const Seo: React.FC<SeoInterface> = ({ metadata }: SeoInterface) => {
  // Prevent errors if no metadata was set
  if (!metadata) return null;

  const images = metadata.shareImage
    ? Object.values(metadata.shareImage.formats).map((image: imageInterface) => {
        return {
          url: getStrapiMedia(image.url) || '',
          width: image.width,
          height: image.height,
        };
      })
    : [];

  return (
    <NextSeo
      title={metadata.metaTitle}
      description={metadata.metaDescription}
      openGraph={{
        // Title and description are mandatory
        title: metadata.metaTitle,
        description: metadata.metaDescription,
        // Only include OG image if we have it
        // Careful: if you disable image optimization in Strapi, this will break
        images,
      }}
      // Only included Twitter data if we have it
      twitter={{
        ...(metadata.twitterCardType && { cardType: metadata.twitterCardType }),
        ...(metadata.twitterUsername && { cardType: metadata.twitterUsername }),
      }}
    />
  );
};

export default Seo;
