const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
const imgExtensionAllowed = ['jpeg', 'png'];
const pdfExtensionAllowed = ['pdf'];

const saveFile = ({ path, size, mimetype }, allowExtension) => {
    try{
        const [, extension] = mimetype.split('/');
        if(!allowExtension.includes(extension))  //weight/type verification
            throw new Error('Formato no permitido');
    
        if(size < 1000000) {
            
            const uid = uuidv4();
            const fileName = `${uid}.${extension}`;  //give the file a unique name
            
            return fileName;
        }
        
        throw new Error('El archivo es muy pesado')
        
        
    } catch (e) {
        console.error(e);
        res.sendStatus(500);
    }
}

const imgFile = (file) => {
    return saveFile(file, imgExtensionAllowed);
}

const pdfFile = (file) => {
    return saveFile(file, pdfExtensionAllowed);
}

module.exports = { imgFile, pdfFile };