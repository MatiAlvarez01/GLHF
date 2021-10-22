const { Router } = require("express");
const axios = require("axios");
const urls = require("../../urls");
const Summoner = require("../../models/summoner/summoner");
const Game = require("../../models/game/game");
const Champion = require("../../models/champion/champion");
require("dotenv").config()
const router = Router()

router.get("/all", (req, res, next) => {
    console.log("Buscando todos los Summoners...")
    Summoner.find({})
        .then((response) => {
            console.log("Encontrados y devueltos!")
            return res.status(200).send(response)
        })
        .catch((err) => {
            console.log("Hubo un error");
            return next(err)
        })
})

// router.post("/summonerName", (req, res, next) => {
//     const { summonerName } = req.body;
//     console.log(`${urls.SUMMONERv4}/${summonerName}?api_key=${process.env.APIKEY}`)
//     axios.get(`${urls.SUMMONERv4}/${summonerName}?api_key=${process.env.APIKEY}`)
//         .then(async(response) => {
//             const summonerCheck = await Summoner.findOne({ summonerId: response.data.id }).populate("games")
//             if (!summonerCheck) {
//                 console.log("Summoner nuevo!");
//                 const newSummoner = new Summoner({});
//                 newSummoner.summonerId = response.data.id;
//                 newSummoner.accountId = response.data.accountId;
//                 newSummoner.puuId = response.data.puuid;
//                 newSummoner.name = response.data.name;
//                 newSummoner.profileIconId = response.data.profileIconId;
//                 newSummoner.summonerLevel = response.data.summonerLevel;
//                 //await newSummoner.save();
//                 console.log(`Summoner ${newSummoner.name} creado en la database!`);
//                 console.log(`Guardando games para ${newSummoner.name}...`);
//                 console.log(`${urls.MATCHv5PUUID}/${newSummoner.puuId}/ids?start=0&count=20&api_key=${process.env.APIKEY}`)
//                 await axios.get(`${urls.MATCHv5PUUID}/${newSummoner.puuId}/ids?start=0&count=20&api_key=${process.env.APIKEY}`)
//                     .then(async(response2) => {
//                         response2.data.forEach(async(matchId) => {
//                             const gameCheck = await Game.findOne({ matchId: matchId });
//                             if (!gameCheck) {
//                                 console.log(`Game ${matchId} no existe! Creando...`)
//                                 await axios.get(`${urls.MATCHv5MATCHID}/${matchId}?api_key=${process.env.APIKEY}`)
//                                     .then(async(response3) => {
//                                         const newGame = new Game({})
//                                         newGame.matchId = matchId;
//                                         newGame.participantsIds = response3.data.metadata.participants;
//                                         newGame.participantsStats = response3.data.info.participants;
//                                         newGame.gameDate = response3.data.info.gameCreation;
//                                         newGame.gameDuration = response3.data.info.gameDuration;
//                                         newGame.gameMode = response3.data.info.queueId;
//                                         newGame.gameVersion = response3.data.info.gameVersion;
//                                         newGame.teams = response3.data.info.teams;
//                                         await console.log(`Game ${newGame.matchId} guardado en la database!`)
//                                         await console.log(`Añadiendo game a ${newSummoner.name}...`)
//                                         await newSummoner.games.push(newGame._id)
//                                         await newGame.save();
//                                         //await newSummoner.save();
//                                     })
//                                     .catch((err) => {
//                                         console.log("ERROR MATCHv5MATCHID");
//                                         return next(err)
//                                     })
//                             } else {
//                                 console.log(`Game ${matchId} ya existe en la DB!`)
//                                 console.log(`Verificando que ${newSummoner.name} no posea ese game...`)
//                                 if (newSummoner.games.some(game => game._id.toString() === gameCheck._id.toString())) {
//                                     console.log(`${matchId} ya existe en el usuario. Siguiente match.`)
//                                 } else {
//                                     console.log(`${matchId} no existe en el usuario. Agregando...`)
//                                     await newSummoner.games.push(gameCheck._id);
//                                     //await newSummoner.save();
//                                     console.log("Listo!")
//                                 }
//                             }
//                         })
//                         await newSummoner.save();
//                     })
//                     .catch((err) => {
//                         console.log("ERROR MATCHv5PUUID");
//                         return next(err)
//                     })
//                 console.log("Listo!")
//                 console.log(`Guardando champions para ${newSummoner.name}...`);
//                 console.log(`${urls.CHAMPIONMASTERYv4}/${newSummoner.summonerId}?api_key=${process.env.APIKEY}`)
//                 await axios.get(`${urls.CHAMPIONMASTERYv4}/${newSummoner.summonerId}?api_key=${process.env.APIKEY}`)
//                     .then(async(response4) => {
//                         newSummoner.champions = response4.data;
//                         await newSummoner.save();
//                     })
//                     .catch((err) =>{
//                         console.log("ERROR CHAMPIONMASTERYv4");
//                         return next(err)
//                     })
//                 console.log("Listo! Devolviendo summoner info")
//                 return res.status(200).send(newSummoner);
//             } else {
//                 console.log(`Summoner ${summonerCheck.name} ya existe en la database!`);
//                 console.log("Actualizando games y champions...");
//                 console.log(`${urls.MATCHv5PUUID}/${summonerCheck.puuId}/ids?start=0&count=20&api_key=${process.env.APIKEY}`)
//                 await axios.get(`${urls.MATCHv5PUUID}/${summonerCheck.puuId}/ids?start=0&count=20&api_key=${process.env.APIKEY}`)
//                 .then(async(response2) => {
//                     response2.data.forEach(async(matchId) => {
//                         const gameCheck = await Game.findOne({ matchId: matchId });
//                         if (!gameCheck) {
//                             console.log(`Game ${matchId} no existe! Creando...`)
//                             await axios.get(`${urls.MATCHv5MATCHID}/${matchId}?api_key=${process.env.APIKEY}`)
//                                 .then(async(response3) => {
//                                     const newGame = new Game({})
//                                     newGame.matchId = matchId;
//                                     newGame.participantsIds = response3.data.metadata.participants;
//                                     newGame.participantsStats = response3.data.info.participants;
//                                     newGame.gameDate = response3.data.info.gameCreation;
//                                     newGame.gameDuration = response3.data.info.gameDuration;
//                                     newGame.gameMode = response3.data.info.queueId;
//                                     newGame.gameVersion = response3.data.info.gameVersion;
//                                     newGame.teams = response3.data.info.teams;
//                                     console.log(`Game ${newGame._id} guardado en la database!`)
//                                     console.log(`Añadiendo game a ${summonerCheck.name}...`)
//                                     await summonerCheck.games.push(newGame._id)
//                                     await newGame.save();
//                                     //await summonerCheck.save();
//                                     console.log("Listo!")
//                                 })
//                                 .catch((err) => {
//                                     console.log("ERROR MATCHv5MATCHID");
//                                     return next(err)
//                                 })
//                         } else {
//                             console.log(`Game ${matchId} ya existe en la DB!`)
//                             console.log(`Verificando que ${summonerCheck.name} no posea ese game...`)
//                             if (summonerCheck.games.some(game => game._id.toString() === gameCheck._id.toString())) {
//                                 console.log(`${matchId} ya existe en el usuario. Siguiente match.`)
//                             } else {
//                                 console.log(`${matchId} no existe en el usuario. Agregando...`)
//                                 await summonerCheck.games.push(gameCheck._id);
//                                 //await summonerCheck.save();
//                                 console.log("Listo!")
//                             }
//                         }
//                     })
//                     await summonerCheck.save()
//                 })
//                 .catch((err) => {
//                     console.log("ERROR MATCHv5PUUID");
//                     return next(err)
//                 })
//                 console.log(`${urls.CHAMPIONMASTERYv4}/${summonerCheck.summonerId}?api_key=${process.env.APIKEY}`)
//                 await axios.get(`${urls.CHAMPIONMASTERYv4}/${summonerCheck.summonerId}?api_key=${process.env.APIKEY}`)
//                 .then(async(response4) => {
//                         summonerCheck.champions = response4.data;
//                         //await summonerCheck.save();
//                 })
//                 .catch((err) =>{
//                         console.log("ERROR CHAMPIONMASTERYv4");
//                         return next(err)
//                 })
//                 console.log("Listo!")
//                 console.log("Listo! Devolviendo summoner info");
//                 await summonerCheck.save()
//                 return res.status(200).send(summonerCheck);
//             }
//         })
//         .catch((err) => {
//             console.log("ERROR CHAMPIONMASTERYv4")
//             return next(err)
//         })
// })

