const bcrypt = require('bcrypt-as-promised');
const unauthorized = require('./util/unauthorized');
const knex = require('./db');

function Authenticate(req, res, next) {
  knex('users')
    .where({name: req.credentials.username})
    .first()
    .then((user) => {
      return bcrypt.compare(
        req.credentials.password,
        user.hashed_password
      ).then(() => user);
    })
    .then((user) => {
      //Check secret key jwt.verify against sent token in header
      req.user = user;

      next();
    })
    .catch(() => {
      res.status(401).set('WWW-Authenticate', 'Basic realm="FGHoarder"').end();
    })
}

module.exports = Authenticate;
