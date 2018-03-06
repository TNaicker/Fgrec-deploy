const Client = require('../Client/clientFile');

const client = new Client({});
const newClient = client.with({username: 'hey', password: 'taco'});

newClient.register();
