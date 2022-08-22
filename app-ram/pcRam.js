const os = require('os');

const {arch, plataform, totalmem, freemem} = os;
const stats = {
    OS: plataform(),
    Arch: arch(),
    TotalRAM: totalmem(),
    FreeRAM: freemem(),
}
console.log(stats);