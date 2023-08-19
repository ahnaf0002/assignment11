import React from 'react';
import Link from 'next/link';

const Menu = () => {
  return (
    <nav>
      <Link href="/">Home</Link><br/>
      <Link href="/blog">Blog</Link>
    </nav>
  );
};

export default Menu;
