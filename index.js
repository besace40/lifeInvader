var express = require('express');

var app = express();
let bodyParser=require('body-parser');
var cfgserver = require('./core/config/server'); /* j'appelle mon server.js ?*/

let cfgdatabase = require('./core/config/database.js');
let mongoose = require('mongoose');

mongoose.connect(cfgdatabase.url, function(err){if (err) throw err;
else{
  console.log("Database connected ! ");
}});
/*app.get('*', function(req, res) {
res.send('Express response');
});   on remplace par : */
let path=require('path');
let dirViews=[path.join(__dirname,'./public/views/pages'),
path.join(__dirname,'./signin/views/pages'),
path.join(__dirname,'./signup/views/pages'),
path.join(__dirname,'./profile/views/pages'),
path.join(__dirname,'./post/views/pages')];

app.set('views',dirViews);
app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());


let session = require('express-session');
app.use(session({secret:"ma phrase", resave:true, saveUnitialized:true}));

let publicRoutes = require('./public/routes');
app.use(publicRoutes);
let signupRoutes =require('./signup/routes');
app.use(signupRoutes);
let signinRoutes =require('./signin/routes');
app.use(signinRoutes);
let profileRoutes = require('./profile/routes');
app.use(profileRoutes);
let postRoutes = require('./post/routes');
app.use(postRoutes);/*chemin pour nos rubriques ! si on
doit créer "sign in" on rajoute dans l'arbo et tout*/

app.listen(cfgserver.port);  /* avant c'était app.listen(3000)*, ça lance le server en
local host à la base */
console.log('Express server running on '+ cfgserver.port); /*avant c'était ('app server running on port 3000')*/
