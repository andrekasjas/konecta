const express = require('express');
const passport = require('passport');
const jwt = require('jsonwebtoken');

const config = require('../config/config');

const router = express.Router();

router.post('/login',
  passport.authenticate('local', { session: false }),
  async (req, res, next) => {
    try {
      const { user } = req;
      const payload = {
        sub: user.id,
        name: user.userName,
        rol: user.rol,
        exp: Math.floor(Date.now() / 1000) + 60 * 60
      };
      const token = jwt.sign(JSON.stringify(payload), config.jwtKey);
      res.json({ token });
    } catch (error) {
      next(error);
    }
  });

module.exports = router;