const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
const imgExtensionAllowed = ['jpeg', 'png'];
const pdfExtensionAllowed = ['pdf'];

const saveFile = ({ path, size, mimetype }, allowExtension) => {
    try{
        const [, extension] = mimetype.split('/');
        if(!allowExtension.includes(extension))  //weight/type verification
            throw new Error('Formato no permitido');
    
        if(size > 1000000) {
            const uid = uuidv4();
            const fileName = `${uid}.${extension}`;  //give the file a unique name
            const fileNameOut = `./images/${fileName}`; //location where the file will be saved
            fs.createReadStream(path).pipe(fs.createWriteStream(fileNameOut)); //read and write the file
            fs.unlinkSync(path);
            return fileName;
        }
        throw new Error('El tamaño del archivo es muy grande')
        } catch (e) {
        console.error(e);
    }
}

const imgFile = (file) => {
    saveFile(file, imgExtensionAllowed);
}

const pdfFile = (file) => {
    saveFile(file, pdfExtensionAllowed);
}