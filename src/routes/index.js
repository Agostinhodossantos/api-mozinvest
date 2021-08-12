const express = require("express");
const router = express.Router();
const home = require("../controllers/index");

let routes = (app) => {
    router.get("/", home.index);
    app.use(router);
}

module.exports = routes;