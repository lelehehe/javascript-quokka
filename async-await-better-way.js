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

var result = asyncAwaitLoopsParallel();


/* jshint ignore:end */