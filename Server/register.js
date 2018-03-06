const knex = require('./db');
const bcrypt = require("bcrypt-as-promised");

function Register(req, res, next) {
  bcrypt.hash(req.credentials.password, 12)
    .then((digest) => {
      knex('users')
        .insert({
          name: req.credentials.username,
          hashed_password: digest
        }, '*')
        .then((insertedRow) => {
          const user = insertedRow[0];
          req.user = user;

          next()
        })
        .catch((err) => {
          console.log(err);
          res.sendStatus(500);
        })
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    })
}

module.exports = Register;
