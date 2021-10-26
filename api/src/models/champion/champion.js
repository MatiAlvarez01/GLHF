const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const championSchema = new Schema({
    _id: { //championId
        type: Number
    },
    championName: {
        type: String
    },
    championLevel: {
        type: Number
    },
    championPoints: {
        type: Number
    },
    lastPlayTime: {
        type: Number
    },
    championPointsSinceLastLevel: {
        type: Number
    },
    championPointsUntilNextLevel: {
        type: Number
    },
    chestGranted: {
        type: Boolean
    },
    championImage: {
        type: String
    },
    kills: {
        type: Number
    },
    assists: {
        type: Number
    },
    deaths: {
        type: Number
    },
    kda: {
        type: Number
    },
    money: {
        type: Number
    },
    farm: {
        type: Number
    },
    games: [{
        type: Schema.ObjectId,
        ref: "Game"
    }],
}, {
    timestamps: true
})

const Champion = mongoose.model("Champion", championSchema);

module.exports = Champion;