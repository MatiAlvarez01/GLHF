const { Router } = require("express");
const Game = require("../../models/game/game");
require("dotenv").config();
const router = Router();

router.post("/details", async(req, res, next) => {
    const { matchId } = req.body;
    try {
        const gameFound = await Game.findOne({matchId: matchId})
        return res.status(200).send(gameFound);
    } catch (err) {
        return next(err)
    }
})

router.post("/stats", async(req, res, next) => {
    const { matchId } = req.body;
    try { //blueTeam -> 100/abajo, redTeam -> 200/arriba
        const gameFound = await Game.findOne({matchId: matchId})
        const blueTeam = gameFound.participantsStats.slice(0, 5);
        const redTeam = gameFound.participantsStats.slice(5, 10);
        var obj = {
            scoreBlue: 0,
            scoreRed: 0,
            goldBlue: 0,
            goldRed: 0,
            baronBlue: 0,
            baronRed: 0,
            dragonBlue: 0,
            dragonRed: 0,
            totalDamageBlue: 0,
            totalDamageRed: 0,
            totalCCBlue: 0,
            totalCCRed: 0,
            wardsBlue: 0,
            wardsRed: 0,
            torresBlue: 0,
            torresRed: 0,
            inhiBlue: 0,
            inhiRed: 0,
            objStolenBlue: 0,
            objStolenRed: 0,
            visionScoreBlue: 0,
            visionScoreRed: 0,
        }
        var killsBlue = 0;
        var assitsBlue = 0;
        var deathsBlue = 0;
        var killsRed = 0;
        var assitsRed = 0;
        var deathsRed = 0;
        for (var i=0; i<blueTeam.length; i++) {
            //blueTeam
            killsBlue += blueTeam[i].kills;
            assitsBlue += blueTeam[i].assists;
            deathsBlue += blueTeam[i].deaths;
            obj.goldBlue += blueTeam[i].goldEarned;
            obj.baronBlue += blueTeam[i].baronKills;
            obj.dragonBlue += blueTeam[i].dragonKills;
            obj.totalDamageBlue += blueTeam[i].totalDamageDealt;
            obj.totalCCBlue += blueTeam[i].totalTimeCCDealt;
            obj.wardsBlue += blueTeam[i].wardsPlaced;
            obj.torresBlue += blueTeam[i].turretKills;
            obj.inhiBlue += blueTeam[i].inhibitorKills;
            obj.objStolenBlue += blueTeam[i].objectivesStolen;
            obj.visionScoreBlue += blueTeam[i].visionScore;
            //redTeam
            killsRed += redTeam[i].kills;
            assitsRed += redTeam[i].assists;
            deathsRed += redTeam[i].deaths;
            obj.goldRed += redTeam[i].goldEarned;
            obj.baronRed += redTeam[i].baronKills;
            obj.dragonRed += redTeam[i].dragonKills;
            obj.totalDamageRed += redTeam[i].totalDamageDealt;
            obj.totalCCRed += redTeam[i].totalTimeCCDealt;
            obj.wardsRed += redTeam[i].wardsPlaced;
            obj.torresRed += redTeam[i].turretKills;
            obj.inhiRed += redTeam[i].inhibitorKills;
            obj.objStolenRed += redTeam[i].objectivesStolen;
            obj.visionScoreRed += redTeam[i].visionScore;
        }
        obj.scoreBlue = `${killsBlue} / ${deathsBlue} / ${assitsBlue}`;
        obj.scoreRed = `${killsRed} / ${deathsRed} / ${assitsRed}`;
        return res.status(200).send(obj);
    } catch (err) {
        return next(err)
    }
})

router.post("/champ", async(req, res, next) => {
    const { matchId, summonerName } = req.body;
    try {
        const gameFound = await Game.findOne({matchId: matchId});
        const summoner = gameFound.participantsStats.find(summoner => summoner.summonerName === summonerName)
        return res.status(200).send(summoner)
    } catch (err) {
        return next(err)
    }
})

module.exports = router;