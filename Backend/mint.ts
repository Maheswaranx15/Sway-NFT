const { Provider, Wallet, Contract, getRandomB256 } = require('fuels');
const { abi } = require('./abi');

// Usage
// const address = 'fuel1ajyaxl3g4f8aejdz7jmahfrp25xngq4m9cxevmq4twxprj58fr7sd2kfv6';
//e1b9bc8a104a1e3e519906d857d44bc931a17844d3b82b5cee47c2690c378d2f
async function main() {
  let contractId = '0xabf3d4e044ea8c28716d44f2cdac475e7efbcd0621a6c641ba8d5c20fbb3f859';
  // Create a provider, with the Latest Testnet URL.
  const provider = await Provider.create('https://testnet.fuel.network/v1/graphql');

  // Initialize wallet with a private key
  const privateKey = process.env.PRIVATEKEY; // Replace with your private key
  const wallet = Wallet.fromPrivateKey(privateKey, provider);
  const contract = new Contract(contractId, abi, wallet);
  const { value } = await contract.functions.total_assets().get();
  console.log("Value of Total Assets:", Number(value));
  const amount = BigInt(1);
  const recepient = {
    bits: '0x718bcb2a183f73a40a0cc90f1801bd2af283d4532bf0e7a49b6cdcdd4446a67f'
  };
  const subId = getRandomB256();
  console.log(recepient,subId,amount)
  const result = await contract.functions.mint({ Address: recepient }, subId, amount).txParams({ gasPrice: 1 }).call();
  console.log("Mint result:", result);

}

main().catch(console.error);
