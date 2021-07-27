const Router = require('koa-router');
const User = require('../service/user')

module.exports = function() {
    var router = new Router()

    router.get('/setUserInfo', User.addTest)
    router.post("/postdata", User.testPost)
    router.post('/findPerson', User.findTest)
    router.post('/deletePerson', User.deleteTest)

    return router
}
