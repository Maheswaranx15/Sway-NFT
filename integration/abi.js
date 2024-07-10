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
      "type": "enum Identity",
      "components": [
        {
          "name": "Address",
          "type": 12,
          "typeArguments": null
        },
        {
          "name": "ContractId",
          "type": 15,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 3,
      "type": "enum Metadata",
      "components": [
        {
          "name": "B256",
          "type": 1,
          "typeArguments": null
        },
        {
          "name": "Bytes",
          "type": 14,
          "typeArguments": null
        },
        {
          "name": "Int",
          "type": 18,
          "typeArguments": null
        },
        {
          "name": "String",
          "type": 17,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 4,
      "type": "enum Option",
      "components": [
        {
          "name": "None",
          "type": 0,
          "typeArguments": null
        },
        {
          "name": "Some",
          "type": 5,
          "typeArguments": null
        }
      ],
      "typeParameters": [
        5
      ]
    },
    {
      "typeId": 5,
      "type": "generic T",
      "components": null,
      "typeParameters": null
    },
    {
      "typeId": 6,
      "type": "raw untyped ptr",
      "components": null,
      "typeParameters": null
    },
    {
      "typeId": 7,
      "type": "str",
      "components": null,
      "typeParameters": null
    },
    {
      "typeId": 8,
      "type": "str[12]",
      "components": null,
      "typeParameters": null
    },
    {
      "typeId": 9,
      "type": "str[27]",
      "components": null,
      "typeParameters": null
    },
    {
      "typeId": 10,
      "type": "str[5]",
      "components": null,
      "typeParameters": null
    },
    {
      "typeId": 11,
      "type": "str[7]",
      "components": null,
      "typeParameters": null
    },
    {
      "typeId": 12,
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
      "typeId": 13,
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
      "typeId": 14,
      "type": "struct Bytes",
      "components": [
        {
          "name": "buf",
          "type": 16,
          "typeArguments": null
        },
        {
          "name": "len",
          "type": 18,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 15,
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
      "typeId": 16,
      "type": "struct RawBytes",
      "components": [
        {
          "name": "ptr",
          "type": 6,
          "typeArguments": null
        },
        {
          "name": "cap",
          "type": 18,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 17,
      "type": "struct String",
      "components": [
        {
          "name": "bytes",
          "type": 14,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 18,
      "type": "u64",
      "components": null,
      "typeParameters": null
    },
    {
      "typeId": 19,
      "type": "u8",
      "components": null,
      "typeParameters": null
    }
  ],
  "functions": [
    {
      "inputs": [
        {
          "name": "asset",
          "type": 13,
          "typeArguments": null
        },
        {
          "name": "key",
          "type": 17,
          "typeArguments": null
        }
      ],
      "name": "metadata",
      "output": {
        "name": "",
        "type": 4,
        "typeArguments": [
          {
            "name": "",
            "type": 3,
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
            " * When the AssetId provided does not match the default SubId."
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
            " use src7::{SRC7, Metadata};"
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
            "     let key = String::from_ascii_str(\"social:x\");"
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
            "     assert(data.unwrap() == Metadata::String(String::from_ascii_str(\"fuel_network\")));"
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
          "type": 13,
          "typeArguments": null
        }
      ],
      "name": "decimals",
      "output": {
        "name": "",
        "type": 4,
        "typeArguments": [
          {
            "name": "",
            "type": 19,
            "typeArguments": null
          }
        ]
      },
      "attributes": [
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
          "type": 13,
          "typeArguments": null
        }
      ],
      "name": "name",
      "output": {
        "name": "",
        "type": 4,
        "typeArguments": [
          {
            "name": "",
            "type": 17,
            "typeArguments": null
          }
        ]
      },
      "attributes": [
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
          "type": 13,
          "typeArguments": null
        }
      ],
      "name": "symbol",
      "output": {
        "name": "",
        "type": 4,
        "typeArguments": [
          {
            "name": "",
            "type": 17,
            "typeArguments": null
          }
        ]
      },
      "attributes": [
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
        "type": 18,
        "typeArguments": null
      },
      "attributes": [
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
          "type": 13,
          "typeArguments": null
        }
      ],
      "name": "total_supply",
      "output": {
        "name": "",
        "type": 4,
        "typeArguments": [
          {
            "name": "",
            "type": 18,
            "typeArguments": null
          }
        ]
      },
      "attributes": [
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
          "type": 18,
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
            " Unconditionally burns assets sent with the default SubId."
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
            " * `sub_id`: [SubId] - The default SubId."
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
            " * When the `sub_id` is not the default SubId."
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " * When the transaction did not include at least `amount` coins."
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " * When the transaction did not include the asset minted by this contract."
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
            " use std::constants::DEFAULT_SUB_ID;"
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
            "     let contract_abi = abi(SRC3, contract_id);"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            "     contract_abi {"
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
            "         coins: 100,"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            "         asset_id: asset_id,"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            "     }.burn(DEFAULT_SUB_ID, 100);"
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
          "type": 2,
          "typeArguments": null
        },
        {
          "name": "sub_id",
          "type": 1,
          "typeArguments": null
        },
        {
          "name": "amount",
          "type": 18,
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
            " Unconditionally mints new assets using the default SubId."
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
            " * `recipient`: [Identity] - The user to which the newly minted asset is transferred to."
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " * `sub_id`: [SubId] - The default SubId."
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
            " * When the `sub_id` is not the default SubId."
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
            " use std::constants::DEFAULT_SUB_ID;"
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
            "     let contract_abi = abi(SRC3, contract);"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            "     contract_abi.mint(Identity::ContractId(contract_id), DEFAULT_SUB_ID, 100);"
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
      "logId": "10098701174489624218",
      "loggedType": {
        "name": "",
        "type": 7,
        "typeArguments": null
      }
    }
  ],
  "messagesTypes": [],
  "configurables": [
    {
      "name": "TOTAL_SUPPLY",
      "configurableType": {
        "name": "",
        "type": 18,
        "typeArguments": null
      },
      "offset": 24760
    },
    {
      "name": "DECIMALS",
      "configurableType": {
        "name": "",
        "type": 19,
        "typeArguments": null
      },
      "offset": 24704
    },
    {
      "name": "NAME",
      "configurableType": {
        "name": "",
        "type": 11,
        "typeArguments": null
      },
      "offset": 24720
    },
    {
      "name": "SYMBOL",
      "configurableType": {
        "name": "",
        "type": 10,
        "typeArguments": null
      },
      "offset": 24736
    },
    {
      "name": "SOCIAL_X",
      "configurableType": {
        "name": "",
        "type": 8,
        "typeArguments": null
      },
      "offset": 24672
    },
    {
      "name": "SITE_FORUM",
      "configurableType": {
        "name": "",
        "type": 9,
        "typeArguments": null
      },
      "offset": 24640
    },
    {
      "name": "ATTR_HEALTH",
      "configurableType": {
        "name": "",
        "type": 18,
        "typeArguments": null
      },
      "offset": 24616
    }
  ]
}


module.exports = {
  abi
}