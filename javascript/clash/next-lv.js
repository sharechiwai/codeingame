// In order to update your level on codingame, you need to gain xp: (LEVEL ^ 1.5) * 10 rounded down to reach the level LEVEL.
// You should give the xp amount needed to reach the next level and the amount of xp already earned just after the level up.
function currentLv(level){
  return Math.floor(level * 1.5) * 10;
}

function next(level){
  return Math.floor((level+1) * 1.5) * 10;
}

function xpNeeded(level){
  
  return next(level) - currentLv(level);
}

function test(level){
  let result = 0;
  for(var i = 1; i <= level; i++){
    result = result + (Math.floor((i) * 1.5) * 10);
  }
  return result;
}



console.log(test(1));