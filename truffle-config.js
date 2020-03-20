const HDWalletProvider = require('@truffle/hdwallet-provider');
const fs = require('fs');

let mnemonic;

try {
  mnemonic = fs.readFileSync(".secret").toString().trim();
} catch {
  mnemonic = 'INVALID';
};

module.exports = {
  networks: {
    regtest: {
      host: 'localhost',
      port: 4444,
      netwrok_id: '*',
    },
    testnet: {
      provider: () => new HDWalletProvider(mnemonic, 'https://public-node.testnet.rsk.co', 0, 1, true, `m/44'/37310'/0'/0/`),
      network_id: '31',
      gasPrice: 60000000,
    },
    mainnet: {
      provider: () => new HDWalletProvider(mnemonic, 'https://public-node.rsk.co', 0, 1, true, `m/44'/137'/0'/0/`),
      network_id: '30',
      gasPrice: 60000000,
    },
  },
  compilers: {
    solc: {
      version: '0.4.15',
    },
  },
};
