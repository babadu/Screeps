Source.prototype.updatedCreepLimit = function(){
	
	var inRangeCreeps = this.pos.findInRange(FIND_MY_CREEPS, 1);
	this.CREEP_LIMIT = this.CREEP_LIMIT - inRangeCreeps.length;
	//console.log("updated limit : " + this.CREEP_LIMIT);
}

Source.prototype.updateCreepCount = function(creep){
    //this.initialize();
    Memory.sources[this.id].CREEP_LIMIT = Memory.sources[this.id].CREEP_LIMIT - 1;
	Memory.sources[this.id].CREEP_LIMIT == 0 ? Memory.sources[this.id].CREEP_LIMIT_REACHED = true : Memory.sources[this.id].CREEP_LIMIT_REACHED = false;
	        
}

Repair
var targets = creep.room.find(FIND_STRUCTURES, {filter: object => object.hits < object.hitsMax});
targets.sort((a,b) => a.hits - b.hits);


					var constructionSite = room.lookForAt('constructionSite', path[j].x, path[j].y);
					console.log(constructionSite);
					if(constructionSite.length) {
					    console.log('construction id:' + constructionSite[0].id);
					    listConstructionSiteIds.push(constructionSite[0].id);
					}
					
					
							/*
		if(creep.memory.constructionlist.length == 1){
			creep.memory.constructionlist = null;
			creep.memory.constructionlist == null ? Memory.sources[creep.memory.target].ROAD_TO_SPAWN = true : false;
		} else {
			creep.memory.constructionlist = creep.memory.constructionlist.splice(0,1);
		}
		*/