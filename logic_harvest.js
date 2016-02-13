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
		if(creep.memory.constructionlist != null && creep.memory.constructionlist.length != 0){
			var constructionSite = room.lookForAt('constructionSite', constructionlist[0].x, constructionlist[0].y);
			//var nextConstructionSite = Game.getObjectById(creep.memory.constructionlist[0]);
			//console.log('creep name:' + creep.name);
			if(constructionSite == null){
			    //console.log('construction list:' + creep.memory.constructionlist instanceof Array);
			    if(creep.memory.constructionlist.length == 1){
			        creep.memory.constructionlist = null;
			    } else {
			        creep.memory.constructionlist = creep.memory.constructionlist.splice(0,1);
			    }
				creep.memory.constructionlist == null ? Memory.sources[creep.memory.target].ROAD_TO_SPAWN = true : false;
			} else {
				creep.memory.workmode = 'build';
				if(creep.build(constructionSite) == ERR_NOT_IN_RANGE){
    		        creep.moveTo(constructionSite);
    		    }
			}
	    } else if(creep.transfer(Game.spawns.Spawn1, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
	        creep.moveTo(Game.spawns.Spawn1);
	    }			
	}
}