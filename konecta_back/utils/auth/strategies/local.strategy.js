const { Strategy } = require('passport-local');
const boom = require('@hapi/boom');
const bcrypt = require('bcrypt');

const UsuarioService = require('../../../services/usuario.service')
const service = new UsuarioService();

const LocalStrategy = new Strategy({
  usernameField: 'emailOrUsername',
  passwordField: 'password',
},async (username, password, done) => {
  try {
    const user = await service.findUser(username);
    if (!user) {
      return done(boom.unauthorized("El usuario no existe"), false);
    }
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return done(boom.unauthorized("La contraseña es incorrecta"), false);
    }
    delete user.dataValues.password;
    done(null, user);
  } catch (error) {
    done(error, false);
  }
});

module.exports = LocalStrategy;