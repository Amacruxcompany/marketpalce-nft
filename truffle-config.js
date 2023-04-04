
const HDWalletProvider = require("@truffle/hdwallet-provider");
const keys = require("./keys.json");

module.exports = {
  contracts_build_directory: "./public/contracts",
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*",
    },
    testnet: {
      networkCheckTimeout: 1000000,
      provider: () =>
        new HDWalletProvider(
          keys.PRIVATE_KEY,
          keys.BSC_TESTNET_URL
        ),
      network_id: 97,
      gas: 5500000,
      gasPrice: 20000000000,
      confirmations: 2,
      timeoutBlocks: 200
    }
  },
  compilers: {
    solc: {
      version: "0.8.17",
    }
  },
};