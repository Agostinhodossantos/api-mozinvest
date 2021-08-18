const config = require("../utils/config");
const database = config.defaultDatabase;
const exhibitor_ref = database.ref("exhibitor");

async function getExhibitor() {
    let list = [];
    await exhibitor_ref.once('value',  async (snapshot) => {
        snapshot.forEach((child) => {
            list.push(child.val());
        });
});
    return list;
}

async function getImagesExhibitor(uid) {
    console.log(uid)
    let list = [];
    await exhibitor_ref.child(uid).child("images").once("value", async (snapshot) => {
        snapshot.forEach((child) => {
            list.push(child.val());
        })
    })
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
    getExhibitorByID,
    getImagesExhibitor
}