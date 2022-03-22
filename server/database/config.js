//crea una conexión a la BBDD (cluster)
//retorna la referencia de la conexión, para poder hacer queries a la BBDD

const mongoose = require('mongoose');
const url = "mongodb+srv://bauti1405:jMyjdHKIHXxeygaz@itcluster.53f2w.mongodb.net/e-commerce"

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