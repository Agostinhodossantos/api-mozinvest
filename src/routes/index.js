const express = require("express");
const router = express.Router();
const home = require("../controllers/index");
const controller = require("../controllers/exhibitor.controller");

let routes = (app) => {
    router.get("/", home.index);
    router.get("/exhibitors", controller.getAllExhibitors);
    app.use(router);
}

module.exports = routes;