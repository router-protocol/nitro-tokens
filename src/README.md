
## Chains info structure

// TODO: add native & wrapped native info.

```
{
      "name": "arbitrum",
      "id": "42161"
}
```

## Tokens structure

```
{
      "id": "usdt", // unique token id for a chain. To distinguish tokens with same symbol.
      "name": "USDT", // token name
      "symbol": "USDT", // token symbol
      "chainId": "42161", // token chainId
      "decimals": 6, // token decimals
      "address": "0xfd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb9", // token address
      "isNative": false, // is token native
      "isWNative": false, // is token wrapped native
      "price": { // token Id for price fetching. If 'null', use symbol.
        "coingeckoId": "usdt",
        "coinmcId": "usdt"
      } 
}
```
TODO: add isMintable/isLockable properties


## Logo URI structure

Here, logoURI is logo for a particular token. If address and chainId is not present, it is default logo corresponding to the symbol.
Note: This default logo will be applicable for reserved tokens present in the repository.

```
{
        "chainId": "1",
        "address": "0xdac17f958d2ee523a2206206994597c13d831ec7",
        "symbol": "USDT",
        "logoURI": "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xdAC17F958D2ee523a2206206994597C13D831ec7/logo.png"
}
```
