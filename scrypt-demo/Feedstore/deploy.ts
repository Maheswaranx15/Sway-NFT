import { HashedSetState } from './src/contracts/usestate';
import {
    bsv,
    TestWallet,
    DefaultProvider,
    HashedSet,
    ByteString,
    toByteString,
    MethodCallOptions,
} from 'scrypt-ts';



import * as dotenv from 'dotenv';

// Load the .env file
dotenv.config();

if (!process.env.PRIVATE_KEY) {
    throw new Error(
        'No "PRIVATE_KEY" found in .env, Please run "npm run genprivkey" to generate a private key'
    );
}

// Read the private key from the .env file
const privateKey = bsv.PrivateKey.fromWIF(process.env.PRIVATE_KEY || '');
const provider = new DefaultProvider({
    network: bsv.Networks.testnet,
  })
// Prepare signer
const signer = new TestWallet(
    privateKey,
    provider
);

// Function to compile the contract
// async function compileContract() {
//     try {
//         console.log('Compiling the contract...');
//         await HashedSetState.compile();
//         console.log('Contract compiled successfully.');
//     } catch (error) {
//         console.error('Error compiling the contract:', error);
//         throw error;
//     }
// }

// Deploy function
// async function deploy() {
//     // Compile the contract
//     await compileContract();

//     // Load the contract artifact
//     await HashedSetState.loadArtifact();

//     // Initialize contract state
//     const set = new HashedSet<ByteString>();
//     const stateSet = new HashedSetState(set);

//     // Connect to a signer
//     await stateSet.connect(signer);

//     // Define initial balance for the contract (in satoshis)
//     const initBalance = 10000;

//     // Contract deployment
//     const deployTx = await stateSet.deploy(initBalance);
//     console.log(`Usestate contract deployed: ${deployTx.id}`);
// }
async function callAddOnChain(txId: string, atOutputIndex = 0){
    // Compile the contract before using it
    // await compileContract();

    // console.log('Fetching transaction...');
    const tx = await signer.connectedProvider.getTransaction(txId);
    // const instance = HashedSetState.fromTx(tx, 0)
    // console.log('instance fetched:', instance);
    // instance.connect(signer)
    // Fetch the current state of the hashedset from the transaction
    // const currentSet = new HashedSet<ByteString>();
    // currentSet.add(
    //     toByteString(
    //         'https://gateway.pinata.cloud/ipfs/QmbsxrAkDexeQuu6cC1NoaJeG1oH1864gySVhbJk5nZ6ow/7001.mp4',
    //         true
    //     )
    // );

    const message = toByteString('https://gateway.pinata.cloud/ipfs/QmbsxrAkDexeQuu6cC1NoaJeG1oH1864gySVhbJk5nZ6ow/7001.mp4', true)
    const { tx: callTx } = await instance.methods.add(message)
    console.log('Demo contract "unlock" called: ', callTx.id)

    // Reconstruct the contract instance with the current state of the hashedset
    const instance = HashedSetState.fromTx(tx, atOutputIndex);

    console.log('Reconstructed contract instance with current state:', currentSet);

    // Connect the instance to the signer
    await instance.connect(signer);

    // Create the next instance with the updated state
    const nextInstance = instance.next();
    const newMessage = toByteString(
        'https://gateway.pinata.cloud/ipfs/QmbsxrAkDexeQuu6cC1NoaJeG1oH1864gySVhbJk5nZ6ow/7002.mp4',
        true
    );
    nextInstance.hashedset.add(newMessage); // Add the new state

    
    // Call the `add` method with the updated state
    const { tx: callTx } = await instance.methods.add(newMessage, {
        next: {
            instance: nextInstance,
            balance: instance.balance,
        },
    } as MethodCallOptions<HashedSetState>);

    console.log('Call transaction ID:', callTx.id);
    return callTx.id;
}






// Execute the deployment or method call
// Uncomment to deploy
// deploy().catch(console.error);

// Call the add method on-chain
callAddOnChain('3b66b002b4ab0c9e735e6b08f4a7441602ab42baccf92382be6d564afc108ddf', 0).catch(console.error);