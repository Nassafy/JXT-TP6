const axios = require("axios");
const fs = require("fs");
const secret = fs.readFileSync("jwtRS256.key");
const jwt = require("jsonwebtoken");

const verifyacess = token => {
  return new Promise((resolve, reject) => {
    jwt.verify(token, secret, (err, decoded) => {
      if (err) {
        reject();
      } else {
        resolve(decoded);
      }
    });
  });
};

const login = (username, password, callback) => {
  axios
    .post("localhost:3001/auth/login", { login: username, password: password })
    .then(res => {
      callback(res.access_token);
    })
    .catch(err => {
      console.error(error);
    });
};

module.exports = { login, verifyacess };
