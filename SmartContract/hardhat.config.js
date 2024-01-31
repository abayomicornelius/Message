require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.19",
  networks:{
    sepolia:{
      url:  "https://eth-sepolia.g.alchemy.com/v2/Zx2QnnHyfxAxPhUpMX8GHvst_Fv9-aZM",
      accounts: ["76b94c8686348638aef9ba12ed341f65c2ddd86cd30d04692a50414c854f8e83"],
    }
  }
};
