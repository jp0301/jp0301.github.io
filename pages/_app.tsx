import '../styles/globals.css'
import type { AppProps } from 'next/app'

import { PortfolioProvider } from "../components/context/context";
import { prefix } from "../config/config";

import Container from "../components/Container";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <PortfolioProvider value={{prefix}}>
      <Container>
        <Component {...pageProps} />
      </Container>
    </PortfolioProvider>
  
  );
}

export default MyApp
