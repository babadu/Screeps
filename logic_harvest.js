module.exports = function(creep){
    
    Memory.debug ? console.log(creep.id + " is harvesting") : false;
	if(creep.carry.energy < creep.carryCapacity) {
		var aSource = Game.getObjectById(creep.memory.target);
        if(creep.harvest(aSource) == ERR_NOT_IN_RANGE) {
	        creep.moveTo(aSource);
        }
	} else {
	    // Check 
	    if(creep.transfer(Game.spawns.Spawn1, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
	        creep.moveTo(Game.spawns.Spawn1);
	        //creep.room.createConstructionSite(creep.pos.x, creep.position.y, STRUCTURE_ROAD);
	    }			
	}
}