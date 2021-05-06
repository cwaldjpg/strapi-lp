/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import Link from 'next/link';
import { linkInterface } from 'utils/types';

interface CustomLinkProps {
  link: linkInterface;
  children: React.ReactNode[] | React.ReactNode;
  className?: string;
}

const CustomLink: React.FC<CustomLinkProps> = ({ link, children, className }: CustomLinkProps) => {
  if (!link) {
    return <div>{children}</div>;
  }

  const isInternalLink = link.url.startsWith('/');

  // For internal links, use the Next.js Link component
  if (isInternalLink) {
    return (
      <Link href="/[[...slug]]" as={link.url} className={className}>
        <a>{children}</a>
      </Link>
    );
  }

  // Plain <a> tags for external links
  return (
    <a
      href={link.url}
      // Change target and rel attributes is newTab is turned on
      target={link.newTab ? '_blank' : '_self'}
      rel={link.newTab ? 'noopener noreferrer' : ''}
      className={className}
    >
      {children}
    </a>
  );
};

export default CustomLink;
