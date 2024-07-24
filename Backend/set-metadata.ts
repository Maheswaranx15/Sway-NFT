// import { getMintedAssetId } from "fuels";

const { Provider, Wallet, Contract, getRandomB256 } = require('fuels');
const { abi } = require('./abi');

async function main() {
  let contractId = '0xa7828da4f0f86f988fd0d40c0f5dc2ba2ff5e18b0dc81d57317b77856938f3d0';
  // Create a provider, with the Latest Testnet URL.
  const provider = await Provider.create('https://testnet.fuel.network/v1/graphql');

  // Initialize wallet with a private key
  // const privateKey = ""; // Replace with your Asset holder private key

  const privateKey =  ''  // Replace with your owner private key
  const wallet = Wallet.fromPrivateKey(privateKey, provider);
  const contract = new Contract(contractId, abi, wallet);
  
  // Fetch total assets
  const { value } = await contract.functions.total_assets().get();
  console.log("Value of Total Assets:", Number(value));

  // // Define assetId and metadataKey
  const assetId = { bits: '0xe9adcec50b7d3d47705ae07ca5cb02ab94b2d97ad9b94ac9fa57d5d45f0f2d30' }; // Replace with actual asset ID
  let subID = '' //get sub id from asset mint transaction
  // const mintedAssetId = getMintedAssetId(subID, contract.id.toB256());
  const metadataKey = 'image:png';
  const keyvalue = 'https://arweave.net/LxILnA3lG-oRW5eZR4XAB-RnzpcFRjhSwh_PfQmw1Jw'   //--NO NFT
  // https://arweave.net/fKgGBtyEk4XUo07r9sCMNrIlwOguL4aax6rMXFRJHJQ -- Yes 
  // Create the Metadata::String variant
  const metadataEnum = { String: keyvalue };
  let Nftname = 'CryptoSage-NoNFT'
  let nftsymbol = 'CRYP-NO'
  // Call set_metadata function with the correct parameters
  const setmetadata = await contract.functions.set_metadata(assetId,metadataKey,metadataEnum).txParams({ gasPrice: 1 }).call();
  let setmetadatatxn = await setmetadata.waitForResult();
  console.log("Metadata:", setmetadatatxn);

  const getmetadata = await contract.functions.metadata(assetId, metadataKey).get();
  console.log("Metadata:",getmetadata.value);

  const setname = await contract.functions.set_name(assetId,Nftname).txParams({ gasPrice: 1 }).call();
  let setnamedata = await setname.waitForResult();
  console.log("setnamedata:",setnamedata) 

  const setsymbol = await contract.functions.set_symbol(assetId,nftsymbol).txParams({ gasPrice: 1 }).call();
  let setsymboldata = await setsymbol.waitForResult();
  console.log("setsymboldata:",setsymboldata);

  const getsymbol = await contract.functions.symbol(assetId).get()
  console.log("Symbol of the Asset: ",getsymbol.value)

  const getname = await contract.functions.name(assetId).get()
  console.log("Name of the Asset: ",getname.value)
}

main().catch(console.error);
