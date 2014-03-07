function duckCount() {
  // My solution, which sucks
  // var potentialDucks = arguments;
  // return (function duckTrap(index, amount){
  //   if(!potentialDucks[index]) return amount;
  //   if(Object.prototype.hasOwnProperty.call(potentialDucks[index], 'quack')){
  //     return duckTrap(++index, ++amount);
  //   } else {
  //     return duckTrap(++index, amount);
  //   }
  // })(0, 0);
  return Array.prototype.slice.call(arguments).filter(function(obj) {
    return Object.prototype.hasOwnProperty.call(obj, 'quack');
  }).length;
}

module.exports = duckCount;
