const fs = require('fs');
const zlib = require('zlib'); //zlib is amodule used for compressing file
const gzip = zlib.createGzip();
const gunzip = zlib.createGunzip();
const readStream = fs.createReadStream('./example2.txt.gz' );
const writeStream = fs.createWriteStream('unzipExample.txt');
///readStream.pipe(writeStream); // dont need to write explicitly just needed a read source stream and destination stream

//readStream.pipe(gzip).pipe(writeStream); // pipe chaining where we are performing two operations and linking them with pipe.

readStream.pipe(gunzip).pipe(writeStream); //unzip the pipe

