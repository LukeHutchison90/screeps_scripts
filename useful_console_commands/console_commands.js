//spawn a fatty

Game.spawns['Spawn1'].spawnCreep( [WORK,WORK,WORK,WORK,CARRY,MOVE,MOVE],
    'HarvesterBig',
    { memory: { role: 'harvester' } } );

// spawn a tower
    Game.spawns['Spawn1'].room.createConstructionSite( 23, 22, STRUCTURE_TOWER );