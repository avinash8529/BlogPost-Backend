/* eslint-disable no-param-reassign */
const { v1: uuidv1 } = require('uuid');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const {
  users: UserModel,
} = require('../database');
// const Helper = require('../utils/helper');

const createJWT = (data) => {
  const token = jwt.sign(data, 'hfhadljABDNSFJKB');

  return token;
};

const verifyJWT = (bearerToken) => {
  const token = bearerToken.split(' ')[1];
  const decoded = jwt.verify(token, 'hfhadljABDNSFJKB');

  return decoded;
};

const registration = async (payload) => {
  const saltRounds = 10;

  payload.password = await bcrypt.hash(payload.password, saltRounds);
  const {
    name, email, password,
  } = payload;

  const data = {
    name, email, password, public_id: uuidv1(),
  };

  const isUserExist = await UserModel.findOne({
    where: { email },
  });

  if (!isUserExist) {
    const response = await UserModel.create(data);

    if (response) {
      return { doc: { message: 'successfully saved' } };
    }
  }

  return { doc: { message: 'user already exist' } };
};

const login = async (payload) => {
  const { email, password } = payload;

  const isUserExist = await UserModel.findOne({
    where: { email },
  });

  if (isUserExist) {
    const {
      dataValues: {
        password: savedPassword, name, public_id: userId,
      },
    } = isUserExist;
    const verify = await bcrypt.compare(password, savedPassword);

    if (verify) {
      const data = {
        name, userId, email,
      };
      const token = createJWT(data);

      return { doc: { isLoggedIn: true, token, message: 'logged in successfully' } };
    }

    return { doc: { isLoggedIn: false, message: 'incorrect username or password!!' } };
  }

  return { message: 'user not exist' };
};

module.exports = {
  registration, login, verifyJWT,
};
