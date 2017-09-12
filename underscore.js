//this is the place to practice underscore 
//most samples here are from 
//https://code.tutsplus.com/tutorials/getting-cozy-with-underscorejs--net-24581

var _ = require('underscore');


//map
var result = _.map([4, 2, 3], function(val) {
    return val + 3;
}); 
result;

//pluck
var Tuts = [{name : 'NetTuts', niche : 'Web Development'}, {name : 'WPTuts', niche : 'WordPress'}, {name : 'PSDTuts', niche : 'PhotoShop'}, {name : 'AeTuts', niche : 'After Effects'}];
var niches = _.pluck(Tuts, 'niche');
 
console.log(niches);

//uniq
var uniqOnly = _.uniq([1,5,4,4,5,2,1,1,3,2,2,3,4,1]);
uniqOnly;

//range
var tens = _.range(0, 100, 10);
tens;

//intersection
var tens = _.range(0, 100, 10), eights = _.range(0, 100, 8), fives = _.range(0, 100, 5);

var common = _.intersection(tens, eights, fives );
console.log(common);

