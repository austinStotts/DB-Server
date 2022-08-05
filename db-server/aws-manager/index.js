let keys = require('./iam');
let AWS = require('aws-sdk');
let path = require("path");
let fs = require('fs');

AWS.config.loadFromPath('./iam.json');
s3 = new AWS.S3({apiVersion: '2006-03-01'});

// SET THESE VARIABLES BEFORE RUNNING THE SCRIPT!!
var showid = "ruby";
var path_to_resource = "./shows/ruby";

const uploadDir = function(s3Path, bucketName) {

    function walkSync(currentDirPath, callback) {
        fs.readdirSync(currentDirPath).forEach(function (name) {
            var filePath = path.join(currentDirPath, name);
            var stat = fs.statSync(filePath);
            if (stat.isFile()) {
                callback(filePath, stat);
            } else if (stat.isDirectory()) {
                walkSync(filePath, callback);
            }
        });
    }

    walkSync(s3Path, function(filePath, stat) {
        let bucketPath = `${filePath.split('\\').join('/')}`;
        // console.log(filePath)
        let params = {Bucket: bucketName, Key: bucketPath, Body: fs.readFileSync(filePath) };
        s3.putObject(params, function(err, data) {
            if (err) {
                console.log(err)
            } else {
                console.log('Successfully uploaded '+ bucketPath +' to ' + bucketName);
            }
        });

    });
};

uploadDir(path_to_resource, "stevelovescartoons");