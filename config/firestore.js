const admin = require('firebase-admin');
var serviceAccount = require('path to service key');

if (!admin.apps.length) {
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount)
    });
    const settings = { timestampsInSnapshots: true };
    admin.firestore().settings(settings);
}

// set the params
var db = admin.firestore();

module.exports.db = db;