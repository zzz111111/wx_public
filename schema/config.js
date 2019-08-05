const mongoose = require('mongoose');

/**
 * 解决警告DeprecationWarning: Mongoose: `findOneAndUpdate()` and `findOneAndDelete()` without the `use...
 *  原因是因为:findOneAndUpdate()内部会使用findAndModify驱动，驱动即将被废弃，所以弹出警告！附上官方解释：Mongoose v5.5.8: Deprecation Warnings
 */
mongoose.set('useFindAndModify', false);

// 连接mongoose 服务器
const db = mongoose.createConnection('mongodb://localhost:27017/wx_public', {useNewUrlParser: true});

// 用原生的es6的promise 代替mongoose自身实现的promise
mongoose.Promise = global.Promise;

db.on('error', () => {
  console.log('mongodb数据库连接失败');
});

db.on('open', () => {
  console.log('mongodb数据库连接成功');
});


const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

module.exports = {
  db,
  Schema,
  ObjectId
};
