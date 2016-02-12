module.exports = function (){
	
	var room = Game.spawns.Spawn1.room;
	var controller = room.controller;
	
	if(controller.level == Memory.currentRoomLevel){
		return;
	}
	Memory.currentRoomLevel = controller.level;
	
	switch(controller.level){
	    case 1 : console.log('level 1'); plan_level_1(); break;
	    case 2 : console.log('level 2'); plan_level_2(); break;
	}
	
	function plan_level_2(){
	    //Spawn position
    	var pos_Spawn1 = Game.spawns.Spawn1.pos;
    	//Get Energy Sources
    	var sources = room.find(FIND_SOURCES);
    	for(var j in sources){
			if(Memory.sources[sources[j].id].CREEP_LIMIT_REACHED){
				var pos_source = sources[j].pos;
				//Find Shortest Path to a source
				var path = room.findPath(pos_Spawn1, pos_source);
				for(var k in path){
					//Create construction site
					room.createConstructionSite(path[k].x, path[k].y, STRUCTURE_ROAD);
				}
			}
    	}
	}
	
	function plan_level_1(){
	    
	}
	

}