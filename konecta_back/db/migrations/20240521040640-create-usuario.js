'use strict';

const { USUARIO_TABLE, UsuarioSchema } = require('../models/usuario.model');
const { EMPLEADO_TABLE, EmpleadoSchema } = require('../models/empleado.model');
const { SOLICITUD_TABLE, SolicitudSchema } = require('../models/solicitud.model');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(USUARIO_TABLE, UsuarioSchema);
    await queryInterface.createTable(EMPLEADO_TABLE, EmpleadoSchema);
    await queryInterface.createTable(SOLICITUD_TABLE, SolicitudSchema);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable(USUARIO_TABLE);
    await queryInterface.dropTable(EMPLEADO_TABLE);
    await queryInterface.dropTable(SOLICITUD_TABLE);
  }
};
