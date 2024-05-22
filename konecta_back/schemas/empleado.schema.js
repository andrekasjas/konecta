const Joi = require('joi');

const id = Joi.string().alphanum();
const fechaIngreso = Joi.date();
const nombre = Joi.string().max(50);
const salario = Joi.number().positive();
const idUsuario = Joi.string().alphanum();

const limit = Joi.number().positive();
const offset = Joi.number().min(0);
const salarioMin = Joi.number().positive();
const salarioMax = Joi.number().positive();
const filter = Joi.string().max(50);

const createEmpleadoSchema = Joi.object({
  fechaIngreso: fechaIngreso.required(),
  nombre: nombre.required(),
  salario: salario.required(),
  idUsuario: idUsuario.required(),
});

const getEmpleadoSchema = Joi.object({
  id: id.required(),
});

const queryEmpleadoSchema = Joi.object({
  limit,
  offset,
  salarioMin,
  salarioMax: salarioMax.when('salarioMin', {
    is: Joi.number().required(),
    then: Joi.number().min(Joi.ref('salarioMin')).required(),
  }),
  filter,
});

module.exports = { createEmpleadoSchema, getEmpleadoSchema, queryEmpleadoSchema };