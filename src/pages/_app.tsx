import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { Footer } from "../components/Footer";
import { NavBar } from "../components/Nav";
import { theme } from "../lib/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <NavBar />
      <Component {...pageProps} />
      <Footer />
    </ChakraProvider>
  );
}

export default MyApp;
