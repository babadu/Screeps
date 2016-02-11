module.exports = function (){
    
	if(Object.keys(Game.creeps).length >= Memory.limits.POPULATION_LIMIT ||
		Game.spawns.Spawn1.spawning != null ||
		Game.spawns.Spawn1.canCreateCreep([WORK,CARRY,MOVE]) == -6){
		return;
	}
	Game.spawns.Spawn1.createCreeps();
}