//#region Async functions
async function hello() {
    return 'Hey there!';
}

async function uhoh() {
    throw new Error('error bro');
}

// This
const sing = async () => {
    throw 'Error 3303';
    return 'La la la';
}
// is essentially the same as this
sing()
    .then(data => {
        return 'La la la';
    })
    .catch(err => {
        return 'Error 3303';
    })
//#endregion

//#region Login fake demo
const login = async (username, password) => {
    if (!username || !password) throw 'Missing credentials';
    if (username === 'Manuel' && password === 'gordito123') return 'Welcome';
    throw 'Invalid password';
}

// login('Manuel', 'gordito123')
//     .then(msg => {
//         console.log('Logged in: ', msg);
//     })
//     .catch(err => {
//         console.log('Error: ', err);
//     })

async function setCredentials(username, password) {
    try {
        const response = await login(username, password);
        console.log('Logged in: ', response);
    } catch (error) {
        console.log('Error: ', error);
    }
}
//#endregion

//#region delayed color change await demo

const delayedColorChange = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve();
        }, delay)
    });
}

//instead of this:
// delayedColorChange('red', 1000)
//     .then(() => delayedColorChange('green', 1000))
//     .then(() => delayedColorChange('blue', 1000))
//     .then(() => delayedColorChange('yellow', 1000))
//     .catch(() => {
//         console.log('Error');
//     })

//go with:

async function rainbow() {
    await delayedColorChange('red', 1000);
    await delayedColorChange('blue', 1000);
    await delayedColorChange('green', 1000);
    await delayedColorChange('yellow', 1000);
    await delayedColorChange('violet', 1000);
    return 'Done with rainbow';
}

const makeRaibow = async () => {
    console.log('Running rainbow...');
    let msg = await rainbow();
    console.log('End of rainbow, msg: ', msg);
}

makeRaibow();

//#endregion

//#region Handling errors

const fakeRequest = (url) => {
    return new Promise((resolve, reject) => {
        if (url === 'Google' || url === 'Facebook') {
            resolve(`Here is the data received from: ${url}`)
        }
        else {
            reject('We only know Google and Facebook urls');
        }
    });
}

function processResponse(response) {
    console.log('Processing response...');
    console.log('Response :', response);
}

async function makeTwoRequests(url1, url2) {
    try {
        const data1 = await fakeRequest(url1);
        processResponse(data1);
        const data2 = await fakeRequest(url2);
        processResponse(data2);
    } catch (e) {
        console.log('Error: ', e);
    }
}
//#endregion