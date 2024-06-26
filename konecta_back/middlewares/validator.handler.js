const boom = require('@hapi/boom');

function validatorHandler(schema, property) {
  return async (req, res, next) => {
    const data = req[property];
    const { error } = schema.validate(data, { abortEarly: false });
    if (error) {
      next(boom.badRequest(error));
    }else{
      next(error);
    }
  };
}

module.exports = validatorHandler;