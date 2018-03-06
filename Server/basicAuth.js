const CryptoJS = require('crypto-js');

function BasicAuth(req, res, next) {
  const authHeader = req.get('Authorization')
  const FORMAT = /^Basic\s(\w+={0,2})$/;
  const CREDENTIALS_FORMAT = /^(.*):(.*)$/

  if (authHeader && authHeader.match(FORMAT)) {
    console.log('working in here');
    const value = authHeader.split(FORMAT)[1];
    const decrypted = CryptoJS.enc.Base64.parse(value);
    const credentialsRaw = CryptoJS.enc.Utf8.stringify(decrypted); //hello:tegan
    const credentialMatch = credentialsRaw.match(CREDENTIALS_FORMAT);
    if(credentialMatch) {
      console.log('setting credentials');
      req.credentials = {
        username: credentialMatch[1],
        password: credentialMatch[2]
      };
      next();
    } else {
      res.status(401).set('WWW-Authenticate', 'Basic realm="FGHoarder"').end();
    }
  } else {
    res.status(401).set('WWW-Authenticate', 'Basic realm="FGHoarder"').end();
  }
}

module.exports = BasicAuth;

// 1. Take in request
//    * Check request header for Authorization
//       ```
//        -- Check for this header
//        |
//       \|/
//       Authorization: Basic dGVzdDoxMjPCow==
//       ```
//    * Check if auth prefix is Basic
//    ```
//     -- Check for this prefix
//                     |
//                    \|/
//    Authorization: Basic dGVzdDoxMjPCow==
//    ```
//    * Attempt to Base64 decode credentials
//    ```
//     -- Base64 decode the credentials
//                           |
//                          \|/
//    Authorization: Basic dGVzdDoxMjPCow==
//    ```
//    turns to
//    ```
//     dGVzdDoxMjPCow==
//     becomes
//     email  :   password
//     |          |
//    \|/        \|/
//     Aladdin:open sesame
//    ```
//
//    * Read user email from database
//
//    * Bcrypt compare user.hashed_password to provided password
