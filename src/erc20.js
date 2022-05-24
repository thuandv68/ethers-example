const ABI = require('./abi/ERC20.json')
const Base = require('./baseERC')

module.exports.ERC20 = class {
  constructor(tokenAddress, privateKey) {
    const self = new Base(tokenAddress, ABI, privateKey)
    this.provider = self.provider
    this.wallet = self.wallet
    this.contract = self.contract
  }
}