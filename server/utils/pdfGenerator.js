const pdf = require("html-pdf");

const createPurchaseTicket = (name, products, total) => {
  const html = createHTML(products, total);
  pdf.create(html).toFile(`./tickets/${name}.pdf`, (err, _) => {
    if (err) throw new Error("No se pudo crear el PDF");
  });
};

const createHTML = (products, total) => `
    <!doctype html>
    <html>
        <head>
            <meta charset="utf-8">
            <style>
                h3 : { color : "black" }
            </style>
        </head> 
        <body>
            <h3>Total abonado: ${total} </h3>
        </body>
    </html>
`;

module.exports = { createPurchaseTicket };