async function main() {
    const MySNFT = await ethers.getContractFactory("MySNFT")
  
    // Start deployment, returning a promise that resolves to a contract object
    const mySNFT = await MySNFT.deploy()
    await mySNFT.deployed()
    console.log("Contract deployed to address:", mySNFT.address)
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error)
      process.exit(1)
    })
  