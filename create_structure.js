module.exports = function (){
	
	var room = Game.spawns.Spawn1.room;
	var controller = room.controller;
	
	if(controller.level == Memory.currentRoomLevel){
		return;
	}
	Memory.currentRoomLevel = 0;
	
	switch(controller.level){
	    case 1 : plan_level_1(); break;
	    case 2 : plan_level_2(); switchCreepRole('upgrader', 'builder'); break;
		default: ;
	}
	
	function plan_level_2(){
	    console.log('level 2');
		var numberOfRoads = 0;
		var roadLimit = Memory.currentRoomLevel;
	    //Spawn position
    	var pos_Spawn1 = Game.spawns.Spawn1.pos;
    	//Get Energy Sources
    	var sources = room.find(FIND_SOURCES);
    	for(var i in sources){
			var pos_source = sources[i].pos;
			//Find Shortest Path to a source
			var path = room.findPath(pos_Spawn1, pos_source, {ignoreCreeps:true});
			//console.log('for source..' + sources[i].id + 'pos_Spwan1 : ' + pos_Spawn1 + 'pos_source : ' + pos_source + 'path : ' + path);
			
			if(numberOfRoads < roadLimit){
				// BUILD ROADS
			    console.log('..build roads..');
			    plan_roads(path);
				var creeps = sources[i].getCreeps('harvester');
				add_path_to_creeps(creeps, path);
                numberOfRoads = numberOfRoads + 1;
			} else {
				// CREATE EXTEnSIon points
				plan_extensions(path);
				return; // Create only one!
			}
    	}
	}
	
	function plan_roads(path){
		for(var i in path){
			//Create road construction site
			room.createConstructionSite(path[i].x, path[i].y, STRUCTURE_ROAD);
		}
	}
	
	function plan_extensions(path){
		
		//console.log('..create extentions..');
		var halfWay = Math.ceil(path.length/2);
		room.createConstructionSite(path[halfWay].x, path[halfWay].y, STRUCTURE_EXTENSION);
	}
	
	function add_path_to_creeps(creeps, path){
		for(var i in creeps){
		    creeps[i].memory.constructionlist = path;
			console.log('....for creep.. ' + creeps[i].id + '..constructionlist..' + creeps[i].memory.constructionlist);
		}
	}
	
	function switchCreepRole(roleX, roleY){
		
		var upgraders = room.find(FIND_CREEPS, {filter : {memory : { role: roleX}}});
		for (var i in upgraders){
			upgraders[i].memory.role = roleY;
		}
		
	}
	
	function plan_level_1(){
	    console.log('level 1');
	}
	

}