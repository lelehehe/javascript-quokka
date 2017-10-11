/* 
https://blog.patricktriest.com/what-is-async-await-why-should-you-care/

*/

/* jshint ignore:start */
class Api {
  constructor() {
    this.user = {
      id: 1,
      name: 'test'
    };
    this.friends = [this.user, this.user, this.user];
    this.photo = 'not a real photo';
  }
  getUser() {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(this.user), 200);
    })
  }

  getFriends(userId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(this.friends.slice()), 200);
    })
  }

  getPhoto(userId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(this.photo), 200);
    })
  }

  throwError() {
    return new Promise((resolve, reject) => {
      setTimeout(() => reject(new Error('Intentional Error')), 200);
    })
  }
}


async function asyncAwaitIsYourNewBestFriend() {
  const api = new Api();
  const user = await api.getUser();
  const friends = await api.getFriends(user.id);
  const photo = await api.getPhoto(user.id);
  console.log('asyncAwaitIsYourNewBestFriend', {
    user,
    friends,
    photo
  })
  //return friends;
}

//PARALLEL OPERATIONS
//  It's a bit slow to get each additional friend list one-by-one, why not do them in parallel? Can we do that with async/await?
//  Yeah, of course we can. It solves all of our problems.
async function asyncAwaitLoopsParallel () {
  const api = new Api();
  const user = await api.getUser();
  const friends = await api.getFriends(user.id);
  const friendPromises = friends.map(friend => api.getFriends(friend.id));
  const moreFriends = await Promise.all(friendPromises);
  console.log('asyncAwaitLoopsParallel', moreFriends);
}

//Normal Try/Catch Block
//  Here, we've wrapped the entire operation within a normal try/catch block. 
//    This way, we can throw and catch errors from synchronous code and asynchronous code in 
//    the exact same way. Much simpler.

async function aysncAwaitTryCatch () {
  try {
    const api = new Api()
    const user = await api.getUser()
    const friends = await api.getFriends(user.id)

    await api.throwError()
    console.log('Error was not thrown')

    const photo = await api.getPhoto(user.id)
    console.log('async/await', { user, friends, photo })
  } catch (err) {
    console.error("try catch block " + err);
  }
}


var result = asyncAwaitLoopsParallel();

aysncAwaitTryCatch();


//COMPOSITION
//  any function tagged with "async" actually returns a promise. This allows us to really easily compose asynchronous control 
//  flows. For instance, we can reconfigure the earlier example to return the user data instead of logging it. 
//  Then we can retrieve the data by calling the async function as a promise.
async function getUserInfo () {
  const api = new Api()
  const user = await api.getUser()
  const friends = await api.getFriends(user.id)
  const photo = await api.getPhoto(user.id)
  return { user, friends, photo }
}

function promiseUserInfo () {
  getUserInfo().then(({ user, friends, photo }) => {
    console.log('promiseUserInfo', { user, friends, photo })
  })
}

promiseUserInfo();

//Even better, we can use async/await syntax in the receiver function too, leading to a completely obvious, even trivial, block of asynchronous programing.
async function awaitUserInfo () {
  const { user, friends, photo } = await getUserInfo();
  console.log('awaitUserInfo', { user, friends, photo })
}
 awaitUserInfo();

 async function awaitUserInfo () {
  const { user, friends, photo } = await getUserInfo()
  console.log('awaitUserInfo', { user, friends, photo })
}

//What if now we need to retrieve all of the data for the first 10 users?
async function getLotsOfUserData () {
  const users = []
  while (users.length < 10) {
    users.push(await getUserInfo())
  }
  console.log('getLotsOfUserData', users)
}

//How about in parallel? And with airtight error handling?
async function getLotsOfUserDataFaster () {
  try {
    const userPromises = Array(10).fill(getUserInfo())
    const users = await Promise.all(userPromises)
    console.log('getLotsOfUserDataFaster', users)
  } catch (err) {
    console.error(err)
  }
}

/* jshint ignore:end */