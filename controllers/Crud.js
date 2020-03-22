const admin = require('../config/firestore').admin;
const db = require('../config/firestore').db;

module.exports = {

    get: async function (req, res) {
        try {
            userCol = db.collection('users');
            let users = userCol.orderBy('createdAt');
            users = await users.get().then(docs => {
                let users = [];
                docs.forEach(doc => {
                    let user = doc.data();
                    user.id = doc.id;
                    users.push(user);
                });
                res.json(users);
            });
        } catch (err) {
            console.log(err);
            res.status(400).json({ msg: "Error Occured" })
        }
    },

    post: async (req, res) => {
        var docRef = db.collection('users');
        docRef.set({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            username: req.body.username.toLowerCase(),
            email: req.body.email,
            createdAt: (new Date()).getTime(),
        }).then(function () {
            res.json({ msg: 'User saved' });
        }).catch(err => { console.log(err); res.status(400).json({ msg: "Error Occured" }) });

    },

    edit: async (req, res) => {
        var user = {}
        user.firstName = req.body.firstName;
        user.lastName = req.body.lastName;
        user.email = req.body.email;
        user.username = req.body.username;
        user.updatedAt = (new Date()).getTime();

        var docRef = db.collection('users').doc(req.params.id);

        docRef.update(user).then(function () {
            res.json({ msg: "User Updated" });
        }).catch(err => { console.log(err); res.status(400).json({ msg: "Error Occured" }) });
    },

    delete: async (req, res) => {
        let id = req.params.id

        let UserCol = await db.collection('needs').doc(sid).get();
        if (!UserCol.exists) return res.status(400).json({ msg: "User not found" });

        let user = UserCol.data();

        db.collection('users').doc(id).delete();
        res.json({ msg: "User Deleted" })
    },
}