// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");


function sleep(timeout) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, timeout);
  });
}


async function main() {
  /**
   *  constructor(
        address _adminAddress,
        address _treasuryAddress,
        address _WBNBAddress,
        uint256 _minimumAskPrice,
        uint256 _maximumAskPrice
    ) {
   */
  //777
  const adminAddress = "0xf71A370D35F70E4467A90BC696D48e357bA91A46";
  const treasuryAddress = "0xf71A370D35F70E4467A90BC696D48e357bA91A46";
  const wbnbAddress = "0xfa95376c1469063176Bfe1ee4D6A45CE094b03Ed";
  const minimumAskPrice = "1000000000000000";//0.001
  const maximumAskPrice = "1000000000000000000000000";//100000
  const tradingFeeRate = "200";//trading fee (100 = 1%, 500 = 5%, 5 = 0.05%)



  const ERC721NFTMarketV1 = await hre.ethers.getContractFactory("ERC721NFTMarketV1");
  const marketV1 = await ERC721NFTMarketV1.deploy(adminAddress,treasuryAddress,wbnbAddress,minimumAskPrice,maximumAskPrice,tradingFeeRate);

  await marketV1.deployed();
  await sleep(10000);

  console.log("marketV1 deployed to:", marketV1.address);

  
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
