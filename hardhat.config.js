require("@nomiclabs/hardhat-waffle");
require('@nomiclabs/hardhat-ethers');
require("@nomiclabs/hardhat-etherscan");
require('dotenv').config();
const {alchemyKey, privateKey} = process.env;
console.log(alchemyKey) 
task("accounts", "Prints the list of accounts", async () => {
  const accounts = await ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

module.exports = {
  defaultNetwork: "rinkeby",
  mocha: {
    timeout: 100000000
  },
  networks: {
    localhost: {
      url: "http://127.0.0.1:7545",
      network_id: 5777,
    },
    hardhat: {
    },
    testnet: {
      url: "https://data-seed-prebsc-1-s1.binance.org:8545",
      chainId: 97,
      gasPrice: 20000000000,
      accounts: [privateKey]
    },
    mainnet: {
      url: "https://bsc-dataseed.binance.org/",
      chainId: 56,
      gasPrice: 20000000000,
      accounts: [privateKey]
    },
    rinkeby: {
      url: "https://eth-rinkeby.alchemyapi.io/v2/RtwBBLVH1uor5SnJqBl3ea7kwkKTyCja",
      accounts: [privateKey],
      chainId: 4,
     },
  },
  etherscan: {
    apiKey: {
      rinkeby: alchemyKey 

    }
  },
  solidity: {
  version: "0.8.7",
  settings: {
    optimizer: {
      enabled: true
    }
   }
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts"
  },
  mocha: {
    timeout: 20000
  }
};

