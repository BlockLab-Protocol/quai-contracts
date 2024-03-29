const { ethers } = require("hardhat");

async function main() {
  // const fact = await ethers.getContractFactory('ZebraFactory');
  // const cont = await fact.attach('0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9');
  // const code = await cont.initCodeHash();
  // console.log('code: ', code);
  // return;

  const WQuai = '0x1a2c10fbaef57294951c415f623171fbd65473d0';
  const feeToSetter = '0x151f2b940af0320109ee72f137ca5d1a6759fa11';
  console.log('wquai addr: ', WQuai);

  const factory = await ethers.deployContract("ZebraV3Factory", [feeToSetter]);
  await factory.deployed();
  console.log('factory addr: ', factory.address);
  const initCode = await factory.initCodeHash();
  console.log('factory initcode: ', initCode);

  const router = await ethers.deployContract("ZebraRouter", [factory.address, WQuai]);
  await router.deployed();
  console.log('router addr: ', router.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});




/*

THIS IS S TYPESCRIPT CODE.
import { ethers } from "hardhat";

async function main() {
  // const fact = await ethers.getContractFactory('ZebraFactory');
  // const cont = await fact.attach('0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9');
  // const code = await cont.initCodeHash();
  // console.log('code: ', code);
  // return;

  const WQuai = '0x1a2c10fbaef57294951c415f623171fbd65473d0';
  const feeToSetter = '0x151f2b940af0320109ee72f137ca5d1a6759fa11';
  console.log('WQuai addr: ', WQuai);

  const factory = await ethers.deployContract("ZebraFactory", [feeToSetter]);
  await factory.waitForDeployment();
  console.log('factory addr: ', factory.target);
  const initCode = await factory.initCodeHash();
  console.log('factory initcode: ', initCode);

  const router = await ethers.deployContract("ZebraRouter", [factory.target, WQuai]);
  await router.waitForDeployment();
  console.log('router addr: ', router.target);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
*/