module.exports = function(creep){
    
    Memory.debug ? console.log(creep.id + " is harvesting") : false;
	if(creep.carry.energy == 0){
		creep.memory.workmode = 'harvest';
	}
	if(creep.carry.energy < creep.carryCapacity && creep.memory.workmode == 'harvest') {
		var aSource = Game.getObjectById(creep.memory.target);
        if(creep.harvest(aSource) == ERR_NOT_IN_RANGE) {
	        creep.moveTo(aSource);
        }
	} else {
		if(creep.memory.constructionlist != null){
			build_road_to_spawn(creep);
	    } else if(creep.transfer(Game.spawns.Spawn1, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
	        creep.moveTo(Game.spawns.Spawn1);
	    }			
	}
}

function build_road_to_spawn(creep){
	
	var i = creep.memory.constructionIndex;
	var constructionSite = creep.room.lookForAt('constructionSite', creep.memory.constructionlist[i].x, creep.memory.constructionlist[i].y);
	var nextConstructionSite = constructionSite[0];
	console.log('creep name:' + creep.name + '..construction site:' + nextConstructionSite);
	if(nextConstructionSite == null || nextConstructionSite == undefined){
	    creep.memory.constructionIndex = creep.memory.constructionIndex - 1;
		console.log('construction list:' + creep.memory.constructionlist + 'construction index : ' + creep.memory.constructionIndex);
		if(creep.memory.constructionIndex == 0){
		    creep.memory.constructionlist = null;
		    Memory.sources[creep.memory.target].ROAD_TO_SPAWN = true;
		}
	} else {
		creep.memory.workmode = 'build';
		if(creep.build(nextConstructionSite) == ERR_NOT_IN_RANGE){
			creep.moveTo(nextConstructionSite);
		}
	}
}