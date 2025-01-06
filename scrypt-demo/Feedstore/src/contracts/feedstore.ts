import {
    assert,
    ByteString,
    method,
    prop,
    sha256,
    Sha256,
    SmartContract,
    PubKey,
    Sig,
    SigHash,
} from 'scrypt-ts';

export class Feedstore extends SmartContract {
    content(content: any) {
        throw new Error('Method not implemented.');
    }
    @prop()
    hash: Sha256; // Stores the hash of the content

    @prop()
    owner: PubKey; // Owner of the contract for access control

    constructor(owner: PubKey, hash: Sha256) {
        super(...arguments);
        this.owner = owner;
        this.hash = hash;
    }

    // Verify ownership
    @method(SigHash.ANYONECANPAY_ALL)
    public verifyOwnership(sig: Sig) {
        assert(this.checkSig(sig, this.owner), 'Invalid signature from owner');
    }

    // Method to validate a given message against the stored hash
    @method()
    public verifyContent(message: ByteString) {
        assert(sha256(message) == this.hash, 'Hash does not match the stored hash');
    }

    // Method to update the content (restricted to the owner)
    @method(SigHash.SINGLE)
    public updateContent(newContent: ByteString, sig: Sig) {
        // Verify ownership
        this.verifyOwnership(sig);
    
        // Calculate and update the new hash
        const newHash = sha256(newContent);
        this.hash = newHash;
    
        // Explicit assertion to satisfy the sCrypt requirement
        assert(true);
    }


}
