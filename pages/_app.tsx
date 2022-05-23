import { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { NextSeo } from "next-seo";
import "cal-sans";

import theme from "../src/theme";
import Layout from "@/components/layout";
import CmdPalette from "@/components/cmd-palette";
import CmdPaletteProvider from "src/providers/cmd-palette-provider";

import "../style.css";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider theme={theme}>
      <NextSeo
        title="Crishub"
        description="Full-stack Engineer and Open Source Advocate."
        openGraph={{
          url: "https://crishub.com",
          title: "Crishub",
          description:
            "Full-stack Engineer and Open Source Advocate.",
          locale: "en_US",
          images: [
            {
              url: "https://crishub.com/assets/images/favicon.png",
              width: 1200,
              height: 630,
              alt: "Crishub",
              type: "image/png",
            },
          ],
        }}
      />
      <CmdPaletteProvider>
        <Layout>
          <CmdPalette />
          <Component {...pageProps} />
        </Layout>
      </CmdPaletteProvider>
    </ChakraProvider>
  );
};

export default App;
