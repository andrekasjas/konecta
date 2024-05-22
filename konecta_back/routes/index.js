const express = require('express');

const usuarioRouter = require('./usuarios.router');
const empleadosRouter = require('./empleados.router');
const solicitudesRouter = require('./solicitudes.router');
const authRouter = require('./auth.router');

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/usuarios', usuarioRouter);
  router.use('/empleados', empleadosRouter);
  router.use('/solicitudes', solicitudesRouter);
  router.use('/auth', authRouter);
}

module.exports = routerApi;