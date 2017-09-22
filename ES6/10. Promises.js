/*
Promise promises (yes, I know it sounds weird) that you would get in future results of deferred or 
long-running tasks. Promise has two channels: the first for results, the second for potential errors. 
To get the result, you provide the callback function as the ‘then’ function parameter. To handle 
errors, you provide the callback function as the ‘catch’ function parameter.

Please notice that output of the example might differ for each execution, because of random function call.
*/


function asyncFunc() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const result = Math.random();
            result > 0.5 ? resolve(result) : reject('Oppps....I cannot calculate ' + result)
        }, 1)
    });
}

for (let i = 0; i < 3; i++) {
    asyncFunc()
        .then(result => console.log('Result is: ' + result))
        .catch(result => console.log('Error: ' + result))
}