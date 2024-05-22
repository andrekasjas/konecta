const { Model, DataTypes, Sequelize } = require('sequelize');
const { EMPLEADO_TABLE } = require('./empleado.model');

const SOLICITUD_TABLE = 'solicitud';

const SolicitudSchema = {
  id: {
    field: 'ID',
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  codigo: {
    field: 'CODIGO',
    type: DataTypes.STRING(50),
    allowNull: false
  },
  descripcion: {
    field: 'DESCRIPCION',
    type: DataTypes.STRING(50),
    allowNull: false
  },
  resumen: {
    field: 'RESUMEN',
    type: DataTypes.STRING(50),
    allowNull: false
  },
  idEmpleado: {
    field: 'ID_EMPLEADO',
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: EMPLEADO_TABLE,
      key: 'ID'
    }
  }
};

class Solicitud extends Model {
  static associate(models) {
    // this.belongsTo(models.Empleado, { as: 'empleado' });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: SOLICITUD_TABLE,
      modelName: 'Solicitud',
      timestamps: false
    }
  }
}

module.exports = { SOLICITUD_TABLE, SolicitudSchema, Solicitud };