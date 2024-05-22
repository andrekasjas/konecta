const Joi = require('joi');

const id = Joi.string().alphanum();
const userName = Joi.string().max(50);
const email = Joi.string().email();
const password = Joi.string().max(50);
const rol = Joi.string().max(50);

const limit = Joi.number().positive();
const offset = Joi.number().min(0);
const filter = Joi.string().max(50);

const createUserSchema = Joi.object({
  userName: userName.required(),
  email: email.required(),
  password: password.required(),
  rol: rol.required(),
});

const getUserSchema = Joi.object({
  id: id.required(),
});

const queryUsuarioSchema = Joi.object({
  limit,
  offset,
  filter,
});

module.exports = { createUserSchema, getUserSchema, queryUsuarioSchema };