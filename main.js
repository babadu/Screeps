var toHarvest = require('logic_harvest');
var toBuild = require('logic_build');
var toGuard = require('logic_guard');
var toUpgrade = require('logic_upgrade');
var createCreeps = require('create_creep');
var initialize = require('game_initialize');
var ext_Creep = require('ext_Creep');
var ext_Source = require('ext_Source');
var ext_Spawn = require('ext_Spawn');
var planRoad = require('create_structure');

module.exports.loop = function () {

    initialize();
    createCreeps();
    //planRoad();
	for(var name in Game.creeps) {
	    
		var creep = Game.creeps[name];

		if(creep.memory.role == 'harvester') {
		    toHarvest(creep);
		}

		if(creep.memory.role == 'builder') {
		    toBuild(creep);
		}
        
        if(creep.memory.role == 'guard') {
            toGuard(creep);
        }
        if(creep.memory.role == 'upgrader') {
            toUpgrade(creep);
        }
	}
}