const mongoose = require("mongoose");
mongoose.Promise=global.Promise;

function connectDB() {
    mongoose.connect('mongodb://localhost:27017/my_database',{useNewUrlParser:true,useUnifiedTopology: true})

    mongoose.connection.on("open", function() {
    console.log("数据库连接成功");
    })

    mongoose.connection.on("error", function() {
    console.log("数据库连接失败");
    })
}
module.exports = connectDB;