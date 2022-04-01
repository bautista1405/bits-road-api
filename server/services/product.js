const { imgFile, pdfFile } = require('../utils/fileHandler');

const createProduct = (body, files) => {
    const urlFiles = files.map((file) => imgFile(file));
    const newProduct = { ...body, photos: urlFiles };
    return newProduct;
}

module.exports = { createProduct }