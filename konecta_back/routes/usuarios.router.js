const express = require('express');
const boom = require('@hapi/boom');

const { createUserSchema, queryUsuarioSchema } = require('../schemas/usuario.schema');
const validatorHandler = require('../middlewares/validator.handler');
const UsuarioService = require('../services/usuario.service');

const router = express.Router();

const usuarioService = new UsuarioService();

router.get('/',
  validatorHandler(queryUsuarioSchema, 'query'),
  async (req, res, next) => {
    try {
      const { query } = req;
      const usuarios = await usuarioService.getAll(query);
      res.json(usuarios);
    } catch (error) {
      next(error);
    }
  });

router.post('/',
  validatorHandler(createUserSchema, 'body'),
  async (req, res, next) => {
    try {
      const { body: usuario } = req;
      const createdUsuario = await usuarioService.create(usuario);
      res.status(201).json(createdUsuario);
    } catch (error) {
      if (error.name === 'SequelizeUniqueConstraintError') {
        next(boom.conflict('El usuario ya existe'));
      }else{
        next(error);
      }
    }
  });

module.exports = router;