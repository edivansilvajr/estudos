const multer = require("multer");

const uploaderMiddlewares = multer({
    dest: "uploads/"
});

module.exports = uploaderMiddlewares;