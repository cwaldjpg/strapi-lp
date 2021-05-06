import { NextApiRequest, NextApiResponse } from 'next';

export default (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({
    title: 'Site title',
    titleTemplate: '%s | SiteName',
    description: 'My site description',
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: 'https://',
      site_name: 'SiteName',
      title: 'OG title',
      description: 'My site description',
      images: [
        {
          url: 'https://',
          width: 800,
          height: 600,
          alt: 'Og Image Alt',
        },
      ],
    },
    twitter: {
      cardType: 'summary_large_image',
      handle: '@handle',
      site: '@site',
    },
  });
};
