<p align="center">
    <picture>
        <source media="(prefers-color-scheme: dark)" srcset="./nft-logo_white.png">
        <img alt="light theme" src="./nft-logo_black.png">
    </picture>
</p>

<p align="center">
    <a href="https://crates.io/crates/forc/0.60.0" alt="forc">
        <img src="https://img.shields.io/badge/forc-v0.60.0-orange" />
    </a>
    <a href="https://crates.io/crates/fuel-core/0.26.0" alt="fuel-core">
        <img src="https://img.shields.io/badge/fuel--core-v0.26.0-yellow" />
    </a>
</p>

## Overview

A non-fungible token (NFT) is a unique asset that has a maximum supply of one. On the Fuel Network, all NFTs are [Native Assets](https://docs.fuel.network/docs/sway/blockchain-development/native_assets). They are commonly associated with artwork / collectibles however there are many greater utilities beyond that which have yet to be written for the Fuel Network.

In this barebones NFT example project, there are a maximum of 100,000 NFTs that may be minted. Each NFT may contain any metadata the user desires to store. 

## Contract Testnet Deployment 

```
Contract ID: 0xe741ac4c57cb7609e14e8f3db9143eb66192a003f109b491ec75d1e6a6e824cd
Deployed in block 00523f75

```
## Mint details 

NFT 1 : 
transactionId: '0x62bb66438584d4036b385e7046b13ea5d8246c4f3076cb11760dd60759ff1b07'<br />
Explorer Link : https://app.fuel.network/tx/0x62bb66438584d4036b385e7046b13ea5d8246c4f3076cb11760dd60759ff1b07/simple

NFT 2 :
transactionId: '0xb415ada2a6fad8ae5d289fb7854bbad1328d97310f0dbdead5d672927bd70a8c'<br />
Explorer Link : https://app.fuel.network/tx/0xb415ada2a6fad8ae5d289fb7854bbad1328d97310f0dbdead5d672927bd70a8c/simple


## Setting up NFT_metdata 
NFT 1 :
transactionId: '0x465f99deab4b06e0163a171c184311bd6be619ac1af388993cc7e87149a3ad16'<br />
Explorer Link : https://app.fuel.network/tx/0x465f99deab4b06e0163a171c184311bd6be619ac1af388993cc7e87149a3ad16/simple


NFT 2 :
transactionId: '0x23583429e80f37bb9bbadd3301acd932f688796796541d33c8d381737b102ef4'<br />
Explorer Link : https://app.fuel.network/tx/0x23583429e80f37bb9bbadd3301acd932f688796796541d33c8d381737b102ef4/simple

## Standards Implementations

The project implements and follows the [SRC-20; Native Asset](https://github.com/FuelLabs/sway-standards/blob/master/SRCs/src-20.md), [SRC-3; Mint and Burn](https://github.com/FuelLabs/sway-standards/blob/master/SRCs/src-3.md), and [SRC-7; Metadata](https://github.com/FuelLabs/sway-standards/blob/master/SRCs/src-7.md) standards. It also uses the [Native Asset Library](https://fuellabs.github.io/sway-libs/book/asset/index.html) to implement the basic functionality behind the standards. 


## output 
![Output](https://github.com/user-attachments/assets/526e3e03-1b69-4b17-a24b-b5756d474667)

### SRC-20

The [SRC-20](https://github.com/FuelLabs/sway-standards/blob/master/SRCs/src-20.md) standard requires that there is a maximum number of one coin per NFT asset. It also states that the decimals must be `0u8` for any NFT. This project conforms to both these restrictions and thus can be deemed an NFT on the Fuel Network. 

Set functions for name and symbol have been provided to the user. While traditionally name and symbol are written into the contract rather than storage, this contract is open to mint new types of assets. This means that every NFT minted by this contract may contain a different name and symbol. 

The [SRC-20](https://github.com/FuelLabs/sway-standards/blob/master/SRCs/src-20.md) ABI defined below has also been implemented.

```sway
abi SRC20 {
    #[storage(read)]
    fn total_assets() -> u64;
    #[storage(read)]
    fn total_supply(asset: AssetId) -> Option<u64>;
    #[storage(read)]
    fn name(asset: AssetId) -> Option<String>;
    #[storage(read)]
    fn symbol(asset: AssetId) -> Option<String>;
    #[storage(read)]
    fn decimals(asset: AssetId) -> Option<u8>;
}
```

### SRC-3

The [SRC-3](https://github.com/FuelLabs/sway-standards/blob/master/SRCs/src-3.md) standard defines the ABI for minting and burning. This has been properly implemented.

```sway
abi SRC3 {
    #[storage(read, write)]
    fn mint(recipient: Identity, sub_id: SubId, amount: u64);
    #[storage(read, write)]
    fn burn(sub_id: SubId, amount: u64);
}
```

### SRC-7

The [SRC-7](https://github.com/FuelLabs/sway-standards/blob/master/SRCs/src-7.md) standard defines the ABI for retrieving metadata. This has been properly implemented. 

A set function that uses storage has been provided to allow the user to set their own desired metadata. There is no limit or restrictions to what and the amount of metadata an asset may have.

```sway
abi SRC7 {
    #[storage(read)]
    fn metadata(asset: AssetId, key: String) -> Option<Metadata>;
}
```

## Project structure

The project consists of a smart contract.

<!--Only show most important files e.g. script to run, build etc.-->

```sh
NFT
├── NFT-contract
│   └──src/main.sw
├── README.md
└── SPECIFICATION.md
```

## Running the project

### User interface

TODO: The user interface does not currently exist.

### Project

In order to run the subsequent commands change into the following directory `/path/to/NFT/<here>`.

#### Program compilation

```bash
forc build
```

#### Running the tests

Before running the tests the programs must be compiled with the command above.

```bash
forc test 
```
