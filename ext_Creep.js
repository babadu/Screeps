Creep.prototype.findNextAvailableSource = function(){
    
    var minPath = 10000;
    var closestSource;
    var sourcesX = this.room.find(FIND_SOURCES);
    //console.log("sources: " + sources);
    for(var i in sourcesX){
        if(!Memory.sources[sourcesX[i].id].CREEP_LIMIT_REACHED){
            var path = this.room.findPath(this.pos, sourcesX[i].pos);
            if(path.length < minPath){
                minPath = path.length;
                closestSource = sourcesX[i];
            }
        }
    }
    return closestSource;
}

Creep.prototype.findNearestConstructionSite = function(){
	var targets = creep.room.find(FIND_CONSTRUCTION_SITES);
	return targets[0];
}

Creep.prototype.findNearestRepairSite = function(){
	var targets = creep.room.find(FIND_STRUCTURES, {filter: object => object.hits < object.hitsMax});
	return targets[0];
}
