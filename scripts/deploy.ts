import { ethers } from "hardhat";

async function main() {
  // const fact = await ethers.getContractFactory('ZebraFactory');
  // const cont = await fact.attach('0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9');
  // const code = await cont.initCodeHash();
  // console.log('code: ', code);
  // return;

  const weth = '0x833372E396496F4c6E59F025483099Bc8DbA79F3';
  const feeToSetter = '0x75beDC6f033c44333470A71D87CDA0eCc27a40dB';
  console.log('weth addr: ', weth);

  const factory = await ethers.deployContract("ZebraFactory", [feeToSetter]);
  await factory.waitForDeployment();
  console.log('factory addr: ', factory.target);
  const initCode = await factory.initCodeHash();
  console.log('factory initcode: ', initCode);

  const router = await ethers.deployContract("ZebraRouter", [factory.target, weth]);
  await router.waitForDeployment();
  console.log('router addr: ', router.target);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
