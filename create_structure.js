module.exports = function (){
	
	var room = Game.spawns.Spawn1.room;
	var controller = room.controller;
	
	if(controller.level == Memory.currentRoomLevel){
		return;
	}
	Memory.currentRoomLevel = controller.level;
	
	switch(controller.level){
	    case 1 : console.log('level 1'); plan_level_1(); break;
	    case 2 : console.log('level 2'); plan_level_2(); switchCreepRole('upgrader', 'builder'); break;
		default: ;
	}
	
	function plan_level_1(){
	    console.log('planning level 2..');
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
			
			// BUILD ROADS
			if(Memory.sources[sources[i].id].CREEP_LIMIT_REACHED && numberOfRoads < roadLimit){
			    console.log('..build roads..');
			    var listConstructionSiteIds = [];
				for(var j in path){
					//Create construction site
					room.createConstructionSite(path[j].x, path[j].y, STRUCTURE_ROAD);
					var constructionSite = room.lookForAt('constructionSite', path[j].x, path[j].y);
					if(constructionSite.length) {
					    console.log('construction id:' + constructionSite[0].id);
					    listConstructionSiteIds.push(constructionSite[0].id);
					}
				}
				
				console.log('..construction ids..' + listConstructionSiteIds);
				var listConstructionSiteIds2 = room.find(FIND_MY_CONSTRUCTION_SITES);
				console.log('..constuction 2' + listConstructionSiteIds2);
				var creeps = sources[i].getCreeps();
				for(var k in creeps){
				    creeps[k].memory.constructionlist = listConstructionSiteIds;
					console.log('....for creep.. ' + creeps[k].id + '..constructionlist..' + creeps[k].memory.constructionlist);
				}
				
				numberOfRoads = numberOfRoads + 1;
			} else {
				// CREATE EXTEnSIon points
			    //console.log('..create extentions..');
				//var halfWay = Math.ceil(path.length/2);
				//room.createConstructionSite(path[halfWay].x, path[halfWay].y, STRUCTURE_EXTENSION);
				//console.log(room.lookForAt('constructionSite', path[halfWay].x, path[halfWay].y));
				return;
				
			}
    	}
	}
	
	function plan_roads(){
		
	}
	
	function plan_extensions(){
		
	}
	
	function switchCreepRole(roleX, roleY){
		
		var upgraders = room.find(FIND_CREEPS, {filter : {memory : { role: roleX}}});
		for (var i in upgraders){
			upgraders[i].memory.role = roleY;
		}
		
	}
	
	function plan_level_2(){
	    
	}
	

}