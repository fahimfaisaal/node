const fs = require('fs/promises');
const path = require('path');

// (async () => {
//     try {
//         const data = await fs.readFile(__dirname + '/data/data.json');
//         const persons = JSON.parse(data);
//         console.log(persons);
//     } catch (e) {
//         console.log(e.message)
//     }
// })()

const dataPath = path.resolve('fileSystem', 'data', 'data.json');

// sync mode
// try {
//     const data = fs.readFileSync(dataPath);
//     const persons = JSON.parse(data);

//     console.log(persons);
// } catch (e) {
//     console.log(e.message)
// }

// async mode
async function readFile(readPath) {
    try {
        const data = await fs.readFile(readPath);

        return JSON.parse(data);
    } catch (e) {
        return e.message;
    }
}

const persons = readFile(dataPath);

persons
    .then(data => {
        console.log(data);
    })


module.exports = readFile;