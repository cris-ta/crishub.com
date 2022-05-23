import React from 'react';
import { ColorModeScript } from '@chakra-ui/react';
import { Html, Head, Main, NextScript } from 'next/document';

import theme from '../src/theme';

const Doc = () => (
  <Html lang="en">
    <Head>
      <script
        defer
        data-domain="crishub.com"
        src="https://plausible.io/js/plausible.js"
      />
      <meta name="monetization" content="$ilp.uphold.com/nZ4DF39aHkrm" />
      <link
        rel="icon"
        href='/assets/favicon.ico'
      />
    </Head>
    <body>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default Doc;
