const fs = require('fs/promises');
const path = require('path');

const testDirPath = path.resolve('test', 'hello.js');

// try {
//     fs.unlinkSync(testDirPath);
// } catch (e) {
//     console.log(e.message);
// }

async function deleteFile(deletePath) {
    try {
        await fs.unlink(deletePath);

        console.log(`${path.basename(deletePath)} has deleted`);
    } catch (e) {
        console.log("File Doesn't exist!")
    }
}

deleteFile(testDirPath)