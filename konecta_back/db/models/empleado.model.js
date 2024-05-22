const { Model, DataTypes, Sequelize } = require('sequelize');
const { USUARIO_TABLE } = require('./usuario.model');

const EMPLEADO_TABLE = 'empleado';

const EmpleadoSchema = {
  id: {
    field: 'ID',
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  fechaIngreso: {
    field: 'FECHA_INGRESO',
    type: DataTypes.DATE,
    allowNull: false
  },
  nombre: {
    field: 'NOMBRE',
    type: DataTypes.STRING(50),
    allowNull: false
  },
  salario: {
    field: 'SALARIO',
    type: DataTypes.DOUBLE,
    allowNull: false
  },
  idUsuario: {
    field: 'ID_USUARIO',
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: true,
    references: {
      model: USUARIO_TABLE,
      key: 'ID'
    }
  }
};

class Empleado extends Model {
  static associate(models) {
    // this.belongsTo(models.Usuario, { as: 'usuario' });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: EMPLEADO_TABLE,
      modelName: 'Empleado',
      timestamps: false
    }
  }
}

module.exports = { EMPLEADO_TABLE, EmpleadoSchema, Empleado };