import { expect } from 'chai'

import { HashedSetState } from '../src/contracts/usestate'
import {
    ByteString,
    HashedSet,
    MethodCallOptions,
    toByteString,
} from 'scrypt-ts'
import { getDefaultSigner } from './utils/txHelper'

describe('Test SmartContract `HashedSetState`', () => {
    let set: HashedSet<ByteString>, stateSet: HashedSetState
    before(async () => {
        HashedSetState.loadArtifact()

        set = new HashedSet<ByteString>()

        stateSet = new HashedSetState(set)
        await stateSet.connect(getDefaultSigner())
    })

    async function add(instance: HashedSetState, key: ByteString) {
        const newInstance = instance.next()
        newInstance.hashedset.add(key)

        const { nexts, tx, atInputIndex } = await instance.methods.add(key, {
            next: {
                instance: newInstance,
                balance: instance.balance,
            },
        } as MethodCallOptions<HashedSetState>)
        console.log('HashedSetState contract called (add): ', tx.id)
        return {
            tx,
            atInputIndex,
            newInstance: nexts[0].instance,
        }
    }

    async function has(instance: HashedSetState, key: ByteString) {
        const newInstance = instance.next()

        const { nexts, tx, atInputIndex } = await instance.methods.has(key, {
            next: {
                instance: newInstance,
                balance: instance.balance,
            },
        } as MethodCallOptions<HashedSetState>)
        console.log('HashedSetState contract called (has): ', tx.id)
        return {
            tx,
            atInputIndex,
            newInstance: nexts[0].instance,
        }
    }

    async function notExist(instance: HashedSetState, key: ByteString) {
        const newInstance = instance.next()

        const { nexts, tx, atInputIndex } = await instance.methods.notExist(
            key,
            {
                next: {
                    instance: newInstance,
                    balance: instance.balance,
                },
            } as MethodCallOptions<HashedSetState>
        )

        console.log('HashedSetState contract called (notExist): ', tx.id)

        return {
            tx,
            atInputIndex,
            newInstance: nexts[0].instance,
        }
    }

    async function _delete(instance: HashedSetState, key: ByteString) {
        const newInstance = instance.next()
        newInstance.hashedset.delete(key)

        const { nexts, tx, atInputIndex } = await instance.methods.delete(key, {
            next: {
                instance: newInstance,
                balance: instance.balance,
            },
        } as MethodCallOptions<HashedSetState>)
        console.log('HashedSetState contract called (delete): ', tx.id)

        return {
            tx,
            atInputIndex,
            newInstance: nexts[0].instance,
        }
    }

    it('add, has, delete should pass', async () => {
        const deployTx = await stateSet.deploy(1)

        console.log('Deploy Transaction ID:', deployTx.id)

        const initialMessage = toByteString(
            'https://gateway.pinata.cloud/ipfs/QmbsxrAkDexeQuu6cC1NoaJeG1oH1864gySVhbJk5nZ6ow/7001.mp4',
            true
        )
        const initialMessage1 = toByteString(
            'https://gateway.pinata.cloud/ipfs/QmbsxrAkDexeQuu6cC1NoaJeG1oH1864gySVhbJk5nZ6ow/7002.mp4',
            true
        )
        console.log(initialMessage)
        const { newInstance: newInstance1 } = await add(
            stateSet,
            initialMessage
        )

        const { newInstance: newInstance2 } = await add(
            newInstance1,
            initialMessage1
        )

        const { newInstance: newInstance3 } = await has(
            newInstance2,
            initialMessage
        )

        const { newInstance: newInstance4 } = await has(
            newInstance3,
            initialMessage1
        )

        const { newInstance: newInstance5 } = await _delete(
            newInstance4,
            initialMessage1
        )

        expect(await notExist(newInstance5, initialMessage1)).not.throw
    })
})
