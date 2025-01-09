import {
    method,
    prop,
    SmartContract,
    assert,
    hash256,
    HashedSet,
    SigHash,
    ByteString,
} from 'scrypt-ts'

/*
 * A demonstration on how to use HashedSets in a stateful contract.
 * Using method calls we can update the hashed set, which the contract
 * keeps track of.
 * See documentation for more details about HashedSets:
 * https://docs.scrypt.io/reference/classes/HashedSet/
 */
export class HashedSetState extends SmartContract {
    set: HashedSet<ByteString>
    getState(): any {
        throw new Error('Method not implemented.')
    }
    @prop(true)
    hashedset: HashedSet<ByteString>

    constructor(hashedset: HashedSet<ByteString>) {
        super(...arguments)
        this.hashedset = hashedset
    }

    @method(SigHash.SINGLE)
    public add(key: ByteString) {
        this.hashedset.add(key)
        assert(
            this.ctx.hashOutputs ==
                hash256(this.buildStateOutput(this.ctx.utxo.value))
        )
    }

    @method(SigHash.SINGLE)
    public has(key: ByteString) {
        assert(this.hashedset.has(key))
        assert(
            this.ctx.hashOutputs ==
                hash256(this.buildStateOutput(this.ctx.utxo.value))
        )
    }

    @method(SigHash.SINGLE)
    public notExist(key: ByteString) {
        assert(!this.hashedset.has(key))
        assert(
            this.ctx.hashOutputs ==
                hash256(this.buildStateOutput(this.ctx.utxo.value))
        )
    }

    @method(SigHash.SINGLE)
    public delete(key: ByteString) {
        assert(this.hashedset.delete(key))
        assert(
            this.ctx.hashOutputs ==
                hash256(this.buildStateOutput(this.ctx.utxo.value))
        )
    }
}
