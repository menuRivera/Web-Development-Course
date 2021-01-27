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
        return 'Error 3302';
    })


//Login fake demo
const login = async (username, password) => {
    if (!username || !password) throw 'Missing credentials';
    if (username === 'Manuel' && password === 'gordito123') return 'Welcome';
    throw 'Invalid password';
}

login('Manuel', 'gordito123')
    .then(msg => {
        console.log('Logged in:');
        console.log(msg);
    })
    .catch(err => {
        console.log('Error:');
        console.log(err);
    })




// delayed color change await

const delayedColorChange = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve();
        }, delay)
    });
}

// delayedColorChange('red', 1000)
//     .then(() => delayedColorChange('green', 1000))
//     .then(() => delayedColorChange('blue', 1000))
//     .then(() => delayedColorChange('yellow', 1000))
//     .catch(() => {
//         console.log('Error');
//     })

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