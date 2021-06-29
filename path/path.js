console.clear();

const path = require('path');

// console.log(path);
const currentPath = __filename;

// console.log(path.basename(currentPath));
// console.log(path.basename(currentPath, '.js'));

// console.log(path.extname(currentPath));

// console.log('is valid path:', path.isAbsolute(currentPath));
// console.log('is valid path:', path.isAbsolute('C:\\download'));

// console.log(process.env) // OS system environment
// console.log(process.env.PATH); // OS system environment path
// console.log(path.delimiter);

// console.log(process.env.PATH.split(path.delimiter)); // split all environment path

// relative path
const joinPath = path.join('home', 'user', 'dir', 'name');
console.log(joinPath);

// absolute path
const resolvePath = path.resolve('home', 'user', 'dir', 'name');
console.log(resolvePath);

const pathObject = {
    dir: joinPath,
    // base: 'index.html'
    // alternate of base
    name: 'main',
    ext: '.html'
}

const formatPath = path.format(pathObject);
console.log(formatPath)

const pathParse = path.parse(formatPath);
console.log(pathParse);

console.log(path.delimiter);

// The path.normalize() method normalizes the given path, resolving '..' and '.' segments.
console.log(path.normalize(resolvePath));