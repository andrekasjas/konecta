const express = require('express');

const validatorHandler = require('../middlewares/validator.handler');
const { createSolicitudSchema, getSolicitudSchema, queryEmpleadoSchema } = require('../schemas/solicitud.schema');
const SolicitudService = require('../services/solicitud.service');

const router = express.Router();
const solicitudService = new SolicitudService();

router.get('/',
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
  validatorHandler(getSolicitudSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const request = await solicitudService.delete(id);
      res.status(204).end();
    } catch (error) {
      next(error);
    }
  });

module.exports = router;