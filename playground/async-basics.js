console.log('Starting app');

setTimeout(() => {
    console.log('Inside Call Back')
}, 2000);

setTimeout(() => {
    console.log('Inside 2nd Call Back')
}, 0);


console.log('Finishing up');