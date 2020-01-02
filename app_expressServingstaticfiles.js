const express = require('express');
const path = require('path');
const app = express();

app.use('/public',express.static(path.join(__dirname,'static'))); //uses alias public for static folder as we dont want to share folder names outside the server code
app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname,'static','index.html'));
});

app.listen(3000);