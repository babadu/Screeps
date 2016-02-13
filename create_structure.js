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
		default: ;
	}
	
	function plan_level_2(){
		var numberOfRoads = 0;
		var roadLimit = Memory.currentRoomLevel;
	    //Spawn position
    	var pos_Spawn1 = Game.spawns.Spawn1.pos;
    	//Get Energy Sources
    	var sources = room.find(FIND_SOURCES);
    	for(var i in sources){
			if(Memory.sources[sources[i].id].CREEP_LIMIT_REACHED && numberOfRoads <= roadLimit){
				var listConstructionSiteIds = [];
				var pos_source = sources[i].pos;
				//Find Shortest Path to a source
				var path = room.findPath(pos_Spawn1, pos_source);
				for(var j in path){
					//Create construction site
					room.createConstructionSite(path[j].x, path[j].y, STRUCTURE_ROAD);
					var constructionSite = room.lookForAt(CONSTRUCTION_SITE, path[j].x, path[j].y);
					listConstructionSiteIds.push(constructionSite.id);
				}
				var creeps = sources[i].getCreeps();
				for(var k in creeps){
					creeps[k].memory.constructionlist = listConstructionSiteIds;
				}
				numberOfRoads = numberOfRoads + 1;
			} else {
				return;
			}
    	}
	}
	
	function plan_level_1(){
	    
	}
	

}