/* jshint ignore:start */
//https://www.youtube.com/watch?v=568g8hxJJp4
// Code here will be ignored by JSHint.
const fetch = require('node-fetch');

/* ================================================================
// old way using promise, when nested multiple times, it seems ugly
*/
function fetchCatAvatars(userId) {
  return fetch(`https://catappapi.herokuapp.com/users/${userId}`)
  .then(response => response.json())
  .then(user => {
    const promises = user.cats.map(catId => 
      fetch(`https://catappapi.herokuapp.com/cats/${catId}`)
      .then(response => response.json())
      .then(catData => catData.imageUrl)
      
    );
    return Promise.all(promises);
  });
}

const catAvatars = fetchCatAvatars(123);
catAvatars;

/* ================================================================
// new way using async/await
*/

async function fetchAvatarUrl(userId) {
  const response = await fetch(`https://catappapi.herokuapp.com/users/${userId}`);
  const user = await response.json();
  user;

  /*  v1, not mixed with Promise, sequential calls
  const catImageUrls = [];
  for (const catId of user.cats) {
    const response =  await fetch(`https://catappapi.herokuapp.com/cats/${catId}`);
    const catData = await response.json();
    catImageUrls.push(catData.imageUrl);
  }
  return catImageUrls;
  */

  //v2, combined with Promise
  return await Promise.all(user.cats.map(async function(catId){
    const response =  await fetch(`https://catappapi.herokuapp.com/cats/${catId}`);
    const catData = await response.json();
    return catData.imageUrl;
  }));
}


const result = fetchAvatarUrl(123);
result;
console.log('test');



/* jshint ignore:end */


