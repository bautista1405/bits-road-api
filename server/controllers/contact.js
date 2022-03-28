const { sendMail } = require('../services/mailing')
const contactEmail = async (req, res) => {
    try {
        await sendMail();
    } catch (e) {
        console.error(e);
        res.sendStatus(500);
    }
}

module.exports = { contactEmail }