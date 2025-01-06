import { expect, use } from 'chai'
import { ByteString, PubKey, bsv, sha256, toByteString } from 'scrypt-ts'
import { Feedstore } from '../src/contracts/feedstore'
import { getDefaultSigner } from './utils/txHelper'
import chaiAsPromised from 'chai-as-promised'

use(chaiAsPromised)

describe('Test SmartContract `Feedstore`', () => {
    let instance: Feedstore
    const initialMessage = toByteString('https://gateway.pinata.cloud/ipfs/QmbsxrAkDexeQuu6cC1NoaJeG1oH1864gySVhbJk5nZ6ow/7001.mp4', true)
    const initialHash = sha256(initialMessage)
    const initialContent = initialMessage

    before(async () => {
        Feedstore.loadArtifact()
        const signer = getDefaultSigner()
        const privateKeyWIF = 'cRLCjzUPBYnx1TVtuwr9jocxQHpF1qhBzm4Hm1S9V9cU9g5iMfi4'
        const privateKey = new bsv.PrivateKey(privateKeyWIF)
        const publicKey = privateKey.publicKey

        // Convert the PublicKey to a string (hexadecimal format)
        const publicKeyHex = publicKey.toHex()
        const pubKey = PubKey(toByteString(publicKeyHex))  // Call PubKey with a ByteString
        
        console.log('Public Key in Hex:', publicKeyHex)

        instance = new Feedstore(pubKey, initialHash)

        // Connect using the default signer
        await instance.connect(signer)
    })
    it('should deploy the contract successfully.', async () => {
        const deployTx = await instance.deploy(1)
        console.log(`Deployed contract "Feedstore" with transaction ID: ${deployTx.id}`)
        expect(deployTx.id).to.be.a('string')
    })

    it('should pass the `verifyContent` method with correct message.', async () => {
        const call = async () => {
            const callRes = await instance.methods.verifyContent(initialMessage)
            console.log(`Called "verifyContent" method successfully with transaction ID: ${callRes.tx.id}`)
        }
        await expect(call()).not.to.be.rejected
    })


    // it('should update content with valid current message.', async () => {
    //     const call = async () => {
    //         const callRes = await instance.methods.updateContent(initialMessage)
    //         console.log(`Called "updateContent" method successfully with transaction ID: ${callRes.tx.id}`)
    //     }
    //     await expect(call()).not.to.be.rejected
    // })

    it('should pass the `verifyContent` method with correct message. 2222', async () => {
        const newContent = toByteString('updated content', true)
        const sample = sha256(newContent)
        const call = async () => {
            const callRes = await instance.methods.verifyContent(sample)
            console.log(`Called "verifyContent" method successfully with transaction ID: ${callRes.tx.id}`)
        }
        await expect(call()).not.to.be.rejected
    })
    // it('should pass the `updateContent` method with valid current message.', async () => {
    //     const newContent = toByteString('updated content', true)
    
    //     const call = async () => {
    //         try {
    //             // Call the updateContent method and ensure it completes without errors
    //             const callRes = await instance.methods.updateContent(newContent, initialMessage)
    //             console.log(`Called "updateContent" method successfully with transaction ID: ${callRes.tx.id}`)
    //             // Ensure no rejection occurs
    //             expect(callRes.tx.id).to.be.a('string')
    //         } catch (err) {
    //             // If an error is thrown, fail the test with the error message
    //             console.error('Error during updateContent:', err)
    //             throw err
    //         }
    //     }
    
    //     // Ensure the method does not reject
    //     await expect(call()).not.to.be.rejected
    // })

    // it('should throw error when updating content with incorrect current message.', async () => {
    //     const newContent = toByteString('updated content', true)
    //     const incorrectCurrentMessage = toByteString('wrong current message', true)

    //     const call = async () => instance.methods.updateContent(newContent, incorrectCurrentMessage)
    //     await expect(call()).to.be.rejectedWith(/Hash of current message does not match stored hash/)
    // })

    // it('should reflect updated hash after `updateContent`.', async () => {
    //     const newContent = toByteString('final updated content', true)
    //     await instance.methods.updateContent(newContent, initialMessage)

    //     // Check updated state
    //     const updatedHash = sha256(newContent)
    //     expect(instance.hash).to.equal(updatedHash)
    // })
})