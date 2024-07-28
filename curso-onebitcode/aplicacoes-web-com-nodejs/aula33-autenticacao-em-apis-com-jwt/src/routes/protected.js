const express = require("express");
const authMiddleware = require("../middelwares/auth-middeware");

const protectedRouter = express.Router();

protectedRouter.get("/dashboard", authMiddleware, (req, res) => {
    const username = req.authenticatedUser.username;
    res.json({ message: `Você está na área protegida, ${username}` });
});

module.exports = protectedRouter;