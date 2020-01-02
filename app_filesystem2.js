const fs = require('fs');
//create folder
// fs.mkdir('tutorial', (err) => {
//     if(err)
//     console.log(err);
//     else 
//     console.log("successfully created folder");
// });


//delete folder
// fs.rmdir('tutorial', (err) => {
//     if(err)
//     console.log(err);
//     else 
//     console.log("successfully de;eted the folder");
// })


//create folder and file within It
// fs.mkdir('tutorial', (err) => {
//     if(err)
//     console.log(err);
//     else {
//         fs.writeFile('./tutorial/example.txt','my file data',(err) => {
//             if(err)
//             console.log(err);
//             else
//             console.log('successfully created file');
//         })
//     }
// })


//delete dir with file in it but we cannot delete it directly we need to first empty it otherwise we get an error
fs.unlink('./tutorial/example.txt',(err) => {
    if(err)
       console.log(err);
     else {
        fs.rmdir('tutorial', (err) => {
            if(err)
            console.log(err);
            else 
            console.log("successfully de;eted the folder");
        });
     }  
});

//delete multiple files in folder

fs.readdir('dirName',(err, files) => {
    if(err)
     console.log(err);
    else
    console.log(files); //list of all files in folder dirName 
    for(let file of files) {
        fs.unlink('./dirName' + file,(err) => {
            if(err)
            console.log(err);
            else 
            console.log("successfully de;eted the all files");
        })
    }
})
