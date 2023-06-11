const { Auth: AuthService } = require('../services');

const registration = async (req, res) => {
  try {
    const { doc } = await AuthService.registration(req.body);

    if (doc) {
      return res.send({
        message: 'Welcomne To Blog Registration successfull',
      });
    }

    return res.send({
      message: 'registration not successfull',
    });
  } catch (err) {
    return res.unAuthorized();
  }
};

const login = async (req, res) => {
  try {
    const { doc } = await AuthService.login(req.body);

    if (doc) {
      return res.send({
        ...doc,
        message: 'login successfull',
      });
    }

    return res.send({ message: 'email or password  wrong' });
  } catch (err) {
    return res.unAuthorized();
  }
};

const verifyJWT = async (req, res, next) => {
  try {
    const { authorization } = req.headers;
    const response = await AuthService.verifyJWT(authorization);

    if (response) {
      req.user = response;

      return next();
    }

    return res.unAuthorized();
  } catch (err) {
    return res.unAuthorized();
  }
};

module.exports = {
  registration, login, verifyJWT,
};
