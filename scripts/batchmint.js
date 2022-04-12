const hre = require("hardhat");

async function main() {
  const Poap = await hre.ethers.getContractFactory("Poap");

  //Address to distribute Poap (address[])
  const owners = [
    "0x5EC78a0785C6D003706D36853a991ef3f3E4C812",
    "0x13F43e9eC345d862b5f04D5D7455e2De8da3Fc12",
  ];

  //Poap Ids which is the one you want to distrubute (uint256[])
  //Note: length of ids array should be equal to owner's an amount's
  const ids = [0, 0];

  //How many amount of that poap you wnat to distribute to the owner (uint256[])
  const amount = [30, 30];

  //   Contract Address
  const CONTRACT_ADDRESS = "0x07CC72B8534e04fF7EDDCED873ff4F35cF8A9256";

  const contract = Poap.attach(CONTRACT_ADDRESS);
  await contract.mintTo(owners, ids, amount);
  console.log("Poap minted:", contract);
}
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
