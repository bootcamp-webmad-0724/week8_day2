module.exports = app => {

    const coastersRouter = require("./coasters.routes")
    app.use("/api/coasters", coastersRouter)

    const authRouter = require("./auth.routes")
    app.use("/api/auth", authRouter)
}