import "../styles/globals.css";
import type, { AppProps } from "next/app";
// import { useEffect } from "react";
import { useRouter } from "next/router";
import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { chain, configureChains, createClient, WagmiConfig } from "wagmi";
import { jsonRpcProvider } from "wagmi/providers/jsonRpc";
import { ThemeProvider } from 'next-themes';

function MyApp({ Component, pageProps }) {
  const ethereumConnect = {
    id: 1,
    name: "Ethereum",
    network: "Ethereum",
    nativeCurrency: {
      decimals: 18,
      name: "Ethereum",
      symbol: "ETH",
    },
    rpcUrls: {
      default: "https://rpc.flashbots.net",
    },
    blockExplorers: {
      default: {
        name: "Etherscan",
        url: "https://etherscan.com/",
      },
    },
    testnet: true,
  };
  const { chains, provider } = configureChains(
    [ethereumConnect],
    [
      jsonRpcProvider({
        rpc: (chain) => {
          if (chain.id !== ethereumConnect.id) return null;
          return { http: chain.rpcUrls.default };
        },
      }),
    ]
  );

  const { connectors } = getDefaultWallets({
    appName: "Founderz Dao",
    chains,
  });
  const wagmiClient = createClient({
    autoConnect: false,
    connectors,
    provider,
  });
  const router = useRouter();
  return (
    
    <WagmiConfig client={wagmiClient}>
        <RainbowKitProvider chains={chains}>
          <ThemeProvider enableSystem={true} attribute="class">
              <Component {...pageProps} />
          </ThemeProvider>
        </RainbowKitProvider>
    </WagmiConfig>
    
  );
}

export default MyApp;
