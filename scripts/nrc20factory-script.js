// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy

  const Nrc20Factory = await hre.ethers.getContractFactory("Nrc20Factory");
  const nrc20Factory = await Nrc20Factory.deploy();

  await nrc20Factory.deployed();

  const name = "marytest";
  const symbol = "mtt";
  const decimals = 18;
  const amount = "1000000000000000000000000";
  const mintable = true;
  const owner = "0xaAc28E91337D80Ab0a342E10B00a2436c819C956";

  const tx = await nrc20Factory.createCoin(name,symbol,decimals,amount,mintable,owner);
  

  //console.log(await tx.wait());

  console.log("nrc20Factory deployed to:", nrc20Factory.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
