const os = require('os')

let totalMemory = os.totalmem();
let freeMemory = os.freemem();

console.log(`Total memory: ${totalMemory}`);
console.log(`Free memory: ${freeMemory}`);
