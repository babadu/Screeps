module.exports = function(debugMode){

    Memory.debug = false;    
    debugMode ? Memory.debug = true : Memory.debug = false;
        
    if(Memory.initialize){
        return;
    }
	
	//INITIALIZE SOURCES
    Memory.sources = {};
    var sources = Game.rooms["sim"].find(FIND_SOURCES);
    for(var i in sources){
        sources[i].initialize();
    }
    
	//INITIALIZE LIMITS
	Memory.limits = {};
	Memory.limits.POPULATION_LIMIT 	= 30;
	Memory.limits.HARVESTER_LIMIT	= 14;
	Memory.limits.BUILDER_LIMIT		= 8;
	Memory.limits.GUARD_LIMIT		= 4;
	Memory.limits.UPGRADER_LIMIT	= 4;
	
	//Set initialize flag to true
    Memory.initialize = true;
}