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
A non-fungible token (NFT) is a unique asset that has a maximum supply of one. On the Fuel Network.

## Contract Testnet Deployment 

Contract ID: 0xe741ac4c57cb7609e14e8f3db9143eb66192a003f109b491ec75d1e6a6e824cd<br />
Deployed in block 00523f75 <br />

Explorer Link : https://app.fuel.network/contract/0xcb10903dcc6cd70bb2368843b9872c22795fa2c0feb938e8c54a975d6283dc71/assets

## Mint details 

NFT 1 : 
transactionId: '0xa24f17127bb6c6720559316c1fbaa0acfad6db70d7ef32ad3b49089678a8b87a'<br />
Explorer Link : https://app.fuel.network/tx/0xa24f17127bb6c6720559316c1fbaa0acfad6db70d7ef32ad3b49089678a8b87a/simple

NFT 2 :
transactionId: '0x8080e4a9ae56f883f0157a3138ae84e1ad4ce4432e8ff09b7d530217f3b6669a'<br />
Explorer Link : https://app.fuel.network/tx/0x8080e4a9ae56f883f0157a3138ae84e1ad4ce4432e8ff09b7d530217f3b6669a/simple


## Setting up NFT_metdata 
NFT 1 :
transactionId: '0x1856c5ea5ea0db5a7be103783ffc23bd9e5e23bd3ddc686eb2b982a8001cb44b'<br />
Explorer Link : https://app.fuel.network/tx/0x1856c5ea5ea0db5a7be103783ffc23bd9e5e23bd3ddc686eb2b982a8001cb44b/simple


NFT 2 :
transactionId: '0xc6a6e1de54c58828aa93e31b385badc26bbbe1a228e6d528f445d7e882506a06'<br />
Explorer Link : https://app.fuel.network/tx/0xc6a6e1de54c58828aa93e31b385badc26bbbe1a228e6d528f445d7e882506a06/simple

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
