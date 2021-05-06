import React from 'react';
import Link from 'next/link';

import Image from './image';
import { mediaInterface } from '@utils/types';
import useStyles from '@styles/layout';
interface HeaderProps {
  header: {
    logo: mediaInterface;
  };
}

const Header: React.FC<HeaderProps> = ({ header }: HeaderProps) => {
  const { logo } = header || {};
  const classes = useStyles();
  return (
    <div className={classes.layoutHeader}>
      <Link href="/[[...slug]]" as="/">
        <a>
          <Image media={logo} />
        </a>
      </Link>
    </div>
  );
};

export default Header;
