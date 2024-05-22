const { Usuario, UsuarioSchema} = require('./usuario.model');
const { Empleado, EmpleadoSchema} = require('./empleado.model');
const { Solicitud, SolicitudSchema} = require('./solicitud.model');

function setupModels(sequelize) {
  Usuario.init(UsuarioSchema, Usuario.config(sequelize));
  Empleado.init(EmpleadoSchema, Empleado.config(sequelize));
  Solicitud.init(SolicitudSchema, Solicitud.config(sequelize));

  Usuario.associate(sequelize.models);
  Empleado.associate(sequelize.models);
  Solicitud.associate(sequelize.models);
}

module.exports = setupModels;