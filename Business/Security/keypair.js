const {generateKeyPairSync} = require('crypto');

const {privateKey, publicKey} = generateKeyPairSync('rsa',{
    modulusLength:2048, //Key length in bits
    publicKeyEncoding: {
        type: 'spki',
        format:'pem',
    },
    privateKeyEncoding: {
        type:'pkcs8',
        format:'pem',
      //  cipher:'aes-256-cbc',
       // passphrase:'top secret'
    },
});
console.log(publicKey,'\n',privateKey);


module.exports = {
    privateKey,publicKey
}