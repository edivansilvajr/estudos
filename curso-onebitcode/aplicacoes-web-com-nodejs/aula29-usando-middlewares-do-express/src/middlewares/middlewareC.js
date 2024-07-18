module.exports = function(req, res, next) {
    console.log("Executando o middleware C");
    next();
}