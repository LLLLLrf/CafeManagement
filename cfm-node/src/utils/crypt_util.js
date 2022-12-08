const {aesDecrypt,aesEncrypt} = require('./aes')
const {rsa_decrypt,rsa_encrypt} = require('./rsa')
function encrypt(data,key){
    const AES_encrypted=aesEncrypt(data, key);
    const RSA_encrypted = rsa_encrypt(key);
    return {data:AES_encrypted,key:RSA_encrypted};
}
function decrypt(data,key){
    const RSA_decrypted = rsa_decrypt(key);
    const AES_decrypted=aesDecrypt(data, RSA_decrypted);
    return AES_decrypted;
}
exports.encrypt=encrypt
exports.decrypt=decrypt
// const encrypted=encrypt('123123','cfmcfm')
// console.log(encrypted)
// const decrypted=decrypt(encrypted.data,encrypted.key)
// console.log(decrypted)