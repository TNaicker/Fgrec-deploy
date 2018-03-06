const Client = require('../../../Client/clientFile');

module.exports = {
  isLoggedIn: function() {
    return Boolean(this.getCredentials());
  },
  createClient: function(creds) {
    return this.newClient(creds || this.getCredentials() || {});
  },
  newClient: function(creds) {
    return new Client({}).with(creds);
  },
  getCredentials: function(creds) {
    return this.getApp().creds || creds;
  },
  storeCredentials: function(creds) {
    return this.updateApp({creds});
  },
  removeCredentials: function() {
    return this.updateApp({creds: null});
  },
  updateApp: function(change) {
    sessionStorage.setItem(
      'app',
      JSON.stringify(Object.assign(this.getApp(), change))
    )

    return this;
  },
  getApp: function() {
    return JSON.parse(sessionStorage.getItem('app')) || {};
  },
  getUser: function() {
    return JSON.parse(sessionStorage.getItem('app')).creds.username || {};
  },
  getUserID: function() {
    return this.createClient().userID(this.getUser) || undefined;
  }
}
