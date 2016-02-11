module.exports = function (){
	
	var room = Game.spawns.Spawn1.room;
	//Spawn position
	var pos_Spawn1 = Game.spawns.Spawn1.pos;
	//Get Energy Sources
	var sources = room.find(FIND_SOURCES);
	for(var j in sources){
		var pos_source = sources[j].pos;
		//Find Shortest Path to a source
		var path = room.findPath(pos_Spawn1, pos_source);
		for(var k in path){
			//Create construction site
			room.createConstructionSite(path[k].x, path[k].y, STRUCTURE_ROAD);
		}
	}
}