router.post("/summonerName", async(req, res, next) => {
    const { summonerName } = req.body;
    const summoner = await Summoner.findOne({ name: summonerName}).populate("games")
    if(summoner) {
        return res.status(200).send(summoner)
    }
    console.log(`${urls.SUMMONERv4}/${summonerName}?api_key=${process.env.APIKEY}`)
    axios.get(`${urls.SUMMONERv4}/${summonerName}?api_key=${process.env.APIKEY}`)
        .then(async(response) => {
            const summonerCheck = await Summoner.findOne({ summonerId: response.data.id }).populate("games")
            if (!summonerCheck) {
                console.log("Summoner nuevo!");
                const newSummoner = new Summoner({});
                newSummoner.summonerId = response.data.id;
                newSummoner.accountId = response.data.accountId;
                newSummoner.puuId = response.data.puuid;
                newSummoner.name = response.data.name;
                newSummoner.profileIconId = response.data.profileIconId;
                newSummoner.summonerLevel = response.data.summonerLevel;
                //await newSummoner.save();
                console.log(`Summoner ${newSummoner.name} creado en la database!`);
                console.log(`Guardando games para ${newSummoner.name}...`);
                console.log(`${urls.MATCHv5PUUID}/${newSummoner.puuId}/ids?start=0&count=100&api_key=${process.env.APIKEY}`)
                await axios.get(`${urls.MATCHv5PUUID}/${newSummoner.puuId}/ids?start=0&count=100&api_key=${process.env.APIKEY}`)
                    .then(async(response2) => {
                        response2.data.forEach(async(matchId) => {
                            const gameCheck = await Game.findOne({ matchId: matchId });
                            if (!gameCheck) {
                                console.log(`Game ${matchId} no existe! Creando...`)
                                await axios.get(`${urls.MATCHv5MATCHID}/${matchId}?api_key=${process.env.APIKEY}`)
                                    .then(async(response3) => {
                                        const newGame = new Game({})
                                        newGame.matchId = matchId;
                                        newGame.participantsIds = response3.data.metadata.participants;
                                        newGame.participantsStats = response3.data.info.participants;
                                        newGame.gameDate = response3.data.info.gameCreation;
                                        newGame.gameDuration = response3.data.info.gameDuration;
                                        newGame.gameMode = response3.data.info.queueId;
                                        newGame.gameVersion = response3.data.info.gameVersion;
                                        newGame.teams = response3.data.info.teams;
                                        await console.log(`Game ${newGame.matchId} guardado en la database!`)
                                        await console.log(`Añadiendo game a ${newSummoner.name}...`)
                                        await newSummoner.games.push(newGame._id)
                                        await newGame.save();
                                        //await newSummoner.save();
                                    })
                                    .catch((err) => {
                                        console.log("ERROR MATCHv5MATCHID");
                                        return next(err)
                                    })
                            } else {
                                console.log(`Game ${matchId} ya existe en la DB!`)
                                console.log(`Verificando que ${newSummoner.name} no posea ese game...`)
                                if (newSummoner.games.some(game => game._id.toString() === gameCheck._id.toString())) {
                                    console.log(`${matchId} ya existe en el usuario. Siguiente match.`)
                                } else {
                                    console.log(`${matchId} no existe en el usuario. Agregando...`)
                                    await newSummoner.games.push(gameCheck._id);
                                    //await newSummoner.save();
                                    console.log("Listo!")
                                }
                            }
                        })
                        await newSummoner.save();
                    })
                    .catch((err) => {
                        console.log("ERROR MATCHv5PUUID");
                        return next(err)
                    })
                console.log("Listo!")
                console.log(`Guardando champions para ${newSummoner.name}...`);
                console.log(`${urls.CHAMPIONMASTERYv4}/${newSummoner.summonerId}?api_key=${process.env.APIKEY}`)
                await axios.get(`${urls.CHAMPIONMASTERYv4}/${newSummoner.summonerId}?api_key=${process.env.APIKEY}`)
                    .then(async(response4) => {
                        newSummoner.champions = response4.data;
                        await newSummoner.save();
                    })
                    .catch((err) =>{
                        console.log("ERROR CHAMPIONMASTERYv4");
                        return next(err)
                    })
                console.log("Listo! Devolviendo summoner info")
                const resSummoner = await Summoner.findOne({name: newSummoner.name}).populate("games")
                return res.status(200).send(resSummoner);
            } else {
                console.log(`Summoner ${summonerCheck.name} ya existe en la database!`);
                return res.status(200).send(summonerCheck);
            }
        })
        .catch((err) => {
            console.log("ERROR CHAMPIONMASTERYv4")
            return next(err)
        })
})

