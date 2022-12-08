const {aesDecrypt,aesEncrypt} = require('./aes')
const {rsa_encrypt} = require('./rsa')
function encrypt(data,key){
    const AES_encrypted=aesEncrypt(data, key);
    const RSA_encrypted = rsa_encrypt(key);
    return {data:AES_encrypted,key:RSA_encrypted};
}
exports.encrypt=encrypt