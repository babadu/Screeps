Source.prototype.determineCreepLimit = function (){
    
    Memory.debug ? console.log(this.id + ":determineCreepLimit..") : false;
	var countSurroundingWalls = 0;

	var surroundings = [
		this.room.getPositionAt(this.pos.x - 1, this.pos.y - 1),
		this.room.getPositionAt(this.pos.x , this.pos.y - 1),
		this.room.getPositionAt(this.pos.x + 1, this.pos.y - 1),
		this.room.getPositionAt(this.pos.x + 1, this.pos.y ),
		this.room.getPositionAt(this.pos.x + 1, this.pos.y + 1),
		this.room.getPositionAt(this.pos.x , this.pos.y + 1),
		this.room.getPositionAt(this.pos.x - 1, this.pos.y + 1),
		this.room.getPositionAt(this.pos.x - 1, this.pos.y )
	];

	for(var i in surroundings){
		var terrainAtPos = surroundings[i].lookFor('terrain');
		if(terrainAtPos == "wall"){
			countSurroundingWalls = countSurroundingWalls + 1;
		}
	}
	
	var creeplimit = 8 - countSurroundingWalls;
	Memory.sources[this.id].CREEP_LIMIT = creeplimit;
}

Source.prototype.initialize = function(){
    Memory.debug ? console.log(this.id + ":initialize source..") : false;
    Memory.sources[this.id] = {CREEP_LIMIT: 0, CREEP_LIMIT_REACHED: false, ROAD_TO_SPAWN: false};
    this.determineCreepLimit();
}