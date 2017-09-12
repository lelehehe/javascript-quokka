/*
  1. base function as a template
*/
var attitude = function (original, replacement, source) {
  return function (source) {
    return source.replace(original, replacement);
  };
};

var snakify = attitude(/millenials/ig, "Snake People");
var hippify = attitude(/baby boomers/ig, "Aging Hippies");

console.log(snakify("The Millenials are always up to something."));
console.log(hippify("The Baby Boomers just look the other way."));


/* 
  2. function variable as arguments
*/
var increment = function (n) {
  return n + 1;
};
var square = function (n) {
  return n * n;
};
var doMath = function(n, func) {
  return func(n);
}
var result = doMath(5, square);
result;
result = doMath(5, increment);
result;

