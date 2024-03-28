
function Authenticate(req, res, next){
    console.log('Authenticating...');
    next(); // moving to the next middleware function
};

module.exports = Authenticate;