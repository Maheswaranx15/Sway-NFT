const { Provider, Wallet, Contract, getRandomB256 } = require('fuels');
const { abi } = require('./abi');

async function main() {
  let contractId = '0xcb10903dcc6cd70bb2368843b9872c22795fa2c0feb938e8c54a975d6283dc71';
  // Create a provider, with the Latest Testnet URL.
  const provider = await Provider.create('https://testnet.fuel.network/v1/graphql');

  // Initialize wallet with a private key
  const privateKey = "089634fdd0719293d72abc10cf06331e4b0992350c502860951ffb2530ae8521"; // Replace with your private key
  const wallet = Wallet.fromPrivateKey(privateKey, provider);
  const contract = new Contract(contractId, abi, wallet);
  
  // Fetch total assets
  const { value } = await contract.functions.total_assets().get();
  console.log("Value of Total Assets:", Number(value));

  // // Define assetId and metadataKey
  const assetId = { bits: '0x0356e6032a05525dc91de9f4c46b8bc4702231729e72abb37987801ae2256cd2' }; // Replace with actual asset ID
  const metadataKey = 'image:png';
  const keyvalue = 'https://arweave.net/fKgGBtyEk4XUo07r9sCMNrIlwOguL4aax6rMXFRJHJQ'

  // Create the Metadata::String variant
  const metadataEnum = { String: keyvalue };

  // Call set_metadata function with the correct parameters
  // const metadata = await contract.functions.set_metadata(assetId,metadataKey,metadataEnum).txParams({ gasPrice: 1 }).call();
  // console.log("Metadata:", metadata);

  const metadata = await contract.functions.metadata(assetId, metadataKey).get();
  console.log("Metadata:",metadata.value);
}

main().catch(console.error);
