const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const summonerSchema = new Schema({
    summonerId: {
        type: String
    },
    accountId: {
        type: String
    },
    puuId: {
        type: String
    },
    name: {
        type: String
    },
    profileIconId: {
        type: Number
    },
    summonerLevel: {
        type: Number
    },
    games: [{
        type: Schema.ObjectId,
        ref: "Game"
    }],
    champions: [],
}, {
    timestamps: true
})

const Summoner = mongoose.model("Summoner", summonerSchema);

module.exports = Summoner;