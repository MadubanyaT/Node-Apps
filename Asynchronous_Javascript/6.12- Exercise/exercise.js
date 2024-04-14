
// getCustomer(1, (customer) => {
//   console.log('Customer: ', customer);
//   if (customer.isGold) {
//     getTopMovies((movies) => {
//       console.log('Top movies: ', movies);
//       sendEmail(customer.email, movies, () => {
//         console.log('Email sent...')
//       });
//     });
//   }
// });

displayMovies();

async function displayMovies(){
  try{
    const customer = await getCustomer(1);
    console.log('Customer: ', customer);
    if (customer.isGold) {
      const movies = await getTopMovies();
      console.log('Top movies: ', movies);
      const email = await sendEmail(customer.email, movies);
      console.log('Email sent...');
    }
  }
  catch (err){
    console.log(err);
  }
}


function getCustomer(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ 
        id: 1, 
        name: 'Mosh Hamedani', 
        isGold: true, 
        email: 'email' 
      });
    }, 6000);
  });
   
}

function getTopMovies() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(['movie1', 'movie2']);
    }, 6000);
  });
}

function sendEmail(email, movies) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      //resolve();
      reject(new Error('Got rejected'));
    }, 1000);
  });
}

