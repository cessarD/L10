var mongoose = require("mongoose");

let database = "RegistroApi";
let port = "27017";
let host = "localhost";
let uri = `
    mongodb://${host}:${port}:${database}`;

const connectdb = () => {
  mongoose.Promise = global.Promise;

  mongoose
    .connect(uri, { useNewUrlParser: true })
    .then(() => {
      console.log("OK");
    })
    .catch(() => {
      console.log("NO");
    });
};

module.exports = {
    connectdb
};
