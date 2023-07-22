import type { Chain } from 'wagmi/chains'

export const mantleTestnet: Chain = {
  id: 5001,
  name: 'Mantle Testnet',
  network: 'Mantle',
  nativeCurrency: {
    name: 'MNT',
    symbol: 'MNT',
    decimals: 18
  },
  rpcUrls: {
    default: {
      http: ['https://rpc.testnet.mantle.xyz']
    },
    public: {
      http: ['https://rpc.testnet.mantle.xyz']
    }
  },
  blockExplorers: {
    default: {
      name: 'blockscout',
      url: 'https://explorer.testnet.mantle.xyz'
    }
  }
}

export const lineaTestnet: Chain = {
  id: 59140,
  name: 'Linea Testnet',
  network: 'Linea',
  nativeCurrency: {
    name: 'ETH',
    symbol: 'ETH',
    decimals: 18
  },
  rpcUrls: {
    default: {
      http: ['https://rpc.goerli.linea.build']
    },
    public: {
      http: ['https://rpc.goerli.linea.build']
    }
  },
  blockExplorers: {
    default: {
      name: 'blockscout',
      url: 'https://explorer.goerli.linea.build'
    }
  }
}

export const neonTestnet: Chain = {
  id: 245022926,
  name: 'Neon Testnet',
  network: 'Neon',
  nativeCurrency: {
    name: 'NEON',
    symbol: 'NEON',
    decimals: 18
  },
  rpcUrls: {
    default: {
      http: ['https://proxy.devnet.neonlabs.org/solana']
    },
    public: {
      http: ['https://proxy.devnet.neonlabs.org/solana']
    }
  },
  blockExplorers: {
    default: {
      name: 'blockscout',
      url: 'https://devnet.explorer.neon-labs.org'
    }
  }
}

