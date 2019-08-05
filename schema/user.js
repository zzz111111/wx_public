const {db, Schema, ObjectId} = require('./config');

const user = new Schema({
  userid: ObjectId,
  openid: String,
  nickname: String,
  sex: Number,
  language: String,
  city: String,
  province: String,
  country: String,
  headimgurl: String,
  privilege: String,
});

const userModel = db.model('user', user);

module.exports = userModel;
