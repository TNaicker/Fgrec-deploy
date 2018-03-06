module.exports = function unauthorized(res) {
  res.status(401)
    .set('WWW-Authenticate', 'Basic realm="FGRecorder"')
    .end();
}
