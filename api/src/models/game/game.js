const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const gameSchema = new Schema({
    matchId: { 
        type: String
    },
    participantsIds: [],
    participantsStats: [],
    gameDate: {
        type: Number
    },
    gameDuration: {
        type: Number
    },
    gameMode: {
        type: String
    },
    gameVersion: {
        type: String
    },
    teams: [],
}, {
    timestamps: true
})

const Game = mongoose.model("Game", gameSchema);

module.exports = Game;