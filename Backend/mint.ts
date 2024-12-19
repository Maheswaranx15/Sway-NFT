const { Provider, Wallet, Contract, getRandomB256 } = require('fuels');
const { abi } = require('./abi');
require('dotenv').config();  // Load environment variables from the .env file

// Usage
async function main() {
  let contractId = '0xa7828da4f0f86f988fd0d40c0f5dc2ba2ff5e18b0dc81d57317b77856938f3d0';
  // Create a provider, with the Latest Testnet URL.
  const provider = await Provider.create('https://testnet.fuel.network/v1/graphql');
  
  // Initialize wallet with a private key from environment variables
  const privateKey = process.env.MINT_PRIVATE; // Get the private key from the .env file
  const wallet = Wallet.fromPrivateKey(privateKey, provider);
  
  const contract = new Contract(contractId, abi, wallet);
  const { value } = await contract.functions.total_assets().get();
  console.log("Value of Total Assets:", Number(value));

  const amount = BigInt(1);
  const recepient = {
    bits: process.env.RECEPIENT_ADDRESS  // Get recipient address from the .env file
  };
  
  const subId = getRandomB256();
  console.log(recepient, subId, amount);
  
  const result = await contract.functions.mint({ Address: recepient }, subId, amount).txParams({ gasPrice: 1 }).call();
  console.log("Mint result:", await result.waitForResult());
  
  let getOwner = await contract.functions.owner().get();
  console.log(getOwner.value);

  const ownerAddress = {
    Address: {
      bits: process.env.OWNER_ADDRESS  // Get owner address from the .env file
    }
  };

  try {
    let initializeOwner = await contract.functions.constructor(ownerAddress).txParams({ gasPrice: 1 }).call();
    let ownership = await initializeOwner.waitForResult();
    console.log("Ownership initialized:", ownership);
  } catch (error) {
    console.error("Failed to initialize owner:", error);
  }
}

main().catch(console.error);
