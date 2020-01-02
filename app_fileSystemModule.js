const fs = require('fs'); //will get us the file system module
//create a file
// fs.writeFile('example.txt',"this is example for file",(err) => {
//     if(err)
//         console.log(err);
//     else {
//                 console.log('file successfully created');    
//                 fs.readFile('example.txt', 'utf8', (err, file) => {
//                 if(err)
//                         console.log(err);
//                  else {
//                         console.log(file);    
//     }
//                 });
//     } 
// })

//Rename file
//fs.rename('example.txt','example2.txt',(err) => {
//    if(err)
//            console.log(err);
//     else 
//            console.log('file successfully renamed');      
//});

//Append ata at the end of the file
//fs.appendFile('example2.txt','some more data need to be appended',(err) => {
//    if(err)
//            console.log(err);
//     else 
//            console.log('file successfully appended');      
//});

//UNLINK/Deleted FILE
fs.unlink('example2.txt',(err) => {
    if(err)
            console.log(err);
     else 
            console.log('file successfully DELETED');      
});

