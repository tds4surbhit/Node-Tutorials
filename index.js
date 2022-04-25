// var a = 20 ;
// var b = 30 ;
// var c = 40 ;
// console.log(a+b+c);

// Lesson 2 - Importing Functionality
// const app = require('./app')
// console.log(app.x);
// console.log(app.z());

// Lesson 3 - Filter Application in Arrays 
// let arr = [1 ,2 , 3 , 4 , 5 , 6];
// let filterResult = arr.filter((list) => {
//     return list > 4 
// })
// console.log(filterResult)

// Lesson 4 - CORE Modules in NODE.JS
// Pre-defined methods in a Language to call API , LINK DATABASE and other things is called Core Modules .
// Eg - Buffer,fileSystem,HTTP
// GLOBAL MODULES - The functions we don't need to import . 
// eg - console.log 
// NON GLOBAL MODULES - The Modules that we need to import are non-global modules
// const fs = require('fs')
// fs.writeFileSync("Hello.txt","code step by step") --> Create a new file named Hello and Content - "Code step by step"
// We can also import directly fileSystem "fs" method eg -> const fs = require('fs').writeFileSync;
// And then use fs like --> fs("abc.txt","abc");

// Lesson 5 - GET Names of the Directory
// const fs = require('fs');
// console.log(__dirname); 

// Lesson 6 - Construct a basic server and and output on browser 
// const http = require('http');
// http.createServer((req,res)=>{
//     res.write("<h1>This is Anil Sindhu</h1>");
//     res.end
// }).listen(4500);

// Lesson 7 - Package.json
// Package.json will basically handle all the dependees and there versions.
// PackageLock.json is created when ever we do npm install .
// const colors = require('colors');
// console.log("package.json".green);
// Node JS is Javascript is a Single Threaded Language .

// Lesson 8 - How to not push a file in git
// create a file in root outside node module with name as - .gitignore 
// add /node_module inside that file directly incase you don't want to push it .

// Lesson 9 - Nodemon Package 
// Basically this helps into autorunning a java Script file .
// For Installation
// For windows we can use Command --> npm i nodemon -g
// For Mac we can use command -->sudo npm i nodemon -g
// For Running --> nodemon .\index.js
// console.warn("Testing Nodemon is wonderfull")
// When i started nodemon then restriction error came . How I fixed it ->
// Link --> https://dev.to/tradecoder/how-to-fix-error-nodemon-ps1-cannot-be-loaded-because-running-scripts-is-disabled-on-this-system-34fe
// Node JS is async Language .

// Lesson 10 - How to make Simple API's -
// ----- We called the date inside the code 
// const http = require('http');
// http.createServer((req,res)=>{
// res.writeHead(200,{'Content-Type':'application\json'}); // When we want to send some date to FrontEnd we need to write .
// res.write(JSON.stringify());
// res.end();
// }).listen(4500);
// ----- Now we will call data from a seperate file all together
// const data = require('./data');
// const http = require('http');
// http.createServer((req,res)=>{
// res.writeHead(200,{'Content-Type':'application\json'}); // When we want to send some date to FrontEnd we need to write .
// res.write(JSON.stringify(data));
// res.end();
// }).listen(4600);
// 200 - We send data with status . Postman says 200 ok
// 201 - postman says 201 created .
// 404 , 500 , 503 -These are created and work differently . Study them properly.

// Lesson 11 - Input from Command Line -
// how to take input from terminal and create a few file and take that file in use.
// console.log(process.argv) // Process contains a lot of methods but we will focus on process.agrumentvalue something it is called
// Now from Terminal if we run node index.js home then home will be taken as input .
//  It contains 2 values "process.argv" so if you want to get 3rd value as input as it comes in array then .
// console.log(process.argv[2]);
// Now we will create a file->
// const fs = require('fs');//For Creation of new file file system module has to be imported .
// const input = process.argv;
// fs.writeFileSync(input[2],input[3]);//This will create a new file with 1st input as file name and 2nd input is Inside text.
// Here we were doing --> node index.js apple.txt 'This is fruit' in terminal
// we will add condition now-
// const fs = require('fs')
// const input = process.argv;
// if(input[2] == 'add'){ //node index.js add orange.txt "This is a fruit"
//     fs.writeFileSync(input[3],input[4]);
// }else if(input[2] == 'remove'){
//     fs.unlinkSync(input[3]); //node index.js remove orange.txt 
// }else{
//     console.log("InvalidOutput") //node index.js abc orange.txt
// }

