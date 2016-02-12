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
	    if(Memory.currentRoomLevel == 2 && !Memory.sources[creep.memory.target].ROAD_TO_SPAWN){
    	    var nearestRoad = creep.findNearestConstructionSite();
    	    if(nearestRoad != null){
    	        creep.memory.workmode = 'build';
    		    if(creep.build(nearestRoad) == ERR_NOT_IN_RANGE){
    		        creep.moveTo(nearestRoad);
    		    }
				if(nearestRoad == 'ROAD_COMPLETE'){
					Memory.sources[creep.memory.target].ROAD_TO_SPAWN = true;
				}
    	    }
	    } else if(creep.transfer(Game.spawns.Spawn1, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
	        creep.moveTo(Game.spawns.Spawn1);
	    }			
	}
}