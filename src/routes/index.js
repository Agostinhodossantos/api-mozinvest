const express = require("express");
const router = express.Router();
const home = require("../controllers/index");
const controller = require("../controllers/exhibitor.controller");
const {upload} = require("../utils/upload")
const axios = require('axios');

let routes = (app) => {
    router.get("/", home.index);
    router.get("/exhibitors", controller.getAllExhibitors);
    router.get("/exhibitors/:id", controller.getExhibitorByID);
    router.post("/exhibitors", upload.single('file'), controller.setExhibitor);
    router.get("/test", (req, res) => {
        let url = "https://api-mozinvest.herokuapp.com/exhibitors";

        axios.get(url)
            .then(function (response) {
                var res = response.data;
                console.log(res);
                for (var key in res) {

                    //console.log(res.hasOwnProperty(key));
                    // if (res.hasOwnProperty(key)) {
                    //     var val = res[key];
                    //     for (var key in val) {
                    //         if (val.hasOwnProperty(key)) {
                    //             var dialog = val[key];
                    //             console.log(dialog);
                    //         }
                    //     }
                    // }
                }
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
            });
    })
    app.use(router);
}

module.exports = routes;