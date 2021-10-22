const { Router } = require("express");
const Summoner = require("../../models/summoner/summoner")
require("dotenv").config();
const router = Router();

router.post("/summoner/all", async (req, res, next) => {
    const { summonerName } = req.body;
    try {
        const summoner = await Summoner.findOne({ name: {$regex: new RegExp(summonerName, "i")}});
        return res.status(200).send(summoner.champions);
    } catch (err) {
        return next(err)
    }
})
router.post("/summoner/champName", async (req, res, next) => {
    const { summonerName, champName } = req.body;
    try {
        const summoner = await Summoner.findOne({ name: {$regex: new RegExp(summonerName, "i")}});
        const champions = [];
        for (var i=0; i<summoner.champions.length; i++) {
            if (summoner.champions[i].championLevel ) {
                champions.push(summoner.champions[i])
            }
        }
        return res.status(200).send(champions);
    } catch (err) {
        return next(err)
    }
})

router.post("/summoner/champLevel", async (req, res, next) => {
    var { summonerName, champLevel } = req.body; //Valores del 1 al 7 inclusive.
    try {
        const summoner = await Summoner.findOne({ name: {$regex: new RegExp(summonerName, "i")}});
        var champions = [];
        if (champLevel != "Todos") {
            champLevel = parseInt(champLevel)
            for (var i=0; i<summoner.champions.length; i++) {
                if (summoner.champions[i].championLevel === champLevel) {
                    champions.push(summoner.champions[i])
                }
            }
        } else {
            champions = summoner.champions;
        }
        return res.status(200).send(champions);
    } catch (err) {
        return next(err)
    }
})

router.post("/summoner/lastTimePlayed", async (req, res, next) => {
    const { summonerName, order } = req.body; //Order is ASC or DESC
    try {
        const summoner = await Summoner.findOne({ name: {$regex: new RegExp(summonerName, "i")}});
        console.log("summoner:", summonerName)
        if (order === "ASC") {
            summoner.champions.sort(function(a, b) {
                if (a.lastPlayTime > b.lastPlayTime) {
                    return 1
                }
                if (a.lastPlayTime < b.lastPlayTime) {
                    return -1
                }
                return 0;
            })
            return res.status(200).send(summoner.champions);
        }
        if (order === "DESC") {
            summoner.champions.sort(function(a, b) {
                if (a.lastPlayTime > b.lastPlayTime) {
                    return -1
                }
                if (a.lastPlayTime < b.lastPlayTime) {
                    return 1
                }
                return 0;
            })
            return res.status(200).send(summoner.champions);
        }
    } catch (err) {
        return next(err)
    }
})

router.post("/summoner/chest", async (req, res, next) => {
    const { summonerName, chest } = req.body; //Chest values are true or false;
    try {
        const summoner = await Summoner.findOne({ name: {$regex: new RegExp(summonerName, "i")}});
        const champions = [];
        for (var i=0; i<summoner.champions.length; i++) {
            if (summoner.champions[i].chestGranted === chest) {
                champions.push(summoner.champions[i])
            }
        }
        return res.status(200).send(champions);
    } catch (err) {
        return next(err)
    }
})

module.exports = router;