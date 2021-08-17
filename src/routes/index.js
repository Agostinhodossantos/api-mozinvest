const express = require("express");
const router = express.Router();
const home = require("../controllers/index");
const controller = require("../controllers/exhibitor.controller");
const {upload} = require("../utils/upload")

let routes = (app) => {
    router.get("/", home.index);
    router.get("/exhibitors", controller.getAllExhibitors);
    router.get("/exhibitors/:id", controller.getExhibitorByID);
    router.post("/exhibitors", upload.single('file'), controller.setExhibitor);
    app.use(router);
}

module.exports = routes;