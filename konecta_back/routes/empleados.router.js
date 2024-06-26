const express = require('express');
const boom = require('@hapi/boom');
const passport = require('passport')

const validadtorHandler = require('../middlewares/validator.handler');
const { createEmpleadoSchema, queryEmpleadoSchema } = require('../schemas/empleado.schema');
const EmpleadoService = require('../services/empleado.service');
const checkAdminRol = require('../middlewares/auth.handler');

const router = express.Router();
const empleadoService = new EmpleadoService();

router.get('/',
  passport.authenticate('jwt', { session: false }),
  validadtorHandler(queryEmpleadoSchema, 'query'),
  async (req, res, next) => {
    try {
      const { query } = req;
      const empleados = await empleadoService.getAll(query);
      res.json(empleados);
    } catch (error) {
      next(error);
    }
  });

router.post('/',
  passport.authenticate('jwt', { session: false }),
  checkAdminRol,
  validadtorHandler(createEmpleadoSchema, 'body'),
  async (req, res, next) => {
    try {
      const { body: empleado } = req;
      const createdEmpleado = await empleadoService.create(empleado);
      res.status(201).json(createdEmpleado);
    } catch (error) {
      if (error.name === 'SequelizeUniqueConstraintError') {
        next(boom.conflict('El empleado ya existe'));
      }else{
        next(error);
      }
    }
  });

module.exports = router;