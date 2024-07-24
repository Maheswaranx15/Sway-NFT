const { Provider, Wallet, Contract, getRandomB256 } = require('fuels');
const { abi } = require('./abi');

// Usage
async function main() {
  let contractId = '0xa7828da4f0f86f988fd0d40c0f5dc2ba2ff5e18b0dc81d57317b77856938f3d0';
  // Create a provider, with the Latest Testnet URL.
  const provider = await Provider.create('https://testnet.fuel.network/v1/graphql');
  // Initialize wallet with a private key
  const privateKey = ''; // Replace with your private key
  const wallet = Wallet.fromPrivateKey(privateKey, provider);
  
  const contract = new Contract(contractId, abi, wallet);
  const { value } = await contract.functions.total_assets().get();
  console.log("Value of Total Assets:", Number(value));
  const amount = BigInt(1);
  const recepient = {
    bits: '0xde7d67cfa349db975d3781cd1e55b559ba71a3a37d8877825a1a9e703ac09cb4'
  };
  const subId = getRandomB256();
  console.log(recepient,subId,amount)
  const result = await contract.functions.mint({ Address: recepient }, subId, amount).txParams({ gasPrice: 1 }).call();
  console.log("Mint result:", await result.waitForResult());
  let getOwner = await contract.functions.owner().get()
  console.log(getOwner.value)

  const ownerAddress = {
    Address: {
      bits: '0x1b29c3f4d418eceaee016dd42704287630e58ab01ce9e8f0fcd0c398b7a2033d'
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
