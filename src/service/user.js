var mongoose = require('mongoose')
var Schema = mongoose.Schema;
var testScame = new Schema({
  nickname: String,
  gender: String,
  breed: String,
  userId: Number
})
var User = mongoose.model('ll', testScame, "ll")

// post设置个人信息
exports.testPost = async (ctx, next) => {
  let test  = new User({
    nickname: ctx.request.body.nickname,
    gender: ctx.request.body.gender,
    age: ctx.request.body.age
  })
  const req = await test.save()
  ctx.body = req;
}

// gets设置个人信息
exports.addTest = async (ctx, next) => {
  let test = new User({
    nickname: ctx.request.query.nickname,
    gender: ctx.request.query.gender,
    age: ctx.request.query.age,
    update_time: new Date()
  })
  const req = await test.save();
  ctx.body = req;
}

// 查找个人信息
exports.findTest = async (ctx, next) => {
  let query = await User.find({nickname: 'yct'})
  ctx.body = query;
}

exports.deleteTest = async (ctx, next) => {
  let res = await User.remove({nickname: "有有有"})
  ctx.body = res;
}