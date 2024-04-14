// // Callbacks
// console.log('1');
// getUser(3, (user)=>{
//     getRepositories(user.username, (repos) =>{   // (repos) this is the object that must be returned
//         console.log(`Usename: ${user.username}; \n Repositories: ${repos};`);
//    });
// });
// console.log('2');

// Solving Callback Hell
getUser(3, getRepositories);

function getRepositories(user){
    getRepositories(user.username, getCommits);
}

function getCommits(repos){
    getCommits(repo, DisplayCommits);
}

function DisplayCommits(commits){
    console.log('display commits')
};

console.log('2');


function getUser(id, callback){
    setTimeout(() => {
        console.log('fetching info from the database...');
        callback({id: id, username: 'TQ'});
    }, 3000);
};

function getRepositories(username, callback){
    setTimeout(() =>{
        console.log('Calling GitHub API for: ' + username);
        callback(['repo1', 'repo2', 'repo3']);
    },2000);
}

