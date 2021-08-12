const config = require("../utils/config");
const database = config.defaultDatabase;
const exhibitor_ref = database.ref("exhibitor");

async function getExhibitor() {
    let list = [];
    await exhibitor_ref.on('value', async (snapshot) => {
       let result_list = await snapshot.val();
        for (const resultListElement of result_list) {
            list.push(resultListElement);
        }
    });
    return list;
}

module.exports = {
    getExhibitor
}