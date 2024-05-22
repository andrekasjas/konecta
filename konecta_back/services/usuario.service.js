const bcrypt = require('bcrypt');
const { models } = require('../libs/sequelize');
const { Op } = require('sequelize');

class UsuarioService {
  constructor() {
    this.usuarioRepository = [];
  }

  async getAll(query) {
    const options = { where: {} };
    const { limit, offset } = query;
    if (limit && offset) {
      options.limit = limit;
      options.offset = offset;
    }

    const { filter } = query;
    if (filter) {
      options.where[Op.or] = [
        { USERNAME: { [Op.iLike]: `%${filter}%` } },
        { EMAIL: { [Op.iLike]: `%${filter}%` } }
      ];
    }

    const usuarios = await models.Usuario.findAll(options);
    const totalItems = await models.Usuario.count({ where: options.where });

    return {
      totalItems,
      usuarios
    };
  }

  async create(usuario) {
    const { password } = usuario;
    const hashedPassword = await bcrypt.hash(password, 10);
    const createdUsuario = await models.Usuario.create({ ...usuario, password: hashedPassword });
    delete createdUsuario.dataValues.password;
    return createdUsuario;
  }

  async findUser(usuario) {
    const user = await models.Usuario.findOne({
      where: {
        [Op.or]: [{ EMAIL: usuario }, { USERNAME: usuario }],
      },
    });
    return user;
  }

}

module.exports = UsuarioService;