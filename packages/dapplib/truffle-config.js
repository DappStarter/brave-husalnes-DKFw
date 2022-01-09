require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give narrow frown ski story deny snow collect hover clog slot ghost'; 
let testAccounts = [
"0xa3e891a55798528f188fd474cc3bd6c92a195922dad2608b3b9e038ea3420500",
"0xca355030cede3c22e8187350795d94ebf0f689b643b296570eaa0698a892713f",
"0xdf9740ebf5ac14cd0fb95706ee01abb915dfec08ac857a63c4fa84d44bc0251c",
"0x3209770d8560e033a503aac60d7364046ad7ba47fa3e93159a786ba0aa3953c3",
"0x70ca75ed7a0f2414892d6da2fc209ebb19819d426ce93baf2189352668ebdf1a",
"0x28765ee60d73dc0d5963b5c75e56d57b98a866a16496bda1e2738269f59660ad",
"0x694ab025097610a04a8ce02be525ffc51d6a3089f7e2f4e065d1858753350ac5",
"0xa8cd75398eec6b16bfd4c1ff6ca9677a71fc662781999f6764011b54ffc777e4",
"0x8ba10e700e31c9b73fb63c06d883c5cea225b893ab0865167d2804aadfc355b0",
"0xb3e4c9ff2e2f762c6d52473b8648e37738b8d92087884c1f50f39b73a5a44091"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


