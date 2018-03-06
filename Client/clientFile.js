const request = require('request-promise');
const CryptoJS = require('crypto-js');
const BASE = 'http://localhost:8000/api';
const BASIC = 'Basic ';

class Client {
  constructor({username, password}) {
    this.username = username;
    this.password = password
    this.uri = BASE
  }
  with(config) {
    const params = Object.assign({}, this, config);

    return new this.constructor(params);
  }

  servants() {
    return this.run('GET', { path: '/servants/all', skipAuth: true})
  }
  class(servantClass) {
    return this.run('GET', { path: '/servants/' + servantClass, skipAuth: true})
  }
  register() {
    return this.run('POST', { path: '/register'})
  }
  authenticate() {
    return this.run('GET', { path: '/protected'})
  }
  generateUserServants(user) {
    return this.run('GET', { path: '/' + user + '/servants', skipAuth: true})
  }
  updateUserSupport(user, servClass, name) {
    return this.run('POST', { path: '/' + user + '/support/' + servClass}, name)
  }
  generateUserSupport(user) {
    return this.run('GET', { path: '/' + user + '/supportinfo'});
  }
  generateUserSupportMsg(user, message) {
    return this.run('GET', { path: '/' + user + '/supportmsg'});
  }
  updateUserSupportId(user, id) {
    return this.run('POST', { path: '/changesupportid/' + user}, id)
  }
  updateUserSupportMsg(user, msg) {
    return this.run('POST', { path: '/changesupportmsg/' + user}, msg)
  }
  generateSupportInfo() {
    return this.run('GET', { path: '/supports/allsupports'});
  }
  generateUserClass(user, servClass) {
    return this.run('GET', { path: '/' + user + '/classes/' + servClass})
  }
  generateUserCrafts(user) {
    return this.run('GET', { path: '/' + user + '/crafts', skipAuth: true})
  }
  items() {
    return this.run('GET', { path: '/items/all', skipAuth: true})
  }
  crafts() {
    return this.run('GET', { path: '/crafts/all', skipAuth: true})
  }
  userID(userName) {
    return this.run('GET', {path: '/' + userName + '/id'})
  }
  postServant(servantInfo) {
    return this.run('POST', { path: '/userServant/create'}, servantInfo);
  }
  postCraft(craftInfo) {
    return this.run('POST', { path: '/userCraft/create'}, craftInfo);
  }

  run(method, resource, body) {
    return request({
      method: method,
      qs: resource.query,
      uri: this.uri.concat(resource.path),
      headers: resource.skipAuth || this.authHeaders(),
      body: body,
      json: true
     })
  }
  authHeaders() {
   return {
      Authorization: BASIC.concat(this.encodedUserPass())
    }
  }
  encodedUserPass() {
    const userPass = this.username + ':' + this.password;
    const words = CryptoJS.enc.Utf8.parse(userPass);
    const creds = CryptoJS.enc.Base64.stringify(words);

    return creds;
  }
}

module.exports = Client;
