# MultiSig Wallet Factory

RSK Mainnet: [0xbda3deb48Ee37965B7D88EAc0a0E204bC2427c06](https://explorer.rsk.co/address/0xbda3deb48Ee37965B7D88EAc0a0E204bC2427c06)

RSK Testnet: [0x677bCBb40d511857d706f4D2E9825c96380c72F5](https://explorer.testnet.rsk.co/address/0x677bCBb40d511857d706f4D2E9825c96380c72F5)

## Create a Multi Sig

1. Get the project

  ```
  git clone https://github.com/rsksmart/multi-sig
  cd multi-sig
  npm i
  ```

2. Create `.secret` file with 12 words mnemonic.

3. Run the project

  ```
  npx truffle console --network [mainnet/testnet/regtest]
  ```

4. Create a wallet

  - Instantiate factory regarding network address

    ```
    truffle(mainnet)> let factory = await MultiSigWalletFactory.at('0xbda3deb48ee37965b7d88eac0a0e204bc2427c06')

    truffle(testnet)> let factory = await MultiSigWalletFactory.at('0x677bcbb40d511857d706f4d2e9825c96380c72f5')
    ```

  - Create the wallet

    ```
    truffle(mainnet)> let owners = ['0xf4...0d', '0x5g...aa', ...]
    truffle(mainnet)> let required = 2
    truffle(mainnet)> factory.create(owners, required)
    # wait for tx confirmation
    ```

  - Validate

    ```
    truffle(mainnet)> factory.getInstantiationCount(accounts[0]).then(c => factory.instantiations(accounts[0], c.sub(web3.utils.toBN(1))))
    '0x86...d4'
    truffle(mainnet)> let multi = await MultiSigWallet.at('0x86...d4')
    undefined
    truffle(mainnet)> multi.getOwners()
    [
      '0xf4...0d',
      '0x5g...aa',
      ...
    ]
    truffle(mainnet)> multi.required().then(r => r.toString())
    '2'
    ```
