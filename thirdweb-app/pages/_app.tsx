import type { AppProps } from "next/app";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import { Chain } from "@thirdweb-dev/react";
import "../styles/globals.css";

// This is the chain your dApp will work on.
// Change this to the chain your app is built for.
// You can also import additional chains from `@thirdweb-dev/chains` and pass them directly.

const activeChain = {
  chainId: 378980472,
  rpc: ["https://divervenom-rpc.eu-north-2.gateway.fm"],
  shortName: "divervenom",
  slug: "divervenom",
  chain: "divervenom",
  name: "divervenom",
  testnet: true,
  explorers: [
    {
      name: "blockscout",
      url: "https://divervenom-blockscout.eu-north-2.gateway.fm",
      standard: "EIP3091",
    },
  ],
  nativeCurrency: {
    name: "Ether",
    symbol: "ETH",
    decimals: 18,
  },
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider
      clientId={process.env.NEXT_PUBLIC_TEMPLATE_CLIENT_ID}
      activeChain={activeChain}
    >
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default MyApp;
