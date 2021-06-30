const fs = require('fs/promises');
const path = require('path');
const writeFile = require('./fs-writeFile');

const para1 = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam distinctio aut non temporibus illum animi beatae odio laudantium nesciunt nihil.';

const paraPath = path.resolve('fileSystem', 'data', 'para.txt');

writeFile(paraPath, para1);

const para2 = '\n\nLorem ipsum dolor sit amet consectetur adipisicing elit. Ea vel tempore iure debitis. Ut perferendis in possimus officia architecto tenetur, fuga voluptatibus facere sint illum temporibus magni odio. Excepturi sunt, inventore vitae laudantium temporibus sequi! Animi enim fugit accusantium possimus. Eveniet deserunt aspernatur modi corrupti non velit repudiandae est iste.'

// sync mode
// try {
//     fs.appendFileSync(paraPath, para2);
//     console.log(`append completed at ${paraPath}`);
// } catch (e) {
//     console.log(e.message);
// }

// async mode
async function appendFile(appendPath, data) {
    try {
        await fs.appendFile(appendPath, data);
        console.log(`append data completed at ${appendPath}`);
    } catch (e) {
        console.log(e.message);
    }
}

appendFile(paraPath, para2);