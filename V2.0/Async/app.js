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