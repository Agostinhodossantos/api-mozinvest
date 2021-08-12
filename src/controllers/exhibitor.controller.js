const {} = require("../model/Exhibitor");
const {} = require("../model/LatLng");
const providers = require("../controllers/providers");
const {json} = require("express");

const setExhibitor = (req, res) => {

}

const getAllExhibitors = async (req, res) => {
    let allExhibitor = await providers.getExhibitor();
    if (allExhibitor != null) {

    }
    res.status(200).send(JSON.parse(JSON.stringify(allExhibitor)));
}

module.exports = {
    getAllExhibitors
}