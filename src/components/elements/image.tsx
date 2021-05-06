import React from 'react';
import { getStrapiMedia } from 'utils/media';
import { mediaInterface } from 'utils/types';

interface ImageProps {
  media: mediaInterface;
  className?: string;
  style?: React.CSSProperties;
}

const Image: React.FC<ImageProps> = ({ media, className, style }: ImageProps) => {
  if (!media) {
    return null;
  }

  const { url, alternativeText } = media;
  const fullUrl = getStrapiMedia(url);

  return <img src={fullUrl} alt={alternativeText || ''} className={className} style={style} />;
};

export default Image;
