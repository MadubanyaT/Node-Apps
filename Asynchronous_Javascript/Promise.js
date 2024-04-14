
const p = new Promise((resolve, reject) => { //a promise either returns a resolved or rejected object.
    // async code
    // ...
    
    setTimeout(() =>{
        //resolve(2); //if the object was resolved
        reject(new Error('error')); // Rejection with an message for the error.
    }, 2000)
});

p
    .then(r => console.log('Results: ', r)) // displays the resolved object 
    .catch(err => console.log('Error: ', err)); // displays the error if the object is rejection