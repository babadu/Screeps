//TODO : Add debug mode
Spawn.prototype.harvesterCount;
Spawn.prototype.BuilderCount;
Spawn.prototype.GuardCount;
Spawn.prototype.UpgraderCount;

Spawn.prototype.initialize = function(){
    
	this.harvesterCount = this.getCount('harvester');
	this.BuilderCount = this.getCount('builder');
	this.GuardCount = this.getCount('guard');
	this.UpgraderCount = this.getCount('upgrader');
}

Spawn.prototype.createCreeps = function(){  
	//TODO: This needs optimization
	//TODO: For every x role : A, create y role : B
	this.initialize();
	
	if(this.harvesterCount < Memory.limits.HARVESTER_LIMIT){
		this.createHarvesterCreep();
		return;
	}
	if(this.BuilderCount < Memory.limits.BUILDER_LIMIT){
		this.createBuilderCreep();
		return;
	}
	if(this.GuardCount < Memory.limits.GUARD_LIMIT){
		this.createGuardCreep();
		return;
	}
	if(this.UpgraderCount < Memory.limits.UPGRADER_LIMIT){
		this.createUpgradeCreep();
		return;
	}
}

Spawn.prototype.findNextAvailableSource = function(){
    
    var sources = Memory.sources;
    //console.log(sources);
    for(var i in sources){
		if(!sources[i].CREEP_LIMIT_REACHED){
			var currentCount = this.getHarvesterCountPerSource(i);
			var sourceLimit = sources[i].CREEP_LIMIT;
			//console.log("current : " + currentCount + "..sourceLimit.." + xSourceLimit);
			if(currentCount < sourceLimit){
				return i;
			}
			if(currentCount == sourceLimit){
				Memory.sources[i].CREEP_LIMIT_REACHED = true;
			}
		}
    }
}

Spawn.prototype.createHarvesterCreep = function(){
    
    Memory.debug ? console.log("create harvester..") : false;
	var nextSourceId = this.findNextAvailableSource();
    Memory.debug? console.log("next source.." + nextSourceId) : false;
	var newCreep = this.createCreep([WORK,CARRY,MOVE], null, {role:'harvester', target: nextSourceId, workmode: 'harvest'});
    if(_.isString(newCreep)){
	    return newCreep;
	}
}

Spawn.prototype.createBuilderCreep = function(){
    
	var newCreep = this.createCreep([WORK,CARRY,MOVE], null, {role:'builder'});
	if(_.isString(newCreep)){
		return newCreep;
	}
}

Spawn.prototype.createGuardCreep = function(){
    
	var newCreep = this.createCreep([WORK,CARRY,MOVE], null, {role:'guard'});
	if(_.isString(newCreep)){
		return newCreep;
	}
}

Spawn.prototype.createUpgradeCreep = function(){
    
	var newCreep = this.createCreep([WORK,CARRY,MOVE], null, {role:'upgrader'});
	if(_.isString(newCreep)){
		return newCreep;
	}
}

Spawn.prototype.getCount = function(roleX){
    
    var creepX = this.room.find(FIND_MY_CREEPS, {filter : {memory : { role: roleX } } });
    return creepX.length;
}

Spawn.prototype.getHarvesterCountPerSource = function(aSource){
	
	var creepX = this.room.find(FIND_MY_CREEPS, {filter : {memory : { role: 'harvester' , target : aSource} } });
	return creepX.length;
}
