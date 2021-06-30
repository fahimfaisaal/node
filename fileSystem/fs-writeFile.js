const faker = require('faker');
const fs = require('fs/promises');
const path = require('path');

console.clear();

const data = []

for (let i = 0; i < 15; i++) {
    const person = {
        name: faker.name.findName(),
        email: faker.internet.email(),
        city: faker.address.cityName(),
        zipCode: faker.address.zipCode(),
    }

    data.push(person);
}

const jsonData = JSON.stringify(data, null, 2);
const writePath = path.resolve('fileSystem', 'data', 'data.json');

// sync mode
// fs.writeFileSync(writePath, jsonData);

// async mode
async function writeFile(writePath, data) {
    try {
        await fs.writeFile(writePath, data);
        console.log(`write data completed at ${writePath}`);
    } catch (e) {
        console.log(e.message);
    }
}

// writeFile(writePath, jsonData);

module.exports = writeFile;