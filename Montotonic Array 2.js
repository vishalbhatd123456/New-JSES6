function isMonotonic(array) {
  // Write your code here.

  if(array.length <= 2) return true; //assuming that there are no duplicates - ohh no i figured out this is wrong!

  let direction = array[1] - array[0]; //no chance of array exception here babe!

  for(let i = 2; i < array.length;i++)
  {
    
    if(direction == 0){ //non exclusive decreasing case or increasing case
      direction = array[i] - array[i-1];
      continue;
    }

    if(breaksDirection(direction, array[i-1], array[i])){
      return false;
      }
  }

    return true;
  }


  function breaksDirection( direction,  previousIdx,  currentIdx)
  {
    const difference = currentIdx-previousIdx;
    if(direction>0) return difference<0;
    else return difference>0;
  }


// Do not edit the line below.
exports.isMonotonic = isMonotonic;
