

function addPost(req, res) {
    let Post = require('../models/post');
    let post = new Post();
    post.user = req.session.user._id; //gauche = modele de post, droite = iD du gars qu'est conncecté
    post.title = req.body.title;
    post.description = req.body.description;

    post.save((err, post) => {
        if (err) throw err;
        //req.session.user = user;
        console.log('Le titre de votre poste : '+ post.title);
        console.log('La description de votre poste : '+post.description);
        console.log("L'utilisateur : "+post.user);
        res.redirect('/profile');
    })
}

module.exports.addPost = addPost;
