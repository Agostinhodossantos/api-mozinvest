const config = require("../utils/config");
const database = config.defaultDatabase;
const exhibitor_ref = database.ref("exhibitor");

async function getExhibitor() {
    let list = await exhibitor_ref.once('value',  async (snapshot) => {
        return snapshot.val();
    });
    return list;
}

async function getExhibitorByID(id) {
    let exhibitor = await exhibitor_ref.child(id).once('value', async (snapshot) => {
        return snapshot.val();
    })
    return exhibitor;
}

module.exports = {
    getExhibitor,
    getExhibitorByID
}