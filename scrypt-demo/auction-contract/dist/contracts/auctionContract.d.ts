import { SmartContract } from 'scrypt-ts';
export declare class AuctionContract extends SmartContract {
    hash: string;
    constructor(hash: string);
    unlock(message: string): void;
}
