//crea una conexión a la BBDD 
//retorna la referencia de la conexión, para poder hacer queries a la BBDD

const mongoose = require('mongoose');
const url = process.env.DB_URL

const dbConnection = async () => {
    try {
        await mongoose.connect(url, 
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            }
        );
        console.log("Conectado a la DB");
    } catch (e) { 
        console.error(e);
    }
}

module.exports = { dbConnection };
