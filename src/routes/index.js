const express = require("express");
const router = express.Router();
const home = require("../controllers/index");
const controller = require("../controllers/exhibitor.controller");
const sendControler = require("../controllers/message.controller");
const {upload} = require("../utils/upload")
const axios = require('axios');

let routes = (app) => {
    router.get("/", home.index);
    router.get("/exhibitors", controller.getAllExhibitors);
    router.get("/exhibitors/:id", controller.getExhibitorByID);
    router.get("/exhibitors/:id/images", controller.getImagesExhibitor);
    router.post("/exhibitors", upload.single('file'), controller.setExhibitor);
    router.get("/exhibitors/:id/products", controller.getProductExhibitor );
    router.post("/message", sendControler.send);

    app.use(router);
}

module.exports = routes;