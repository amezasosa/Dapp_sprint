/**
* @type import('hardhat/config').HardhatUserConfig
*/

require('dotenv').config();
require("@nomiclabs/hardhat-ethers");

const { API_URL, PRIVATE_KEY } = process.env;

module.exports = {
   solidity: "0.7.3",
   defaultNetwork: "goerli",
   networks: {
      hardhat: {},
      goerli: {
         url: "https://eth-goerli.g.alchemy.com/v2/U_Ej8SEP0gFKOdAvAk3315fGrrRDGb6P",
         accounts: [`0x${"17d5fddc9fc0fd1a9e18a50d48d76cac7a3b3224cdbdb34c4bf0ff7036f35a93"}`]
      }
   },
}