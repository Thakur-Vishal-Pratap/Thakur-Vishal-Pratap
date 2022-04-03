const fs = require("fs");
const path = require ("path");

function tree(srcPath){
    if(srcPath==undefined){
        srcPath=process.cwd();
    }
    // let allFiles = fs.readdirSync(srcPath);
    printAllFileName(srcPath);

}

function printAllFileName(fileNow){
    let isFile = fs.lstatSync(fileNow).isFile();
    // console.log();
    if(isFile == false){
        console.log(path.basename(fileNow) + "\n");
        let allFiles = fs.readdirSync(fileNow);
        for(let i=0 ; i<allFiles.length ; i++){
            let newFile = path.join(fileNow , allFiles[i])
            printAllFileName(newFile);
        }
    }else{
        console.log(path.basename(fileNow) + "\n");
    }
}

let srcPath = "C:/Users/Asus/Desktop/Web_Dev/Node/FileOrganizer/downloads";
tree(srcPath);