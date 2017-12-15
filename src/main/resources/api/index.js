var express = require('express');
var app = express();
var fs = require("fs");
var cors = require('cors');

app.use(cors());

var get = {
   "get" : {
      "name" : "get",
      "password" : "getpassword",
      "profession" : "get",
      "id": 1
   }
}
var post = [
    {
        "word":"我是田宇",
        "type":1
    },
    {
        "com":"我是第一条评论",
        "comment":1,
        "order":1
    },
    {
        "com":"我是第二条评论",
        "comment":1,
        "order":2
    },
    {
      "word":"hhhhh",
      "type":2
    }
]

app.get('/', function (req, res) {
   res.send('hello wolrd');
})

app.get('/get', function (req, res) {
   res.send(get);
})

app.post('/post', function (req, res) {
	res.send(post);
})

var server = app.listen(7070, function () {
  var host = server.address().address
  var port = server.address().port
  console.log("应用实例，访问地址为 http://%s:%s", host, port)
})