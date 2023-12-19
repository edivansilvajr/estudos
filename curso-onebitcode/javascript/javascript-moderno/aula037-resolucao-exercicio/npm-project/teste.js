const str = `{
    "name": "npm-project",
    "version": "1.0.0",
    "description": "",
    "main": "index.js",
    "scripts": {
      "test": "echo \'Error: no test specified\' && exit 1"
    },
    "keywords": [],
    "author": "",
    "license": "ISC"
}`;

const obj = JSON.parse(str);
console.log(obj);

const str2 = JSON.stringify(obj);
console.log(str2);