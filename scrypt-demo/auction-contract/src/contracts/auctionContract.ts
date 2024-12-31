import {
    assert,
    method,
    prop,
    sha256,
    SmartContract,
} from 'scrypt-ts';

export class AuctionContract extends SmartContract {
    @prop()
    hash: string;

    constructor(hash: string) {
        super(...arguments); 
        this.hash = hash;
    }

    @method()
    public unlock(message: string): void {
        assert(sha256(message) === this.hash);
    }
}
