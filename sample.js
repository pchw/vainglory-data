var abilities, heros, vaingloryData;

vaingloryData = require('./index.js');

heros = vaingloryData.heros;
abilities = vaingloryData.abilities;

console.log(heros[0]);

/*
{ key: 'adagio', name: 'アダージオ' }
*/


console.log(abilities[0].key);

/*
adagio
*/
