import {
    assert,
    method,
    prop,
    sha256,
    SmartContract,
} from 'scrypt-ts';

export class AuctionContract extends SmartContract {
    @prop()
    hash: string; // Store the hash as a string

    constructor(hash: string) {
        super(...arguments); // Pass arguments to the base class
        this.hash = hash;
    }

    @method()
    public unlock(message: string): void {
        // Assert the hash matches the message
        assert(sha256(message) === this.hash);
    }
}
