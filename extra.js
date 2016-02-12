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