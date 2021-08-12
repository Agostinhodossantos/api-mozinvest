var admin = require("firebase-admin")
var serviceAccount = require("../../config/serviceAccountKey.json")

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://events-18105-default-rtdb.firebaseio.com",
    storageBucket: "events-18105.appspot.com"
})

var defaultAuth = admin.auth()
var defaultDatabase = admin.database()
var defaultFirestore = admin.firestore()
var defaultBucket = admin.storage().bucket()

module.exports = {
    defaultAuth,
    defaultDatabase,
    defaultFirestore,
    defaultBucket
}