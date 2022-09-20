const admin = require("firebase-admin");

var serviceAccount = require("../config/estore-84425-firebase-adminsdk-wmkf6-d8aa6a8db8.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://fashionshop-dfa38-default-rtdb.asia-southeast1.firebasedatabase.app",
});

module.exports = admin;
