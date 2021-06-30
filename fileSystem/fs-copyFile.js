const fs = require('fs/promises');
const path = require('path');

const para = path.resolve('fileSystem', 'data', 'para.txt');
const copyPara = path.resolve('fileSystem', 'data', 'copyPara.txt');

// sync mode
// try {
//     fs.copyFileSync(para, copyPara);
//     console.log('Successfully copied.');
// } catch (e) {
//     console.log(e.message);
// }

// async mode
async function copyFile(mainPath, copyPath) {
    try {
        await fs.copyFile(mainPath, copyPath);
        console.log('Successfully copied.');
    } catch (e) {
        console.log(e.message);
    }
}

copyFile(para, copyPara);