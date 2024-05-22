const Joi = require('joi');

const id = Joi.string().alphanum();
const codigo = Joi.string().max(50);
const descripcion = Joi.string().max(50);
const resumen = Joi.string().max(50);
const idEmpleado = Joi.string().alphanum();

const limit = Joi.number().positive();
const offset = Joi.number().min(0);
const filter = Joi.string().max(50);

const createSolicitudSchema = Joi.object({
  codigo: codigo.required(),
  descripcion: descripcion.required(),
  resumen: resumen.required(),
  idEmpleado: idEmpleado.required(),
});

const getSolicitudSchema = Joi.object({
  id: id.required(),
});

const deleteSolicitudSchema = Joi.object({
  id: id.required(),
});

const queryEmpleadoSchema = Joi.object({
  limit,
  offset,
  filter,
});

module.exports = { createSolicitudSchema, getSolicitudSchema, deleteSolicitudSchema, queryEmpleadoSchema };
