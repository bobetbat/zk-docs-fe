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

export const contracts = {
  // Sepolia:
  11155111: {
    Core: "0x02CcFA1f950CDBde440a035025677F4d170abebF",
    Scheduler: "0x32E2735553C54b19938907e387c47f36B7B89cC8"
  },
  // Celo:
  44787: {
    Core: "0x32E2735553C54b19938907e387c47f36B7B89cC8",
    Scheduler: "0xc7256041d9f92Ca126c1140b9359d63f8C4F703b"
  }
}
// munbai
// Core 0x32E2735553C54b19938907e387c47f36B7B89cC8
// Scheduler 0xc7256041d9f92Ca126c1140b9359d63f8C4F703b

