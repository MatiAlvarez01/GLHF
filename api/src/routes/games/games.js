const { Router } = require("express");
const Game = require("../../models/game/game");
const Summoner = require("../../models/summoner/summoner");
require("dotenv").config();
const router = Router();

router.post("/all", async (req, res, next) => {
    const { summonerName } = req.body;
    try {
        const summoner = await Summoner.findOne({name: summonerName}).populate("games")
        return res.status(200).send(summoner.games)
    } catch (err) {
        return next(err)
    }
})

module.exports = router;