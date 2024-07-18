const { Provider, Wallet, Contract, getRandomB256 } = require('fuels');
const { abi } = require('./abi');

async function main() {
  let contractId = '0xe42d3395676211db7fd38218bd8058b7ce9d6b89afec39af58ffe2a089891c0f';
  // Create a provider, with the Latest Testnet URL.
  const provider = await Provider.create('https://testnet.fuel.network/v1/graphql');

  // Initialize wallet with a private key
  const privateKey = process.env.PRIVATEKEY; // Replace with your private key
  const wallet = Wallet.fromPrivateKey(privateKey, provider);
  const contract = new Contract(contractId, abi, wallet);
  
  // Fetch total assets
  const { value } = await contract.functions.total_assets().get();
  console.log("Value of Total Assets:", Number(value));

  // // Define assetId and metadataKey
  const assetId = { bits: '0x264568c7cdc51361b0ea10f8fbae6274a0737a3ace4fa9a88a8e293c3fec26eb' }; // Replace with actual asset ID
  const metadataKey = 'https://arweave.net/LxILnA3lG-oRW5eZR4XAB-RnzpcFRjhSwh_PfQmw1Jw';

  // Create the Metadata::String variant
  const metadataEnum = { String: metadataKey };

  // Call set_metadata function with the correct parameters
  const metadata = await contract.functions.set_metadata(assetId, "This is NO NFT", metadataEnum).txParams({ gasPrice: 1 }).call();
  console.log("Metadata:", metadata);
}

main().catch(console.error);
