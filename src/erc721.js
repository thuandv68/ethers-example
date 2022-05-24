const ABI = require('./abi/ERC721.json')
const Base = require('./baseERC')

module.exports.ERC721 = class {
  constructor(tokenAddress, privateKey) {
    const self = new Base(tokenAddress, ABI, privateKey)
    this.provider = self.provider
    this.wallet = self.wallet
    this.contract = self.contract
  }
}