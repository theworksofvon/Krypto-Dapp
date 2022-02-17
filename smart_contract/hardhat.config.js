// https://eth-ropsten.alchemyapi.io/v2/vkM87QOAUXfAGX78yZymzXZcAHAOWI-A

require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    ropsten: {
      url: "https://eth-ropsten.alchemyapi.io/v2/vkM87QOAUXfAGX78yZymzXZcAHAOWI-A",
      accounts: [
        "d128eef6ff19b41b06ccb2c234f2ad6db8584c92235df840470afcc2372e7653",
      ],
    },
  },
};
