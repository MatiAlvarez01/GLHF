const urls = {
    SUMMONERv4: "https://la2.api.riotgames.com/lol/summoner/v4/summoners/by-name", //{summonerName}
    MATCHv5PUUID: "https://americas.api.riotgames.com/lol/match/v5/matches/by-puuid", //{puuid}/ids
    MATCHv5MATCHID: "https://americas.api.riotgames.com/lol/match/v5/matches", //{matchId},
    CHAMPIONMASTERYv4: "https://la2.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-summoner", //{encryptedSummonerId}
    APIKEY: "RGAPI-52435451-6a35-4189-b9f0-12b327cf3c52"
}

module.exports = urls;