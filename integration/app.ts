const { Provider, Wallet, Contract } = require('fuels');
const { abi } = require('./abi');

// Usage
const address = '0x01aa306f84710152e391555668531f981c230578aa6b0d54c710514bc91474ae';

async function main() {
  let contractId = '0x54e020a518561f23402305e294d9b5342add529a1f780a36325e237b862bc4f9';
  // Create a provider, with the Latest Testnet URL.
  const provider = await Provider.create('https://testnet.fuel.network/v1/graphql');

  // Initialize wallet with a private key
  const privateKey = '0xc04e97cba4e72075d02a62593871f6aabc4fb4d80b027f099b11718463f43a7f'; // Replace with your private key
  const wallet = Wallet.fromPrivateKey(privateKey, provider);

  const contract = new Contract(contractId, abi, wallet);

  const { value } = await contract.functions.total_assets().get();
  console.log("Value of Total Assets:", Number(value));

  const amount = BigInt(10e8);
  const address = {
    bits: '0x01aa306f84710152e391555668531f981c230578aa6b0d54c710514bc91474ae'
  };

  const subId = '0x0000000000000000000000000000000000000000000000000000000000000000';

  const result = await contract.functions.mint({ Address: address }, subId, amount).txParams({ gasPrice: 1 }).call();
  console.log("Mint result:", result);
}

main().catch(console.error);
