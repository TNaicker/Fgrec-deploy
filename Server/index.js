const express = require('express');
const app = express();
const knex = require('./db');
const bcrypt = require("bcrypt-as-promised");
const bodyParser = require('body-parser');
const basicAuth = require('./basicAuth');
const register = require('./register');
const authenticate = require('./authenticate');

const PORT = 8000;

app.use(bodyParser.json());
app.use((req, res, next) => {
  res.set('Access-Control-Allow-Origin', '*');
  res.set('Access-Control-Allow-Headers', 'Authorization, Origin, X-Requested-With, Content-Type, Accept');

  console.log(req.headers);

  console.log('setting cors');

  res.status(200)
  next()
});

app.post('/api/register',
    basicAuth,
    register,
    (req, res) => {
      console.log('successfully registered', req.user);
      res.send('REGISTERED!');
})

app.get('/api/protected',
  basicAuth,
  authenticate,
  (req, res) => {
    console.log('successfully logged in', req.user);
    res.send('PROTECTED DATA')
})

app.post('/api/userServant/create', (req, res) => {
  req.body.forEach((row) => {
    knex('user_servants')
      .insert(row, '*')
      .then((insertedRow) => {
        console.log('inserted', insertedRow[0]);
        res.send('success');
      })
  })
})
app.post('/api/userCraft/create', (req, res) => {
  req.body.forEach((row) => {
    knex('user_crafts')
      .insert(row, '*')
      .then((insertedRow) => {
        console.log('inserted', insertedRow[0]);
        res.send('success');
      })
      .catch((err) => {console.log('failed: ', err)});
  })
})

app.get('/api/servants/all', (req, res) => {
  knex('servants')
    .then((servants) => {
      res.send(servants);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    })
})
app.get('/api/servants/archer', (req, res) => {
  knex('servants')
    .where('class', 'Archer')
    .then((servants) => {
      res.send(servants);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    })
})
app.get('/api/servants/saber', (req, res) => {
  knex('servants')
    .where('class', 'Saber')
    .then((servants) => {
      res.send(servants);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    })
})
app.get('/api/servants/lancer', (req, res) => {
  knex('servants')
    .where('class', 'Lancer')
    .then((servants) => {
      res.send(servants);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    })
})
app.get('/api/servants/rider', (req, res) => {
  knex('servants')
    .where('class', 'Rider')
    .then((servants) => {
      res.send(servants);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    })
})
app.get('/api/servants/caster', (req, res) => {
  knex('servants')
    .where('class', 'Caster')
    .then((servants) => {
      res.send(servants);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    })
})
app.get('/api/servants/assassin', (req, res) => {
  knex('servants')
    .where('class', 'Assassin')
    .then((servants) => {
      res.send(servants);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    })
})
app.get('/api/servants/berserker', (req, res) => {
  knex('servants')
    .where('class', 'Berserker')
    .then((servants) => {
      res.send(servants);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    })
})
app.get('/api/servants/ruler', (req, res) => {
  knex('servants')
    .where('class', 'Ruler')
    .then((servants) => {
      res.send(servants);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    })
})

app.post('/api/:user/support/:servClass', (req, res) => {
  knex('users')
    .where('name', req.params.user)
    .update(req.params.servClass, req.body.name)
    .then(() => {
      console.log('updated support for', req.params.servClass);
      res.send('setting');
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    })
})

