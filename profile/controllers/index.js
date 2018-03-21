function profile(req, res) {
    

    let process = require('../utilities/index.js');
    process.findPosts(req,res);

}





module.exports.profile = profile;
