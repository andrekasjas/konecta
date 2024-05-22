const { Model, DataTypes, Sequelize } = require('sequelize');
 
const USUARIO_TABLE = 'usuario';

const UsuarioSchema = {
  id: {
    field: 'ID',
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  userName: {
    field: 'USERNAME',
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  email: {
    field: 'EMAIL',
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    field: 'PASSWORD',
    type: DataTypes.STRING,
    allowNull: false
  },
  rol: {
    field: 'ROL',
    type: DataTypes.STRING,
    allowNull: false
  }
};

class Usuario extends Model {
  static associate(models) {
    // define association here
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: USUARIO_TABLE,
      modelName: 'Usuario',
      timestamps: false
    }
  }
}

module.exports = { USUARIO_TABLE, UsuarioSchema, Usuario };