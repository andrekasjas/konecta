const boom = require('@hapi/boom');

function checkAdminRol(req, res, next) {
  if (req.user.rol === 'ADMINISTRADOR') {
    next();
  } else {
    next(boom.unauthorized('Rol de usuario no autorizado'));
  }
}

module.exports = checkAdminRol;