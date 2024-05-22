const express = require('express');
const passport = require('passport');
const validatorHandler = require('../middlewares/validator.handler');
const { createSolicitudSchema, getSolicitudSchema, queryEmpleadoSchema } = require('../schemas/solicitud.schema');
const SolicitudService = require('../services/solicitud.service');
const checkAdminRol = require('../middlewares/auth.handler');

const router = express.Router();
const solicitudService = new SolicitudService();

router.get('/',
  passport.authenticate('jwt', { session: false }),
  validatorHandler(queryEmpleadoSchema, 'query'),
  async (req, res, next) => {
    try {
      const { query } = req;
      const solicitudes = await solicitudService.getAll(query);
      res.json(solicitudes);
    } catch (error) {
      next(error);
    }
  });

router.get('/:id',
  passport.authenticate('jwt', { session: false }),
  validatorHandler(getSolicitudSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const solicitud = await solicitudService.getById(id);
      res.json(solicitud);
    } catch (error) {
      next(error);
    }
  });

router.post('/',
  passport.authenticate('jwt', { session: false }),
  checkAdminRol,
  validatorHandler(createSolicitudSchema, 'body'),
  async (req, res, next) => {
    try {
      const { body: solicitud } = req;
      const createdSolicitud = await solicitudService.create(solicitud);
      res.status(201).json(createdSolicitud);
    } catch (error) {
      next(error);
    }
  });

router.put('/:id',
  passport.authenticate('jwt', { session: false }),
  checkAdminRol,
  validatorHandler(getSolicitudSchema, 'params'),
  validatorHandler(createSolicitudSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const { body: solicitud } = req;
      const updatedSolicitud = await solicitudService.update(id, solicitud);
      res.json(updatedSolicitud);
    } catch (error) {
      next(error);
    }
  });

router.delete('/:id',
  passport.authenticate('jwt', { session: false }),
  checkAdminRol,
  validatorHandler(getSolicitudSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      await solicitudService.delete(id);
      res.status(204).end();
    } catch (error) {
      next(error);
    }
  });

module.exports = router;