// Lesson 12 - Show File List with File System .
// This is for Creating the file inside a perticular folder .
// const fs = require('fs');
// const path = require('path'); //This is inbuilt module 
// const dirPath = path.join(__dirname,'Files'); //This will fetch the directory of the folder inside which we need to create files
// console.warn(dirPath)
// for(i=0;i<5;i++){
//     fs.writeFileSync(`${dirPath}/Hello${i}.txt`,'a simple txt File');
// }
// This is for Reading the File names under Perticular Folder directory
// const fs = require('fs');
// const path = require('path'); //This is inbuilt module 
// const dirPath = path.join(__dirname,'Files'); //This will fetch the directory of the folder inside which we need to create files
// fs.readdir(dirPath,(err,files)=> {
//     files.forEach((item) => {
//         console.log(item)
//     })
// })

// Lesson 13 - CRUD Operations with File Systems
// const fs = require('fs');
// const path = require('path');
// const dirPath = path.join(__dirname,'Crud');
// const filePath =  `${dirPath}/apple.txt`
// fs.writeFileSync(filePath,'This is file we are going to read');//Creating a new File with things.
// fs.readFile(filePath,'utf8',(err,fileItem)=>{
//     console.log(fileItem);//Reading file inside data
// })  
// fs.appendFile(filePath,'This is added file information',(err)=>{
//     if(!err) console.log("Edit has been added successfully"); //This is for editing the data properly
// })
// fs.rename(filePath,`${dirPath}/fruit.txt`,(err)=>{
//     if(!err) console.log('File name has been renamed');// This is for for renaming the files .
// });
// fs.unlinkSync(`${dirPath}/fruit.txt`);

// Lesson 14 - Asynchronous Basic in Node.js
// Node JS is single Threaded Asynchronous Programming Language.
// Means a settimeout function will delay in time other things keep on working
// Then when set time out will finish it will execute on its own.

// Lesson 15 - Handle Asynchronous Data in Node JS -
// let a = 20;
// let b = 0;
// // setTimeout(() => {
// //     b= 10;
// // },2000)
// let waitingData = new Promise((resolve,reject) => {
//     setTimeout(() => {
//         // b= 10;
//         resolve(10);
//     },2000)
// })
// waitingData.then((data)=>{
//     console.log(a+data);
// })
// console.log(a+b);

// Lesson 16 - How Node JS works -
// We learned about call Stack and a few other things Node Api and call back.

// Lesson 25 - Install MongoDB for Node JS-
// Easy download and install and use Mongo DB .
// Go server and inside till bin --> copy address till bin and add path inside environment varible
// Run cmd again and type mongo
// And to see databases created with Mongo GUI called MongoDB compass we can type mongo dbs

// Lesson 26 - Basics of MongoDB -
// MongoDB is a no SQL Database. The Database is Stored in collection . Collections don't have rows and columns . Data is stored in form of Objects.
// Oracle mysql and  sql are structured query language . MongoDB doesn't have any Structure .
// In MongoDB it is not required that everytime we have all they keys in database . Kabhi 5 kabhi 35 but in SQL sab hone chahiye sari keys
// Agar data structured hai or number of keys (columns) har data mei same a raha hai to SQL acha hai Varna unstructured Data base ke liye mongo.
// MongoDB mei apko jin keys mei values hain bss vahi ki storage atti hai varna sql mei storage use jaida hota hai
// Some DB commands->
// 1 - show dbs , 
// 2 - How to create a new Database in MongoDB Compass -
