const { createContractWithWallet, createWallet, createProvider, createContractWithProvider } = require('./connectors')


module.exports = class {
  constructor(tokenAddress, ABI, privateKey) {
    this.provider = createProvider()
    if (privateKey) {
      this.wallet = createWallet(privateKey, this.provider)
      this.contract = createContractWithWallet(tokenAddress, ABI, this.wallet)
    } else {
      this.contract = createContractWithProvider(tokenAddress, ABI, this.provider)
    }
  }
}