const Koa = require('koa')
var cors = require('koa2-cors');
var bodyParser = require('koa-bodyparser');
const connectDB = require("./src/db/db")


connectDB() // 连接数据库

const app = new Koa();
app.use(bodyParser());

app.use(cors({
  origin: function(ctx) {
    return '*'
  },
  allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], //设置所允许的HTTP请求方法
  allowHeaders: ['Content-Type', 'Authorization', 'Accept'], //设置服务器支持的所有头信息字段
  exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'] //设置获取其他自定义字段
}))

const router = require("./src/router/router")();

app.use(router.routes()); //作用：启动路由
app.use(router.allowedMethods()); // 作用： 这是官方文档的推荐用法,我们可以看到router.allowedMethods()用在了路由匹配router.routes()之后,所以在当所有路由中间件最后调用.此时根据ctx.status设置response响应头
app.listen(3001, () => {
    console.log('server start at 3001....');
});

