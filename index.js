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




