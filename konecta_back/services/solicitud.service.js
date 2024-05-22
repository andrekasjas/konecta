const { models } = require('../libs/sequelize');

class SolicitudService {
  constructor() {
    this.solicitudRepository = [];
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
      options.where.codigo = { [Op.iLike]: `${filter}%` };
      options.where.descripcion = { [Op.iLike]: `${filter}%` };
      options.where.resumen = { [Op.iLike]: `${filter}%` };
    }

    const solicitudes = await models.Solicitud.findAll(options);
    const totalItems = await models.Solicitud.count({ where: options.where });
    return {
      totalItems,
      items: solicitudes
    };
  }

  async create(empleado) {
    const createdEmpleado = await models.Empleado.create(empleado);
    return createdEmpleado;
  }

  async create(solicitud) {
    const createdSolicitud = await models.Solicitud.create(solicitud);
    return createdSolicitud;
  }

  async getById(id) {
    return models.Solicitud.findByPk(id);
  }

  async update(id, solicitud) {
    const updatedSolicitud = await models.Solicitud.update(solicitud, {
      where: { id }
    });
    return updatedSolicitud;
  }

  async delete(id) {
    return models.Solicitud.destroy({
      where: { id }
    });
  }
}

module.exports = SolicitudService;