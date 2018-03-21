function post(req, res) {
    res.render('post');

}

function postProcess(req, res){
    let process = require('../../post/utilities/index.js');    
    process.addPost(req,res);
}


module.exports.post = post;
module.exports.postProcess = postProcess;
