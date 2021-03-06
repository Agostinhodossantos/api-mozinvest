const {} = require("../model/Exhibitor");
const {} = require("../model/LatLng");
const providers = require("../controllers/providers");
const {serverFileUpload} = require("../utils/upload")
const path = require("path");
const { getDate, isEmpty, getUuid } = require('../utils/utils')

const {json} = require("express");

const setExhibitor = async (req, res) => {
    let exhibitor = null
    let urlPhoto = ""
    let file = ""
    let uid = getUuid();

    if (isEmpty(req.file)) {
        res.status(422).send({ status: 422, message: "Request missing a required parameter img" })
    } else {
        file = path.join(__dirname, "../../uploads/" + req.file.filename);
        urlPhoto = await serverFileUpload(path.normalize(file), req.file.filename, "exhibitor", req.file);
    }

    console.log(urlPhoto);
}

const getProductExhibitor = async (req, res) => {
    let uid = req.params.id;
    let product = await providers.getProductExhibitor(uid);

    if (!isEmpty(product)) {
        res.status(200).send(JSON.parse(JSON.stringify(product)))
    } else  {
        res.status(500).send([])
    }
}

const getImagesExhibitor = async (req, res) => {
    let uid = req.params.id;
    let exhibitor = await providers.getImagesExhibitor(uid);

    if (!isEmpty(exhibitor)) {
        res.status(200).send(JSON.parse(JSON.stringify(exhibitor)));
    } else {
        res.status(500).send([]);
    }
}

const getAllExhibitors = async (req, res) => {
    let allExhibitor = await providers.getExhibitor();


    if (allExhibitor != null) {
        res.status(200).send(JSON.parse(JSON.stringify(allExhibitor)));
    } else {
        res.status(500).send(JSON.parse(JSON.stringify(allExhibitor)));
    }
}

const getExhibitorByID = async (req, res) => {
    let id = req.params.id;
    let exhibitor = await providers.getExhibitorByID(id);
   // console.log(JSON.parse(JSON.stringify(exhibitor)).product);

    if (!isEmpty(exhibitor)) {
        res.status(200).send(JSON.parse(JSON.stringify(exhibitor)));
    } else {
        res.status(500).send(JSON.parse(JSON.stringify(exhibitor)));
    }
}

function modelExhibitor(req) {
    let {uid, name, contact, location, email, password, video, description,rating, count} = req.body;
}



module.exports = {
    getAllExhibitors,
    getExhibitorByID,
    setExhibitor,
    getImagesExhibitor,
    getProductExhibitor,
}