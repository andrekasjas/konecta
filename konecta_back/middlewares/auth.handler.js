const boom = require('@hapi/boom');

function checkAdminRole(req, res, next) {
  if (req.user.rol === 'ADMINISTRADOR') {
    next();
  } else {
    next(boom.unauthorized('Rol de usuario no autorizado'));
  }
}

module.exports = checkAdminRole;