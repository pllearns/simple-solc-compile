var path = require('path');
var fs = require('fs');
var solc = require('solc');
// Attempted to use docgen on simple contract
// const docgen = require('solidity-docgen').default;

var CONTRACT_FILE = './contracts/hello.sol';
var source = fs.readFileSync(CONTRACT_FILE).toString();

var input = {
  language: 'Solidity',
  sources: {
    [CONTRACT_FILE]: {
      content: source
    }
  },
  settings: {
    outputSelection: {
      '*': {
        '*': ['*']
      }
    }
  }
}

console.log(input);

var compiled = solc.compile(JSON.stringify(input));
var output = JSON.parse(compiled);
var abi = output.contracts[CONTRACT_FILE]['Hello'].abi; 

// docgen('/Users/philliplorenzo/apps/simple-contract/', '/Users/philliplorenzo/apps/simple-contract/contracts/', '/Users/philliplorenzo/DocCreations/example-solidity-docusaurus/docs/')

module.exports = abi;

