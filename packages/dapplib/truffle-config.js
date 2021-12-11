require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hope enroll sure trophy name remember rural slow inner praise army gate'; 
let testAccounts = [
"0x21d75e975ef556ac45345df3d5c0d73eb6e72e080661fb2f1144187b29867747",
"0x0590b58a64771906aced65c645eb1d1ef1ea792cd8f87a0eb5f493978ebb15d1",
"0xdb31868cd28eb50596fec0d67a04abeda363abf776e890f226718567de2e0e8a",
"0x5bc82bea692a6da596830fd26162e75740a2ef8c9ba723d8e441a68baef66d9d",
"0x219f781f542ee85f53d5404ee38d7f6f5da147ce3a0f21bb3f56311b79f3ae32",
"0xf612d0e0f24ad0d1db4c44037d36baef466cfb42200f40959b435d16b494adc9",
"0x560c043b0d3ae68f544b9d3f4feeefbb69ac97428a09067f9779db73cc7f8a97",
"0xce26387a12a3ac37cc12d8ab8da65b09a860d8d30d063d91475751e14bf85944",
"0xc87caa4a7ebae46b69240c52378bb770af93679e4ebfc94ed4688ccfb8d46500",
"0x33170757556702cb323bae032dc108274a380074a6a99b529fc2196953b64471"
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