app.get('/api/:user/supportmsg', (req, res) => {
  knex('users')
    .where('name', req.params.user)
    .then((result) => {
      const msg = {
        msg: result[0].support_msg,
        id: result[0].friend_code,
      }
      console.log(msg);
      res.send(msg);
    })
})
app.post('/api/changesupportmsg/:user', (req, res) => {
  knex('users')
    .where('name', req.params.user)
    .update('support_msg', req.body.msg)
    .then(() => {
      res.send('updated support message');
    })
    .catch((err) => {
      console.log(err);
    })
})
app.post('/api/changesupportid/:user', (req, res) => {
  knex('users')
    .where('name', req.params.user)
    .update('friend_code', req.body.id)
    .then(() => {
      res.send('updated friend code');
    })
    .catch((err) => {
      console.log(err);
    })
})
app.get('/api/:user/supportinfo', (req, res) => {
  knex('users')
    .where('name', req.params.user)
    .then((result) => {
      const supportObj = {
        all: result[0].all,
        assassin: result[0].assassin,
        berserker: result[0].berserker,
        caster: result[0].caster,
        rider: result[0].rider,
        archer: result[0].archer,
        lancer: result[0].lancer,
        saber: result[0].saber,
      }
      console.log(supportObj);
      knex('servants')
        .where('servant_name', supportObj.assassin)
        .orWhere('servant_name', supportObj.berserker)
        .orWhere('servant_name', supportObj.caster)
        .orWhere('servant_name', supportObj.rider)
        .orWhere('servant_name', supportObj.archer)
        .orWhere('servant_name', supportObj.lancer)
        .orWhere('servant_name', supportObj.saber)
        .then((servant) => {
          console.log(servant);
          res.send(servant);
        })
    })
})

app.get('/api/supports/allsupports', (req, res) => {
  knex('users')
    .then((result) => {
      const userSupports = [];
      result.forEach((serv) => {
        const supportObj = {
          id: serv.id,
          msg: serv.support_msg,
          fid: serv.friend_code,
          all: serv.all,
          assassin: serv.assassin,
          berserker: serv.berserker,
          caster: serv.caster,
          rider: serv.rider,
          archer: serv.archer,
          lancer: serv.lancer,
          saber: serv.saber,
        }
        // console.log(supportObj);
        userSupports.push(supportObj);
      })
      // console.log(userSupports[13]);
      const servants = []
      userSupports.forEach((userSupports) => {
        knex('servants')
          .where('servant_name', userSupports.assassin)
          .orWhere('servant_name', userSupports.berserker)
          .orWhere('servant_name', userSupports.caster)
          .orWhere('servant_name', userSupports.rider)
          .orWhere('servant_name', userSupports.archer)
          .orWhere('servant_name', userSupports.lancer)
          .orWhere('servant_name', userSupports.saber)
          .then((servant) => {
            servants.push({
                servants: servant,
                uid: userSupports.id,
                msg: userSupports.msg,
                fid: userSupports.fid,
            });
            console.log(servants);
          })
      })
    })
})

app.get('/api/:user/servants', (req, res) => {
  knex.select('id')
    .from('users')
    .where('users.name', req.params.user)
    .first()
    .then((result) => {
      const U_ID = result.id
      knex('user_servants')
        .innerJoin('servants', 'servants.id', 'user_servants.servant_id')
        .where('user_servants.user_id', U_ID)
        .then((userServants) => {
          res.send(userServants);
        })
    })
})
app.get('/api/:user/crafts', (req, res) => {
  knex.select('id')
    .from('users')
    .where('users.name', req.params.user)
    .first()
    .then((result) => {
      const U_ID = result.id
      knex('user_crafts')
        .innerJoin('crafts', 'crafts.id', 'user_crafts.crafts_id')
        .where('user_crafts.user_id', U_ID)
        .then((userServants) => {
          res.send(userServants);
        })
    })
})
app.get('/api/:user/classes/:servClass', (req, res) => {
  knex.select('id')
    .from('users')
    .where('users.name', req.params.user)
    .first()
    .then((result) => {
      const U_ID = result.id
      knex('user_servants')
        .innerJoin('servants', 'servants.id', 'user_servants.servant_id')
        .where('user_servants.user_id', U_ID)
        .andWhere('servants.class', req.params.servClass)
        .then((userServants) => {
          res.send(userServants);
        })
    })
})

app.get('/api/items/all', (req, res) => {
  knex('items')
    .then((result) => {
      res.send(result);
    })
})

app.get('/api/crafts/all', (req, res) => {
  knex('crafts')
    .then((result) => {
      res.send(result);
    })
})

app.get('/api/:user/id', (req, res) => {
  knex('users')
    .where('users.name', req.params.user)
    .first()
    .then((result) => {
      res.send(result.id.toString());
    })
})

app.listen(PORT, () => {
  console.log('Listening on port', PORT);
})
