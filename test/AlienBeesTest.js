const{ ethers } = require("hardhat")
const{assert} = require("chai")

describe("AlienBees", function(){

let AlienBees, contract, owner

beforeEach(async function(){
    
    [owner] = await ethers.getSigners();
    AlienBees = await ethers.getContractFactory('AlienBees')
    contract  = await AlienBees.deploy(

    "777",
    "ipfs://testing", 
    "AlienBeesTest" ,
    "ABT"
  )
  console.log(contract.address)
  }

  )

  //minting 

it("User should be able to mint  NFT", async function(){
  
  const txResponse =  await contract.mintBee()
  await txResponse.wait(1)
  console.log(owner.address)
  const mintedNFTs = await contract.balanceOf(owner.address)
  assert.equal(mintedNFTs.toString(), "1")
})

 //token URI

it("the token 1 URI should exist ", async function(){

 const txResponse =  await contract.mintBee()
 await txResponse.wait(1)
 const tokenURI = await contract.tokenURI(0)
 assert.equal(tokenURI, await contract.tokenURI(0))
})


} )




