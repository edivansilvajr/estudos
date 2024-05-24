const os = require("node:os")
const fs = require("node:fs")
const path = require("node:path")

const systemPlatformMap = {
    "win32": "Windows",
    "linux": "Linux",
    "darwin": "MacOS",
    "freebsd": "FreeBSD"
}

function printLog() {

    console.log(systemPlatformMap[os.platform()]);
    /* const sistem = os.platform();

    console.log("Detalhes do sistema");
    console.log(`Sistema operacional ${sistem}`); */
}

printLog();