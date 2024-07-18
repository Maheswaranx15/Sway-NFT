let abi = {
  "encoding": "1",
  "types": [
    {
      "typeId": 0,
      "type": "()",
      "components": [],
      "typeParameters": null
    },
    {
      "typeId": 1,
      "type": "b256",
      "components": null,
      "typeParameters": null
    },
    {
      "typeId": 2,
      "type": "bool",
      "components": null,
      "typeParameters": null
    },
    {
      "typeId": 3,
      "type": "enum AccessError",
      "components": [
        {
          "name": "NotOwner",
          "type": 0,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 4,
      "type": "enum BurnError",
      "components": [
        {
          "name": "NotEnoughCoins",
          "type": 0,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 5,
      "type": "enum Identity",
      "components": [
        {
          "name": "Address",
          "type": 15,
          "typeArguments": null
        },
        {
          "name": "ContractId",
          "type": 18,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 6,
      "type": "enum InitializationError",
      "components": [
        {
          "name": "CannotReinitialized",
          "type": 0,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 7,
      "type": "enum Metadata",
      "components": [
        {
          "name": "B256",
          "type": 1,
          "typeArguments": null
        },
        {
          "name": "Bytes",
          "type": 17,
          "typeArguments": null
        },
        {
          "name": "Int",
          "type": 22,
          "typeArguments": null
        },
        {
          "name": "String",
          "type": 21,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 8,
      "type": "enum MintError",
      "components": [
        {
          "name": "CannotMintMoreThanOneNFTWithSubId",
          "type": 0,
          "typeArguments": null
        },
        {
          "name": "MaxNFTsMinted",
          "type": 0,
          "typeArguments": null
        },
        {
          "name": "NFTAlreadyMinted",
          "type": 0,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 9,
      "type": "enum Option",
      "components": [
        {
          "name": "None",
          "type": 0,
          "typeArguments": null
        },
        {
          "name": "Some",
          "type": 13,
          "typeArguments": null
        }
      ],
      "typeParameters": [
        13
      ]
    },
    {
      "typeId": 10,
      "type": "enum PauseError",
      "components": [
        {
          "name": "Paused",
          "type": 0,
          "typeArguments": null
        },
        {
          "name": "NotPaused",
          "type": 0,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 11,
      "type": "enum SetError",
      "components": [
        {
          "name": "ValueAlreadySet",
          "type": 0,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 12,
      "type": "enum State",
      "components": [
        {
          "name": "Uninitialized",
          "type": 0,
          "typeArguments": null
        },
        {
          "name": "Initialized",
          "type": 5,
          "typeArguments": null
        },
        {
          "name": "Revoked",
          "type": 0,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 13,
      "type": "generic T",
      "components": null,
      "typeParameters": null
    },
    {
      "typeId": 14,
      "type": "raw untyped ptr",
      "components": null,
      "typeParameters": null
    },
    {
      "typeId": 15,
      "type": "struct Address",
      "components": [
        {
          "name": "bits",
          "type": 1,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 16,
      "type": "struct AssetId",
      "components": [
        {
          "name": "bits",
          "type": 1,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 17,
      "type": "struct Bytes",
      "components": [
        {
          "name": "buf",
          "type": 20,
          "typeArguments": null
        },
        {
          "name": "len",
          "type": 22,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 18,
      "type": "struct ContractId",
      "components": [
        {
          "name": "bits",
          "type": 1,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 19,
      "type": "struct OwnershipSet",
      "components": [
        {
          "name": "new_owner",
          "type": 5,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 20,
      "type": "struct RawBytes",
      "components": [
        {
          "name": "ptr",
          "type": 14,
          "typeArguments": null
        },
        {
          "name": "cap",
          "type": 22,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 21,
      "type": "struct String",
      "components": [
        {
          "name": "bytes",
          "type": 17,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 22,
      "type": "u64",
      "components": null,
      "typeParameters": null
    },
    {
      "typeId": 23,
      "type": "u8",
      "components": null,
      "typeParameters": null
    }
  ],
  "functions": [
    {
      "inputs": [
        {
          "name": "_asset",
          "type": 16,
          "typeArguments": null
        }
      ],
      "name": "decimals",
      "output": {
        "name": "",
        "type": 9,
        "typeArguments": [
          {
            "name": "",
            "type": 23,
            "typeArguments": null
          }
        ]
      },
      "attributes": [
        {
          "name": "doc-comment",
          "arguments": [
            " Returns the number of decimals the asset uses."
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            ""
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " # Additional Information"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            ""
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " The standardized decimals for NFTs is 0u8."
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            ""
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " # Arguments"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            ""
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " * `asset`: [AssetId] - The asset of which to query the decimals."
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            ""
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " # Returns"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            ""
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " * [Option<u8>] - The decimal precision used by `asset`."
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            ""
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " # Examples"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            ""
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " ```sway"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " use src20::SRC20;"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            ""
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " fn foo(contract_id: ContractId, asset: AssedId) {"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            "     let contract_abi = abi(SRC20, contract_id);"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            "     let decimals = contract_abi.decimals(asset).unwrap();"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            "     assert(decimals == 0u8);"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " }"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " ```"
          ]
        },
        {
          "name": "storage",
          "arguments": [
            "read"
          ]
        }
      ]
    },
    {
      "inputs": [
        {
          "name": "asset",
          "type": 16,
          "typeArguments": null
        }
      ],
      "name": "name",
      "output": {
        "name": "",
        "type": 9,
        "typeArguments": [
          {
            "name": "",
            "type": 21,
            "typeArguments": null
          }
        ]
      },
      "attributes": [
        {
          "name": "doc-comment",
          "arguments": [
            " Returns the name of the asset, such as “Ether”."
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            ""
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " # Arguments"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            ""
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " * `asset`: [AssetId] - The asset of which to query the name."
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            ""
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " # Returns"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            ""
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " * [Option<String>] - The name of `asset`."
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            ""
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " # Number of Storage Accesses"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            ""
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " * Reads: `1`"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            ""
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " # Examples"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            ""
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " ```sway"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " use src20::SRC20;"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " use std::string::String;"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            ""
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " fn foo(contract_ic: ContractId, asset: AssetId) {"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            "     let contract_abi = abi(SRC20, contract_id);"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            "     let name = contract_abi.name(asset).unwrap();"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            "     assert(name.len() != 0);"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " }"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " ```"
          ]
        },
        {
          "name": "storage",
          "arguments": [
            "read"
          ]
        }
      ]
    },
    {
      "inputs": [
        {
          "name": "asset",
          "type": 16,
          "typeArguments": null
        }
      ],
      "name": "symbol",
      "output": {
        "name": "",
        "type": 9,
        "typeArguments": [
          {
            "name": "",
            "type": 21,
            "typeArguments": null
          }
        ]
      },
      "attributes": [
        {
          "name": "doc-comment",
          "arguments": [
            " Returns the symbol of the asset, such as “ETH”."
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            ""
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " # Arguments"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            ""
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " * `asset`: [AssetId] - The asset of which to query the symbol."
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            ""
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " # Returns"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            ""
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " * [Option<String>] - The symbol of `asset`."
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            ""
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " # Number of Storage Accesses"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            ""
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " * Reads: `1`"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            ""
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " # Examples"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            ""
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " ```sway"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " use src20::SRC20;"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " use std::string::String;"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            ""
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " fn foo(contract_id: ContractId, asset: AssetId) {"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            "     let contract_abi = abi(SRC20, contract_id);"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            "     let symbol = contract_abi.symbol(asset).unwrap();"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            "     assert(symbol.len() != 0);"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " }"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " ```"
          ]
        },
        {
          "name": "storage",
          "arguments": [
            "read"
          ]
        }
      ]
    },
    {
      "inputs": [],
      "name": "total_assets",
      "output": {
        "name": "",
        "type": 22,
        "typeArguments": null
      },
      "attributes": [
        {
          "name": "doc-comment",
          "arguments": [
            " Returns the total number of individual NFTs for this contract."
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            ""
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " # Returns"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            ""
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " * [u64] - The number of assets that this contract has minted."
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            ""
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " # Number of Storage Accesses"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            ""
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " * Reads: `1`"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            ""
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " # Examples"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            ""
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " ```sway"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " use src20::SRC20;"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            ""
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " fn foo(contract_id: ContractId) {"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            "     let contract_abi = abi(SRC20, contract_id);"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            "     let total_assets = contract_abi.total_assets();"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            "     assert(total_assets != 0);"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " }"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " ```"
          ]
        },
        {
          "name": "storage",
          "arguments": [
            "read"
          ]
        }
      ]
    },
    {
      "inputs": [
        {
          "name": "asset",
          "type": 16,
          "typeArguments": null
        }
      ],
      "name": "total_supply",
      "output": {
        "name": "",
        "type": 9,
        "typeArguments": [
          {
            "name": "",
            "type": 22,
            "typeArguments": null
          }
        ]
      },
      "attributes": [
        {
          "name": "doc-comment",
          "arguments": [
            " Returns the total supply of coins for an asset."
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            ""
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " # Additional Information"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            ""
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " This must always be at most 1 for NFTs."
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            ""
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " # Arguments"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            ""
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " * `asset`: [AssetId] - The asset of which to query the total supply."
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            ""
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " # Returns"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            ""
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " * [Option<u64>] - The total supply of coins for `asset`."
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            ""
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " # Number of Storage Accesses"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            ""
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " * Reads: `1`"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            ""
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " # Examples"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            ""
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " ```sway"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " use src20::SRC20;"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            ""
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " fn foo(contract_id: ContractId, asset: AssetId) {"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            "     let contract_abi = abi(SRC20, contract_id);"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            "     let total_supply = contract_abi.total_supply(asset).unwrap();"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            "     assert(total_supply == 1);"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " }"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " ```"
          ]
        },
        {
          "name": "storage",
          "arguments": [
            "read"
          ]
        }
      ]
    },
    {
      "inputs": [
        {
          "name": "sub_id",
          "type": 1,
          "typeArguments": null
        },
        {
          "name": "amount",
          "type": 22,
          "typeArguments": null
        }
      ],
      "name": "burn",
      "output": {
        "name": "",
        "type": 0,
        "typeArguments": null
      },
      "attributes": [
        {
          "name": "doc-comment",
          "arguments": [
            " Burns assets sent with the given `sub_id`."
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            ""
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " # Additional Information"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            ""
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " NOTE: The sha-256 hash of `(ContractId, SubId)` must match the `AssetId` where `ContractId` is the id of"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " the implementing contract and `SubId` is the given `sub_id` argument."
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            ""
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " # Arguments"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            ""
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " * `sub_id`: [SubId] - The sub-identifier of the asset to burn."
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " * `amount`: [u64] - The quantity of coins to burn."
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            ""
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " # Reverts"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            ""
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " * When the contract is paused."
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            ""
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " # Number of Storage Accesses"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            ""
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " * Reads: `1`"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " * Writes: `1`"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            ""
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " # Examples"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            ""
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " ```sway"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " use src3::SRC3;"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            ""
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " fn foo(contract_id: ContractId, asset_id: AssetId) {"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            "     let contract_abi = abi(SR3, contract_id);"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            "     contract_abi.burn {"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            "         gas: 10000,"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            "         coins: 1,"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            "         asset_id: AssetId,"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            "     } (ZERO_B256, 1);"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " }"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " ```"
          ]
        },
        {
          "name": "payable",
          "arguments": []
        },
        {
          "name": "storage",
          "arguments": [
            "read",
            "write"
          ]
        }
      ]
    },
    {
      "inputs": [
        {
          "name": "recipient",
          "type": 5,
          "typeArguments": null
        },
        {
          "name": "sub_id",
          "type": 1,
          "typeArguments": null
        },
        {
          "name": "amount",
          "type": 22,
          "typeArguments": null
        }
      ],
      "name": "mint",
      "output": {
        "name": "",
        "type": 0,
        "typeArguments": null
      },
      "attributes": [
        {
          "name": "doc-comment",
          "arguments": [
            " Mints new assets using the `sub_id` sub-identifier."
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            ""
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " # Additional Information"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            ""
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " This conforms to the SRC-20 NFT portion of the standard for a maximum"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " mint amount of 1 coin per asset."
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            ""
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " # Arguments"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            ""
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " * `recipient`: [Identity] - The user to which the newly minted assets are transferred to."
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " * `sub_id`: [SubId] - The sub-identifier of the newly minted asset."
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " * `amount`: [u64] - The quantity of coins to mint."
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            ""
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " # Reverts"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            ""
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " * When the contract is paused."
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " * When amount is greater than one."
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " * When the asset has already been minted."
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " * When more than the MAX_SUPPLY NFTs have been minted."
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            ""
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " # Number of Storage Accesses"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            ""
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " * Reads: `3`"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " * Writes: `2`"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            ""
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " # Examples"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            ""
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " ```sway"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " use src3::SRC3;"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            ""
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " fn foo(contract_id: ContractId) {"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            "     let contract_abi = abi(SR3, contract_id);"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            "     contract_abi.mint(Identity::ContractId(ContractId::this()), ZERO_B256, 1);"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " }"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " ```"
          ]
        },
        {
          "name": "storage",
          "arguments": [
            "read",
            "write"
          ]
        }
      ]
    },
    {
      "inputs": [
        {
          "name": "asset",
          "type": 16,
          "typeArguments": null
        },
        {
          "name": "key",
          "type": 21,
          "typeArguments": null
        }
      ],
      "name": "metadata",
      "output": {
        "name": "",
        "type": 9,
        "typeArguments": [
          {
            "name": "",
            "type": 7,
            "typeArguments": null
          }
        ]
      },
      "attributes": [
        {
          "name": "doc-comment",
          "arguments": [
            " Returns metadata for the corresponding `asset` and `key`."
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            ""
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " # Arguments"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            ""
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " * `asset`: [AssetId] - The asset of which to query the metadata."
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " * `key`: [String] - The key to the specific metadata."
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            ""
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " # Returns"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            ""
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " * [Option<Metadata>] - `Some` metadata that corresponds to the `key` or `None`."
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            ""
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " # Number of Storage Accesses"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            ""
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " * Reads: `1`"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            ""
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " # Examples"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            ""
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " ```sway"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " use src_7::{SRC7, Metadata};"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " use std::string::String;"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            ""
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " fn foo(contract_id: ContractId, asset: AssetId) {"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            "     let contract_abi = abi(SRC7, contract_id);"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            "     let key = String::from_ascii_str(\"image\");"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            "     let data = contract_abi.metadata(asset, key);"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            "     assert(data.is_some());"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " }"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " ```"
          ]
        },
        {
          "name": "storage",
          "arguments": [
            "read"
          ]
        }
      ]
    },
    {
      "inputs": [],
      "name": "owner",
      "output": {
        "name": "",
        "type": 12,
        "typeArguments": null
      },
      "attributes": [
        {
          "name": "doc-comment",
          "arguments": [
            " Returns the owner."
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            ""
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " # Return Values"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            ""
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " * [State] - Represents the state of ownership for this contract."
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            ""
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " # Number of Storage Accesses"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            ""
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " * Reads: `1`"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            ""
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " # Examples"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            ""
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " ```sway"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " use standards::src5::SRC5;"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            ""
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " fn foo(contract_id: ContractId) {"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            "     let ownership_abi = abi(contract_id, SRC_5);"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            ""
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            "     match ownership_abi.owner() {"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            "         State::Uninitalized => log(\"The ownership is uninitalized\"),"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            "         State::Initialized(owner) => log(\"The ownership is initalized\"),"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            "         State::Revoked => log(\"The ownership is revoked\"),"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            "     }"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " }"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " ```"
          ]
        },
        {
          "name": "storage",
          "arguments": [
            "read"
          ]
        }
      ]
    },
    {
      "inputs": [
        {
          "name": "_asset",
          "type": 16,
          "typeArguments": null
        },
        {
          "name": "_decimals",
          "type": 23,
          "typeArguments": null
        }
      ],
      "name": "set_decimals",
      "output": {
        "name": "",
        "type": 0,
        "typeArguments": null
      },
      "attributes": [
        {
          "name": "doc-comment",
          "arguments": [
            " This function should never be called."
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            ""
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " # Additional Information"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            ""
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " NFT decimals are always `0u8` and thus must not be set."
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " This function is an artifact of the SetAssetAttributes ABI definition,"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " but does not have a use in this contract as the decimal value is hardcoded."
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            ""
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " # Reverts"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            ""
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " * When the function is called."
          ]
        },
        {
          "name": "storage",
          "arguments": [
            "write"
          ]
        }
      ]
    },
    {
      "inputs": [
        {
          "name": "asset",
          "type": 16,
          "typeArguments": null
        },
        {
          "name": "name",
          "type": 21,
          "typeArguments": null
        }
      ],
      "name": "set_name",
      "output": {
        "name": "",
        "type": 0,
        "typeArguments": null
      },
      "attributes": [
        {
          "name": "doc-comment",
          "arguments": [
            " Sets the name of an asset."
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            ""
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " # Arguments"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            ""
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " * `asset`: [AssetId] - The asset of which to set the name."
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " * `name`: [String] - The name of the asset."
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            ""
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " # Reverts"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            ""
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " * When the caller is not the owner of the contract."
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " * When the name has already been set for an asset."
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            ""
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " # Number of Storage Accesses"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            ""
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " * Reads: `1`"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " * Writes: `2`"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            ""
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " # Examples"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            ""
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " ```sway"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " use asset::SetAssetAttributes;"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " use src20::SRC20;"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " use std::string::String;"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            ""
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " fn foo(asset: AssetId, contract_id: ContractId) {"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            "     let set_abi = abi(SetAssetAttributes, contract_id);"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            "     let src_20_abi = abi(SRC20, contract_id);"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            "     let name = String::from_ascii_str(\"Ether\");"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            "     set_abi.set_name(asset, name);"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            "     assert(src_20_abi.name(asset) == name);"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " }"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " ```"
          ]
        },
        {
          "name": "storage",
          "arguments": [
            "write"
          ]
        }
      ]
    },
    {
      "inputs": [
        {
          "name": "asset",
          "type": 16,
          "typeArguments": null
        },
        {
          "name": "symbol",
          "type": 21,
          "typeArguments": null
        }
      ],
      "name": "set_symbol",
      "output": {
        "name": "",
        "type": 0,
        "typeArguments": null
      },
      "attributes": [
        {
          "name": "doc-comment",
          "arguments": [
            " Sets the symbol of an asset."
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            ""
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " # Arguments"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            ""
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " * `asset`: [AssetId] - The asset of which to set the symbol."
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " * `symbol`: [String] - The symbol of the asset."
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            ""
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " # Reverts"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            ""
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " * When the caller is not the owner of the contract."
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " * When the symbol has already been set for an asset."
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            ""
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " # Number of Storage Accesses"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            ""
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " * Reads: `1`"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " * Writes: `2`"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            ""
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " # Examples"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            ""
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " ```sway"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " use asset::SetAssetAttributes;"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " use src20::SRC20;"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " use std::string::String;"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            ""
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " fn foo(asset: AssetId, contract_id: ContractId) {"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            "     let set_abi = abi(SetAssetAttributes, contract_id);"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            "     let src_20_abi = abi(SRC20, contract_id);"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            "     let symbol = String::from_ascii_str(\"ETH\");"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            "     set_abi.set_symbol(asset, symbol);"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            "     assert(src_20_abi.symbol(asset) == symbol);"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " }"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " ```"
          ]
        },
        {
          "name": "storage",
          "arguments": [
            "write"
          ]
        }
      ]
    },
    {
      "inputs": [
        {
          "name": "asset",
          "type": 16,
          "typeArguments": null
        },
        {
          "name": "key",
          "type": 21,
          "typeArguments": null
        },
        {
          "name": "metadata",
          "type": 7,
          "typeArguments": null
        }
      ],
      "name": "set_metadata",
      "output": {
        "name": "",
        "type": 0,
        "typeArguments": null
      },
      "attributes": [
        {
          "name": "doc-comment",
          "arguments": [
            " Stores metadata for a specific asset and key pair."
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            ""
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " # Arguments"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            ""
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " * `asset`: [AssetId] - The asset for the metadata to be stored."
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " * `key`: [String] - The key for the metadata to be stored."
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " * `metadata`: [Metadata] - The metadata to be stored."
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            ""
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " # Reverts"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            ""
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " * When the metadata has already been set for an asset."
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            ""
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " # Number of Storage Accesses"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            ""
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " * Reads: `1`"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " * Writes: `2`"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            ""
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " # Example"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            ""
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " ```sway"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " use asset::metdata::SetAssetMetadata;"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " use src_7::{SRC7, Metadata};"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            ""
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " fn foo(asset: AssetId, key: String, contract_id: ContractId, metadata: Metadata) {"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            "     let set_abi = abi(SetAssetMetadata, contract_id);"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            "     let src_7_abi = abi(SRC7, contract);"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            "     set_abi.set_metadata(storage.metadata, asset, key, metadata);"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            "     assert(src_7_abi.metadata(asset, key) == metadata);"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " }"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " ```"
          ]
        },
        {
          "name": "storage",
          "arguments": [
            "read",
            "write"
          ]
        }
      ]
    },
    {
      "inputs": [],
      "name": "is_paused",
      "output": {
        "name": "",
        "type": 2,
        "typeArguments": null
      },
      "attributes": [
        {
          "name": "doc-comment",
          "arguments": [
            " Returns whether the contract is paused."
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            ""
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " # Returns"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            ""
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " * [bool] - The pause state for the contract."
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            ""
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " # Number of Storage Accesses"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            ""
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " * Reads: `1`"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            ""
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " # Examples"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            ""
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " ```sway"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " use sway_libs::pausable::Pausable;"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            ""
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " fn foo(contract_id: ContractId) {"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            "     let pausable_abi = abi(Pausable, contract_id);"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            "     assert(!pausable_abi.is_paused());"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " }"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " ```"
          ]
        },
        {
          "name": "storage",
          "arguments": [
            "read"
          ]
        }
      ]
    },
    {
      "inputs": [],
      "name": "pause",
      "output": {
        "name": "",
        "type": 0,
        "typeArguments": null
      },
      "attributes": [
        {
          "name": "doc-comment",
          "arguments": [
            " Pauses the contract."
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            ""
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " # Reverts"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            ""
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " * When the caller is not the contract owner."
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            ""
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " # Number of Storage Accesses"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            ""
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " * Writes: `1`"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            ""
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " # Examples"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            ""
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " ```sway"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " use sway_libs::pausable::Pausable;"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            ""
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " fn foo(contract_id: ContractId) {"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            "     let pausable_abi = abi(Pausable, contract_id);"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            "     pausable_abi.pause();"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            "     assert(pausable_abi.is_paused());"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " }"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " ```"
          ]
        },
        {
          "name": "storage",
          "arguments": [
            "write"
          ]
        }
      ]
    },
    {
      "inputs": [],
      "name": "unpause",
      "output": {
        "name": "",
        "type": 0,
        "typeArguments": null
      },
      "attributes": [
        {
          "name": "doc-comment",
          "arguments": [
            " Unpauses the contract."
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            ""
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " # Reverts"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            ""
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " * When the caller is not the contract owner."
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            ""
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " # Number of Storage Accesses"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            ""
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " * Writes: `1`"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            ""
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " # Examples"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            ""
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " ```sway"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " use sway_libs::pausable::Pausable;"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            ""
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " fn foo(contract_id: ContractId) {"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            "     let pausable_abi = abi(Pausable, contract_id);"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            "     pausable_abi.unpause();"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            "     assert(!pausable_abi.is_paused());"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " }"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " ```"
          ]
        },
        {
          "name": "storage",
          "arguments": [
            "write"
          ]
        }
      ]
    },
    {
      "inputs": [
        {
          "name": "owner",
          "type": 5,
          "typeArguments": null
        }
      ],
      "name": "constructor",
      "output": {
        "name": "",
        "type": 0,
        "typeArguments": null
      },
      "attributes": [
        {
          "name": "doc-comment",
          "arguments": [
            " Sets the defaults for the contract."
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            ""
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " # Arguments"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            ""
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " * `owner`: [Identity] - The `Identity` that will be the first owner."
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            ""
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " # Reverts"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            ""
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " * When ownership has been set before."
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            ""
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " # Number of Storage Acesses"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            ""
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " * Reads: `1`"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " * Write: `1`"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            ""
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " # Examples"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            ""
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " ```sway"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " use standards::src5::SRC5;"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " use nft::Constructor;"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            ""
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " fn foo(contract: ContractId, owner: Identity) {"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            "     let src_5_abi = abi(SRC5, contract.bits());"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            "     assert(src_5_abi.owner() == State::Uninitialized);"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            ""
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            "     let constructor_abi = abi(Constructor, contract.bits());"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            "     constructor_abi.constructor(owner);"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            "     assert(src_5_abi.owner() == State::Initialized(owner));"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " }"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " ```"
          ]
        },
        {
          "name": "storage",
          "arguments": [
            "read",
            "write"
          ]
        }
      ]
    }
  ],
  "loggedTypes": [
    {
      "logId": "10032608944051208538",
      "loggedType": {
        "name": "",
        "type": 10,
        "typeArguments": []
      }
    },
    {
      "logId": "4237256875605624201",
      "loggedType": {
        "name": "",
        "type": 4,
        "typeArguments": []
      }
    },
    {
      "logId": "17188485204969729195",
      "loggedType": {
        "name": "",
        "type": 8,
        "typeArguments": []
      }
    },
    {
      "logId": "13791596350235125220",
      "loggedType": {
        "name": "",
        "type": 11,
        "typeArguments": []
      }
    },
    {
      "logId": "4571204900286667806",
      "loggedType": {
        "name": "",
        "type": 3,
        "typeArguments": []
      }
    },
    {
      "logId": "2161305517876418151",
      "loggedType": {
        "name": "",
        "type": 6,
        "typeArguments": []
      }
    },
    {
      "logId": "16280289466020123285",
      "loggedType": {
        "name": "",
        "type": 19,
        "typeArguments": []
      }
    }
  ],
  "messagesTypes": [],
  "configurables": [
    {
      "name": "MAX_SUPPLY",
      "configurableType": {
        "name": "",
        "type": 22,
        "typeArguments": null
      },
      "offset": 49056
    }
  ]
}
module.exports = {
  abi
}