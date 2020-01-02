const express = require('express');
const path = require('path');
const app = express();
const Joi = require('joi');
const bodyparser = require('body-parser');

app.use('/public',express.static(path.join(__dirname,'static'))); //uses alias public for static folder as we dont want to share folder names outside the server code
app.use(bodyparser.urlencoded({extended:false})); //it parses the data for us 
app.use(bodyparser.json());
app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname,'static','index.html'));
});

app.post('/',(req,res)=> {
   // console.log(req.body);
    const schema = Joi.object().keys({
        //set rules for validation
        email: Joi.string().trim().email().required(),
        password : Joi.string().trim().min(5).max(10).required()
    })
    Joi.validate(req.body, schema, (err,result)=> {
        if(err) {
            console.log(err);
            res.send('an err has occurred');
        }
        console.log(result);
        res.send("successfully validated and posted data");
    })
    //database work here
   // res.json({success : true});
})

app.listen(3000);