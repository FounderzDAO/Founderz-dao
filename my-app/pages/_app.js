import "../styles/globals.css";
import type, { AppProps } from "next/app";
// import { useEffect } from "react";
import { useRouter } from "next/router";
import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { configureChains, createClient, WagmiConfig } from "wagmi";
import { mainnet, polygon, optimism, arbitrum, bscTestnet } from "wagmi/chains";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
import { ThemeProvider } from 'next-themes';
import Head from 'next/head'
import founderzpass from './assets/founderzpass.png';

const { chains, provider } = configureChains(
  [bscTestnet],
  [
    alchemyProvider({ apiKey: process.env.ALCHEMY_ID }),
    publicProvider()
  ]
);
const { connectors } = getDefaultWallets({
  appName: 'My RainbowKit App',
  chains
});
const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider
})

function MyApp({ Component, pageProps }) {

  const router = useRouter();
  return (
    <>
      <Head>
        <title>FounderzDAO</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" type="image/svg" href="img/main-logo.svg" />
        <link rel="stylesheet" href="https://use.typekit.net/mef2bdi.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Sarabun:wght@200&display=swap" rel="stylesheet" />
      </Head>
      <WagmiConfig client={wagmiClient}>
          <RainbowKitProvider chains={chains}>
            <ThemeProvider enableSystem={true} attribute="class">
                <Component {...pageProps} />
            </ThemeProvider>
          </RainbowKitProvider>
      </WagmiConfig>
    </>
  );
}

export default MyApp;
