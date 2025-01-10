// import { HashedSetState } from './src/contracts/usestate'
// import {
//     bsv,
//     TestWallet,
//     DefaultProvider,
//     HashedSet,
//     ByteString,
//     toByteString,
//     MethodCallOptions,
// } from 'scrypt-ts'

// import * as dotenv from 'dotenv'

// // Load the .env file
// dotenv.config()

// if (!process.env.PRIVATE_KEY) {
//     throw new Error(
//         'No "PRIVATE_KEY" found in .env, Please run "npm run genprivkey" to generate a private key'
//     )
// }

// // Read the private key from the .env file.
// const privateKey = bsv.PrivateKey.fromWIF(process.env.PRIVATE_KEY || '')

// // Prepare signer.
// const signer = new TestWallet(
//     privateKey,
//     new DefaultProvider({
//         network: bsv.Networks.testnet,
//     })
// )

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

// async function deploy() {
//     await compileContract();
//     await HashedSetState.loadArtifact()

//     // Initialize contract state
//     const set = new HashedSet<ByteString>()
//     const stateSet = new HashedSetState(set)

//     // Connect to a signer.
//     await stateSet.connect(signer)

//     // Define initial balance for the contract (in satoshis)
//     const initBalance = 10000

//     // Contract deployment.
//     const deployTx = await stateSet.deploy(initBalance)
//     console.log(`Usestate contract deployed: ${deployTx.id}`)

//     // Output the contract address
//     // console.log('Contract Address:', stateSet.address)
// }


// async function callAddOnChain(
//     txId: string,
//     atOutputIndex = 0
// ): Promise<string> {
//     // Fetch TX via provider and reconstruct contract instance.
//     console.log('entry')
//     const tx = await signer.connectedProvider.getTransaction(txId)
//     await compileContract();
//     console.log('tx',tx)
//     const instance = HashedSetState.fromTx(tx, atOutputIndex)
//     console.log('instance',instance)
//     await instance.connect(signer)

//     const nextInstance = instance.next()
//     const initialMessage = toByteString(
//         'https://gateway.pinata.cloud/ipfs/QmbsxrAkDexeQuu6cC1NoaJeG1oH1864gySVhbJk5nZ6ow/7001.mp4',
//         true
//     )
//     nextInstance.add(initialMessage)

//     const { tx: callTx } = await instance.methods.add({
//         next: {
//             instance: nextInstance,
//             balance: instance.balance,
//         },
//     } as MethodCallOptions<HashedSetState>)
//     return callTx.id
// }

// // Execute the deployment function

// // deploy().catch(console.error)

// callAddOnChain('3b66b002b4ab0c9e735e6b08f4a7441602ab42baccf92382be6d564afc108ddf',0)
// // async function main() {

// //     // let lastTxId = deploy().catch(console.error)
// //     // await callAddOnChain(.toString(),)
// // }

// // (async () => {
// //     await main()
// // })()

// // 3b66b002b4ab0c9e735e6b08f4a7441602ab42baccf92382be6d564afc108ddf


 
// sofa 2 80L,
// Wardrobe 40 , TV unit , bed , pooja unit 1.5 L
// bed matteress 40
// 2 AC 50 ,  1 TV 50, washing machine 15, 
// dinig table 15, 
//  60, 4 pillow 7,
// TV unit 10, modular kitchen(opt),    


import { HashedSetState } from './dist/contracts/usestate';
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

// Prepare signer
const signer = new TestWallet(
    privateKey,
    new DefaultProvider({
        network: bsv.Networks.testnet,
    })
);

// Function to compile the contract
async function compileContract() {
    try {
        console.log('Compiling the contract...');
        await HashedSetState.compile();
        console.log('Contract compiled successfully.');
    } catch (error) {
        console.error('Error compiling the contract:', error);
        throw error;
    }
}

// Deploy function
async function deploy() {
    // Compile the contract
    await compileContract();

    // Load the contract artifact
    await HashedSetState.loadArtifact();

    // Initialize contract state
    const set = new HashedSet<ByteString>();
    const stateSet = new HashedSetState(set);

    // Connect to a signer
    await stateSet.connect(signer);

    // Define initial balance for the contract (in satoshis)
    const initBalance = 10000;

    // Contract deployment
    const deployTx = await stateSet.deploy(initBalance);
    console.log(`Usestate contract deployed: ${deployTx.id}`);
}
async function callAddOnChain(txId: string, atOutputIndex = 0){
    // Compile the contract before using it
    await compileContract();

    // console.log('Fetching transaction...');
    const tx = await signer.connectedProvider.getTransaction(txId);
    // console.log('Transaction fetched:', tx);

    // Fetch the current state of the hashedset from the transaction
    const currentSet = new HashedSet<ByteString>();
    currentSet.add(
        toByteString(
            'https://gateway.pinata.cloud/ipfs/QmbsxrAkDexeQuu6cC1NoaJeG1oH1864gySVhbJk5nZ6ow/7001.mp4',
            true
        )
    );

    // Reconstruct the contract instance with the current state of the hashedset
    const instance = HashedSetState.fromTx(tx, atOutputIndex, currentSet);

    console.log('Reconstructed contract instance with current state:', currentSet);

    // Connect the instance to the signer
    await instance.connect(signer);

    // Create the next instance with the updated state
    // const nextInstance = instance.next();
    // const newMessage = toByteString(
    //     'https://gateway.pinata.cloud/ipfs/QmbsxrAkDexeQuu6cC1NoaJeG1oH1864gySVhbJk5nZ6ow/7002.mp4',
    //     true
    // );
    // nextInstance.hashedset.add(newMessage); // Add the new state

    
    // Call the `add` method with the updated state
    // const { tx: callTx } = await instance.methods.add(newMessage, {
    //     next: {
    //         instance: nextInstance,
    //         balance: instance.balance,
    //     },
    // } as MethodCallOptions<HashedSetState>);

    // console.log('Call transaction ID:', callTx.id);
    // return callTx.id;
}






// Execute the deployment or method call
// Uncomment to deploy
// deploy().catch(console.error);

// Call the add method on-chain
callAddOnChain('3b66b002b4ab0c9e735e6b08f4a7441602ab42baccf92382be6d564afc108ddf', 0).catch(console.error);