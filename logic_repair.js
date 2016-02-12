module.exports = function(creep){
    
	var nearestRepairSite = creep.findNearestRepairSite();
	if(creep.repair(nearestRepairSite) == ERR_NOT_IN_RANGE) {
		creep.moveTo(nearestRepairSite);    
	}
}