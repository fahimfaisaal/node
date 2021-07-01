const fs = require('fs');
const fsAsync = require('fs/promises');
const path = require('path');

console.clear();

// with callback
// fs.stat(__dirname, (err, stats) => {
//     if (err) {
//         console.log(err.message);
//         return
//     }

//     console.log(stats.birthtime.toLocaleDateString());
//     console.log(stats.isDirectory());
// })

async function stat(path) {
    try {
        return await fsAsync.lstat(path);
    } catch (e) {
        console.log(e.message);
    }
}
const filePath = __filename;

const stats = stat(filePath);
stats.then(stat => {
    console.log(stat);
})

console.log(filePath);