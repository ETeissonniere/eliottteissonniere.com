import React, { ReactNode } from 'react';
import Head from 'next/head';
import { NextSeo } from 'next-seo';

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({
  children,
  title = 'Eliott Teissonniere - Entrepreneur, Polymath and Engineer',
}: Props) => (
  <div>
    <Head>
      <title>{title}</title>

      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />

      <link
        rel="preload"
        href="/fonts/Roboto-Light.ttf"
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
      title={title}
      description="Learn more about Eliott Teissonniere's journey and past work on his personal website. Connect with him using the provided links at your discretion."
      canonical="https://eliott.teissonniere.org"
      twitter={{
        handle: '@EliottTeiss',
        cardType: 'summary_large_image',
      }}
      openGraph={{
        type: 'website',
        images: [
          {
            url: 'https://eliott.teissonniere.org/images/background.jpg',
            alt: 'twitter card',
          },
        ],
      }}
    />
    {children}
  </div>
);

export default Layout;
