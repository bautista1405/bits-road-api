const jwt = require('jsonwebtoken');
const fs = require('fs'); // file system
const privateKey = fs.readFileSync('server/keys/private.pem');
const publicKey = fs.readFileSync('server/keys/public.pem')
const signOptions = { expiresIn: '8h', algorithm: 'RS256' };

const createToken = (payload) => jwt.sign(payload, privateKey, signOptions); //creamos el token

const decodeToken = (token) => { //decodificamos el token
  const [, JWT] = token.split(' ');
  const validToken = jwt.verify(JWT, publicKey);
  return validToken;
};

module.exports = { createToken, decodeToken };