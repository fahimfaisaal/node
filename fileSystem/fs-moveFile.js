const fs = require('fs');
const fsAsync = require('fs/promises')
const path = require('path');
console.clear();

// create File
const createDirPath = path.resolve('fileSystem', 'data', 'movePara');

function createDir(dirPath) {
    if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath)

        console.log(`${path.basename(dirPath)} has created.`);
        return;
    }

    console.log(`${path.basename(dirPath)} already exists.`);
}

createDir(createDirPath);

// move and rename file
async function moveFile(mainFilePath, targetPath) {
    try {
        await fsAsync.rename(mainFilePath, targetPath);
        console.log(`${path.basename(mainFilePath)} edited`);
    } catch (e) {
        console.log(e.message);
    }
}

const oldPath = path.resolve('fileSystem', 'data', 'copyPara.txt');
const newPath = path.resolve('fileSystem', 'data', 'movePara', 'copyPara.md');

moveFile(oldPath, newPath);