const uuidv1 = require("uuid/v4");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
mongoose.connect("mongodb://localhost:5000/test2", { useNewUrlParser: true });

//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on("error", console.error.bind(console, "MongoDB connection error:"));

const alertSchema = new Schema({
  id: { type: String, required: true, unique: true },
  type: { type: String, required: true },
  label: String,
  status: String,
  from: String,
  to: String
});

var Alert = mongoose.model("Alert", alertSchema);

const add = (alertData, callback) => {
  const alert = new Alert({id:uuidv1(), ...alertData});
  console.log(alertData)
  alert.save((err, alert) => {
   // console.log(err)
    callback(err);
  });
};

const get = (id, callback) => {
  Alert.find({ id: id }, callback);
};

const search = (obj, callback) => {
  console.log("in search")
  Alert.find(obj,callback);
};

const remove = (id, callback) => {
  Alert.deleteOne({ id: id }, err => {
    callback(err);
  });
};

const update = (id, updated, callback) => {
  Alert.updateOne({ id: id }, updated, (err, raw) => {
    callback(err, raw);
  });
};

exports.get = get;
exports.search = search;
exports.add = add;
exports.remove = remove;
exports.update = update;