router.post("/summonerName/act", async(req, res, next) => {
    const { summonerName } = req.body;
    const summoner = await Summoner.findOne({ name: summonerName }).populate("games")
    console.log("Actualizando games y champions...");
    console.log(`${urls.MATCHv5PUUID}/${summoner.puuId}/ids?start=0&count=100&api_key=${process.env.APIKEY}`)
    await axios.get(`${urls.MATCHv5PUUID}/${summoner.puuId}/ids?start=0&count=100&api_key=${process.env.APIKEY}`)
        .then(async(response2) => {
            response2.data.forEach(async(matchId) => {
                const gameCheck = await Game.findOne({ matchId: matchId });
                if (!gameCheck) {
                    console.log(`Game ${matchId} no existe! Creando...`)
                    await axios.get(`${urls.MATCHv5MATCHID}/${matchId}?api_key=${process.env.APIKEY}`)
                        .then(async(response3) => {
                            const newGame = new Game({})
                            newGame.matchId = matchId;
                            newGame.participantsIds = response3.data.metadata.participants;
                            newGame.participantsStats = response3.data.info.participants;
                            newGame.gameDate = response3.data.info.gameCreation;
                            newGame.gameDuration = response3.data.info.gameDuration;
                            newGame.gameMode = response3.data.info.queueId;
                            newGame.gameVersion = response3.data.info.gameVersion;
                            newGame.teams = response3.data.info.teams;
                            console.log(`Game ${newGame._id} guardado en la database!`)
                            console.log(`Añadiendo game a ${summoner.name}...`)
                            await summoner.games.unshift(newGame._id)
                            await newGame.save();
                            //await summoner.save();
                            console.log("Listo!")
                        })
                        .catch((err) => {
                            console.log("ERROR MATCHv5MATCHID");
                            return next(err)
                        })
                } else {
                    console.log(`Game ${matchId} ya existe en la DB!`)
                    console.log(`Verificando que ${summoner.name} no posea ese game...`)
                    if (summoner.games.some(game => game._id.toString() === gameCheck._id.toString())) {
                        console.log(`${matchId} ya existe en el usuario. Siguiente match.`)
                    } else {
                        console.log(`${matchId} no existe en el usuario. Agregando...`)
                        await summoner.games.unshift(gameCheck._id);
                        //await summoner.save();
                        console.log("Listo!")
                    }
                }
            })
            await summoner.save()
        })
        .catch((err) => {
            console.log("ERROR MATCHv5PUUID");
            return next(err)
        })
        console.log(`${urls.CHAMPIONMASTERYv4}/${summoner.summonerId}?api_key=${process.env.APIKEY}`)
        await axios.get(`${urls.CHAMPIONMASTERYv4}/${summoner.summonerId}?api_key=${process.env.APIKEY}`)
        .then(async(response4) => {
                summoner.champions = response4.data;
                //await summoner.save();
        })
        .catch((err) =>{
                console.log("ERROR CHAMPIONMASTERYv4");
                return next(err)
        })
        console.log("Listo!")
        console.log("Listo! Devolviendo summoner info");
        await summoner.save()
        const summoner2 = await Summoner.findOne({ name: summonerName }).populate("games")
        return res.status(200).send(summoner2);
})
module.exports = router;