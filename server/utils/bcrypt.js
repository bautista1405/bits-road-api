const bcrypt = require('bcrypt');
const salt = bcrypt.genSaltSync();

//se usa cuando se crea el usuario
const hash = (payload) => 

    //con hashSync hasheamos la password de manera sincrónica, de manera que hasta que no se hashee, no sigue el workflow de la app 
    //con genSaltSync creamos una seed string, que usa de "salto" para hashear la password
    bcrypt.hashSync(payload, salt); // -> se guarda en la BBDD



//se usa cuando el usuario se loguea
const unhash = (payload, hashedPayload) => 
    bcrypt.compareSync(payload, hashedPayload); 


module.exports = { hash, unhash }