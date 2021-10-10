var http=require('http');
var url=require('url');
var fs=require('fs');
var express=require('express');
var app=express();
const PORT =process.env.PORT || 3000;

app.get('/',(req,res)=>{
    fs.readFile('./index.html',null,function(err,data){
        if(err){
            res.write("error");
        }
        else{
            res.write(data);
        }
        res.end();
    })
    
})
app.get('/file1',(req,res)=>{
    fs.readFile('./file1.html',null,function(err,data){
        if(err){
            res.write("error");
        }
        else{
            res.write(data);
        }
        res.end();
    })
})
app.get('/file2',(req,res)=>{
    fs.readFile('./file2.html',null,function(err,data){
        if(err){
            res.write("error");
        }
        else{
            res.write(data);
        }
        res.end();
    })
})
app.get('/file3',(req,res)=>{
    fs.readFile('./file3.html',null,function(err,data){
        if(err){
            res.write("error");
        }
        else{
            res.write(data);
        }
        res.end();
    })
})
console.group(PORT);
app.listen(PORT);