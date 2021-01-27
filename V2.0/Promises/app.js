// Promise syntax
// new Promise((resolve, reject) => {
//      resolve();
// OR
//      reject();
// }) 

// Fake request example
const fakeRequest = (url) => {
    return new Promise((resolve, reject) => {
        const rand = Math.random();
        setTimeout(() => {
            if (rand > 0.5) {
                resolve('Here is your fake data');
            }
            reject('Request rejected :(');
        }, 1000);
    });
}

fakeRequest('fakeurl.com/dogs')
    .then((data) => {
        console.log(`Done: ${data}`);
    })
    .catch((err) => {
        console.log('Something went wrong:' + ' ' + err);
    })

// Delayed Color Change example
const delayedColorChange = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve();
        }, delay)
    });
}

delayedColorChange('red', 1000)
    .then(() => delayedColorChange('green', 1000))
    .then(() => delayedColorChange('blue', 1000))
    .then(() => delayedColorChange('yellow', 1000))
    .catch(() => {
        console.log('Error');
    })