const { Provider, Wallet, Contract, getRandomB256 } = require('fuels');
const { abi } = require('./abi');

// Usage
async function main() {
  let contractId = '0xcb10903dcc6cd70bb2368843b9872c22795fa2c0feb938e8c54a975d6283dc71';
  // Create a provider, with the Latest Testnet URL.
  const provider = await Provider.create('https://testnet.fuel.network/v1/graphql');
  // Initialize wallet with a private key
  const privateKey = '089634fdd0719293d72abc10cf06331e4b0992350c502860951ffb2530ae8521'; // Replace with your private key
  const wallet = Wallet.fromPrivateKey(privateKey, provider);
  const contract = new Contract(contractId, abi, wallet);
  const { value } = await contract.functions.total_assets().get();
  console.log("Value of Total Assets:", Number(value));
  const amount = BigInt(1);
  const recepient = {
    bits: '0x1b29c3f4d418eceaee016dd42704287630e58ab01ce9e8f0fcd0c398b7a2033d'
  };
  const subId = getRandomB256();
  console.log(recepient,subId,amount)
  const result = await contract.functions.mint({ Address: recepient }, subId, amount).txParams({ gasPrice: 1 }).call();
  console.log("Mint result:", result);

}

main().catch(console.error);
