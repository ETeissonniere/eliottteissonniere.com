import React, { ReactNode } from 'react';
import Head from 'next/head';
import { NextSeo } from 'next-seo';

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = 'This is the default title' }: Props) => (
  <div>
    <Head>
      <title>{title}</title>

      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />

      <link
        rel="preload"
        href="/fonts/Roboto-Regular.ttf"
        as="font"
        crossOrigin=""
      />
      <link
        rel="preload"
        href="/fonts/SpaceMono-Regular.ttf"
        as="font"
        crossOrigin=""
      />
    </Head>
    <NextSeo
      title="Eliott Teissonniere"
      description="Personal website of Eliott Teissonniere."
      twitter={{
        handle: '@EliottTeiss',
        cardType: 'summary_large_image',
      }}
      openGraph={{
        type: 'website',
        images: [
          {
            url: 'images/background.jpg',
          },
        ],
      }}
    />
    {children}
  </div>
);

export default Layout;
