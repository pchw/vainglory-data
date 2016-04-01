require('coffee-script/register');

module.exports = {
  heros: require(process.env.PWD + "/data/heros"),
  abilities: require(process.env.PWD + "/data/abilities")
};