const { ERC20 } = require('./erc20')
const { ERC721 } = require('./erc721')
const {ethers} = require('ethers')

const log = console.log

async function main() {
  let privateKey;
  if (process.argv.length > 1) {
    privateKey = process.argv[2]
  }
  const century = new ERC20('0x9e1fd9ba2590af57f926177850eae1611d447874', privateKey)
  const data = await century.contract.totalSupply()
  console.log(ethers.utils.formatUnits(data, 8));
}

main().then(rs => log('success')).catch(err => log(err))