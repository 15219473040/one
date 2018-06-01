// const path = require('path');
// const jsonServer = require('json-server');
// const server = jsonServer.create();
// const router = jsonServer.router(path.join(__dirname, 'db.json'));
// const middlewares = jsonServer.defaults();

// server.use(jsonServer.bodyParser);
// server.use(middlewares);



 
// var proxy = require('http-proxy-middleware')

 
// const context = [`/login`, `/admin/*`,"*"]

 
// const options = {
//     target: 'http://localhost:3000',
//     changeOrigin: true
// }

 
// const apiProxy = proxy(options)

// var express = require('express');
// var path = require('path');
// var favicon = require('serve-favicon');
// var logger = require('morgan');
// var cookieParser = require('cookie-parser');
// var bodyParser = require('body-parser');
 

// var app = express();







var express = require("express");

var app = express();

var bodyParser = require("body-parser");
 

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// app.use(express.static("./public"));

 

var session = require("express-session");
app.use(session({
    secret: "wangxx",//应用在https的
    resave: true,//是指每次请求都重新设置session
    saveUninitialized: true,//无论有没有session，每次都请求设置一个session
    cookie: { maxAge: 60 * 30 * 1000 }//过期时间，单位毫秒
}));

 
 
 
 
app.all('*', function (req, res, next) {
    // CORS配置
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Credentials", true);
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});


app.use(function(req,res,next){
    if(req.originalUrl.indexOf("/login")!=-1){
        res.header("Access-Control-Expose-Headers", "access-token");
        console.log(req)
   
        res.send({ a: req.body})
    }
})

app.use(require("./auth"));
app.listen(4000);




















// server.post("/login",function(req,res,next){
  
//     res.header("Access-Control-Expose-Headers","access-token");
//     const {account ,password} = req.body;
//     if(account==="admin"&&password=="123456"){
//         res.header("access-token",Date.now());
//         console.log({ account, password })
//         res.json(2);
//     }else{
//         res.json(false);
//     }
// });

// server.use(context, apiProxy)

// 
// server.use(router);
// server.listen(4000,function(){
//     console.log("JSON server is running in http://localhost:4000");
// });