let inputArr = process.argv.slice(2);
let helpFunc = require("./commands/help");
let command = inputArr[0];
let path = inputArr[1];     
switch (command){
    case "tree":
        //call tree function
        console.log("This is tree function called and executed");
        break;
    case "organize":
        //call organize function
        console.log("This is organize function called and executed");
        break; 
    case "help" :
        //call help function
        // console.log("This is help function called and executed");
        helpFunc.help();
        break;
    default:
        console.log("Command Not Found");
        break;
}