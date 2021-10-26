const { Router } = require("express");
const summoner = require("./summoner/summoner");
const champion = require("./champion/champion");
const game = require("./game/game");
const games = require("./games/games");

const router = Router();

router.use("/summoner", summoner);
router.use("/champion", champion);
router.use("/match", game);
router.use("/matchs", games);

router.get("/", (req, res, next) => {
    return res.send("Get de GLHF")
})

module.exports = router;