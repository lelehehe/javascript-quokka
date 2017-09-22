/*

https://blog.pragmatists.com/top-10-es6-features-by-example-80ac878794bb

*/


//2. Array helper functions
var colors = ['red', 'green', 'blue']

function print(val) {
    console.log(val)
}

colors.forEach(print);

function capitalize(val) {
    return val.toUpperCase()
}

var capitalizedColors = colors.map(capitalize)

console.log(capitalizedColors);

var values = [1, 60, 34, 30, 20, 5]

function lessThan20(val) {
    return val < 20
}

var valuesLessThan20 = values.filter(lessThan20)

console.log(valuesLessThan20);

var people = [{
        name: 'Jack',
        age: 50
    },
    {
        name: 'Michael',
        age: 9
    },
    {
        name: 'John',
        age: 40
    },
    {
        name: 'Ann',
        age: 19
    },
    {
        name: 'Elisabeth',
        age: 16
    }
]

function teenager(person) {
    return person.age > 10 && person.age < 20
}

var firstTeenager = people.find(teenager)

console.log('First found teenager:', firstTeenager.name);

var array = [1, 2, 3, 4]

function sum(acc, value) {
    return acc + value
}

function product(acc, value) {
    return acc * value
}

var sumOfArrayElements = array.reduce(sum, 0);
var productOfArrayElements = array.reduce(product, 1);

console.log('Sum of', array, 'is', sumOfArrayElements);
console.log('Product of', array, 'is', productOfArrayElements);

//3. Arrow functions
const arrowsum = (acc, value) => acc + value;
const arrowproduct = (acc, value) => acc * value;

var sumOfArrayElements = array.reduce(arrowsum, 0);
var productOfArrayElements = array.reduce(arrowproduct, 1);
sumOfArrayElements;

//Arrow functions can also be inline. It really simplifies the code:
var sumOfArrayElements = array.reduce((acc, value) => acc + value, 0);
var productOfArrayElements = array.reduce((acc, value) => acc * value, 1);

//Arrow functions can also be more complex and have many lines of code:
const complexSum = (acc, value) => {
    const result = acc + value
    console.log(acc, ' plus ', value, ' is ', result)
    return result
  }
  
  var sumOfArrayElements = array.reduce(complexSum, 0)
