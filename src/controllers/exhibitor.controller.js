const {} = require("../model/Exhibitor");
const {} = require("../model/LatLng");
const providers = require("../controllers/providers");
const { getDate, isEmpty, getUuid } = require('../utils/utils')

const {json} = require("express");

const setExhibitor = (req, res) => {

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

module.exports = {
    getAllExhibitors,
    getExhibitorByID
}