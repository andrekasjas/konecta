const { models } = require('../libs/sequelize');
const { Op } = require('sequelize');


class EmpleadoService {
  constructor() {
    this.empleadoRepository = [];
  }

  async getAll(query) {
    const options = { where: {} };
    const { limit, offset } = query;
    if (limit && offset) {
      options.limit = limit;
      options.offset = offset;
    }

    const { salarioMin, salarioMax } = query;
    if (salarioMin && salarioMax) {
      options.where.salario = { [Op.between]: [salarioMin, salarioMax] };
    }

    const { filter } = query;
    if (filter) {
      options.where[Op.or] = [
        { NOMBRE: { [Op.iLike]: `%${filter}%` } },
        { SALARIO: { [Op.between]: [parseFloat(filter), parseFloat(filter) + 0.01] } } // Convertir el filtro a número
      ];
    }
    

    const empleados = await models.Empleado.findAll(options);
    const totalItems = await models.Empleado.count({ where: options.where });
    
    return {
      totalItems,
      items: empleados
    };
  }

  async create(empleado) {
    const createdEmpleado = await models.Empleado.create(empleado);
    return createdEmpleado;
  }
}

module.exports = EmpleadoService;