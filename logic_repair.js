module.exports = function(creep){
    
    var targets = creep.room.find(FIND_STRUCTURES, {filter: object => object.hits < object.hitsMax});
    
    targets.sort((a,b) => a.hits - b.hits);
    
    if(targets.length > 0) {
        if(creep.repair(targets[0]) == ERR_NOT_IN_RANGE) {
            creep.moveTo(targets[0]);    
        }
    }
}