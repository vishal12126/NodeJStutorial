const express = require('express');
const path = require('path');
const app = express();


app.use('/public',express.static(path.join(__dirname,'static'))); //uses alias public for static folder as we dont want to share folder names outside the server code
app.set('view engine','ejs');
// app.get('/:userQuery', (req,res) => {
//     res.render('dummy',{data : {userQuery:req.params.userQuery,
//                         searchresults: ['book1','book2','book3'],
//                         loggedIn: true,
//                         username :'user'}});
// });

const people = require('./routes/people');
app.use('/people',people);

app.listen(3000);