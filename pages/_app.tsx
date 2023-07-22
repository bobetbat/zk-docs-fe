import '../styles/globals.css';
import '@rainbow-me/rainbowkit/styles.css';

import type { AppProps } from 'next/app';

import { Provider } from 'react-redux'
import { ThemeProvider, CssBaseline } from '@mui/material';
import { connectorsForWallets, getDefaultWallets, RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import {
  mainnet,
  gnosisChiado,
  polygonZkEvm,
  polygonZkEvmTestnet,
  zkSync,
  sepolia,
  celoAlfajores
} from 'wagmi/chains';
import {
  argentWallet,
  trustWallet,
  ledgerWallet,
} from '@rainbow-me/rainbowkit/wallets';
import { publicProvider } from 'wagmi/providers/public';

import { mantleTestnet, lineaTestnet, neonTestnet } from '../config/chains';
import { store } from '../store'
import theme from '../styles/theme';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [
    sepolia,
    celoAlfajores,
    neonTestnet,
    lineaTestnet,
    gnosisChiado,
    mantleTestnet,
    polygonZkEvmTestnet
    // mainnet,
    // ...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === 'true' ? [goerli] : []),
  ],
  [publicProvider()]
);
const projectId = process.env.NEXT_PUBLIC_PROJECT_ID ?? '';
const { wallets } = getDefaultWallets({
  appName: 'zkDocs',
  projectId,
  chains,
});

const connectors = connectorsForWallets([
  ...wallets,
  {
    groupName: 'Other',
    wallets: [
      argentWallet({ projectId, chains }),
      trustWallet({ projectId, chains }),
      ledgerWallet({ projectId, chains }),
    ],
  },
]);


const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
  webSocketPublicClient,
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: 'https://api.studio.thegraph.com/query/45437/zkestate-rentalnft/v0.0.1',
});

const App = ({ Component, pageProps }: AppProps) => {

  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <WagmiConfig config={wagmiConfig}>
            <RainbowKitProvider chains={chains}>
              <Component {...pageProps} />
            </RainbowKitProvider>
          </WagmiConfig>
        </ThemeProvider>
      </Provider>
    </ApolloProvider>
  );
}

export default App;
