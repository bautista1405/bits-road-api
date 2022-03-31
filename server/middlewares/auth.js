const { decodeToken } = require('../services/auth');

const securedUser = (req, res, next) => {
  try {
    const { authorization } = req.headers; // req.headers.authorization. destructuramos el token de authorization dentro del objeto header
    const { _id } = decodeToken(authorization); // si el token fue manipulado, esto nos tira error y sale por el catch
    req.id = _id;
    next();
  } catch (e) {
    console.error(e);
    res
      .status(401)
      .json({ message: "Unauthorized", img: "https://http.cat/401" });
  }
};

const securedAdmin = (req, res, next) => {
  try {
    const { authorization } = req.headers;
    const { _id, role } = decodeToken(authorization);
    if(role !== "admin") {
      throw new Error('No tenés acceso a esta ruta')
    }
    req.id = _id;
    req.role = role;
    next();
  } catch (e) {
    console.error(e);
    res
      .status(401)
      .json({ message: "Unauthorized", img: "https://http.cat/401" });
  }
}

module.exports = { securedUser, securedAdmin };