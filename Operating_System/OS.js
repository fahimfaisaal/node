console.clear();

const os = require('os');

console.log(os.EOL) // end-of-line marker

// console.log('host name:', os.hostname());
// console.log('current absolute directory path:', __dirname);
// console.log('current absolute file name path:', __filename);
// console.log('home directory:', os.homedir())
// console.log('temp path:', os.tmpdir());

// console.log('operating system identifier:', os.platform())
// console.log('operating system:', os.type())
// console.log('architecture:', os.arch());
// console.log('cpus:', JSON.stringify(os.cpus(), null, 2));
// console.log('total RAM:', Math.ceil(os.totalmem() / 1024 / 1024 / 1024) + 'GB');
// console.log('available RAM:', Math.ceil(os.freemem() / 1024 / 1024 / 1024) + 'GB');
// console.log('os version:', os.version())

// console.log('load average:', os.loadavg());
// console.log('network interfaces:', os.networkInterfaces())
// console.log('release version:', os.release());

console.log('system uptime:', os.uptime());