const fs = require('fs');

let Controller = {};
const ctrPath = __dirname + '/../controllers/';
const ctrFiles = fs.readdirSync(ctrPath);
for (let ctr of ctrFiles) {
    if (fs.statSync(ctrPath + ctr).isDirectory()) continue;
    Controller[/.+(?=\.\w?)/.exec(ctr)[0]] = require(ctrPath + ctr)
}
module.exports.Controller = Controller
