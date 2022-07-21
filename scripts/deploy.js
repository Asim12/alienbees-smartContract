async function main() {
	const AlienBees = await ethers.getContractFactory('AlienBees');
  require('dotenv').config();
  const {_reservedNFTaddress,_reservedNFTCount ,PublicLimitPerWallet, MaxSupply, ipfsAddress, Name, Symbol} = process.env;
	const contract = await AlienBees.deploy(
    _reservedNFTaddress,
    _reservedNFTCount,
    ["0x6FB46FbF7Cb9416bC6a8405fc6D31725c40F05FA", "0x66CeFFE06BaC9f196ce4191028697999FD1252e7" , "0xB81f7aD54e0FC23f610277C9396A54d6775AcfB3", "0xA71E7986cFa5e7E0773C9b65C88F447156Ea5778", "0xB3330fEec95f6d14A5D3eD07dD9E48d848c345d3", "0x97EaE8A008740f3Ea507bA31965dc719760adF74", "0x8f61157833a82728B530C4f3904876696e1F86eF"],
    PublicLimitPerWallet,    
    MaxSupply,
    ipfsAddress,
    Name,
    Symbol
  );
    console.log(contract.address)
  }
main()
  .then(() => process.exit(0))
  .catch(error => {
	console.error(error);
	process.exit(1);
  });