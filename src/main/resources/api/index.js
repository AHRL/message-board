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
var post = {
    "message" : [
        {
            "author": "aa",
            "date": "2018-1-13",
            "content": "hello world",
            "index":0,
            "comment": [
                {
                    "author": "b",
                    "date": '2017-1-13',
                    "content": 'alsl'
                },{
                    "author": "c",
                    "date": '2017-1-13',
                    "content": 'cc'
                }
            ]
        },
        {
            "author": "bb",
            "date": "2018-1-13",
            "content": "this is bb",
            "index":1,
            "comment": [
                {
                    "author": "d",
                    "date": '2017-1-13',
                    "content": 'd'
                },{
                    "author": "f",
                    "date": '2017-1-13',
                    "content": 'f'
                }
            ]
        },
        {
            "author": "hh",
            "date": "2018-1-13",
            "content": "this is hh",
            "index":2,
            "comment": [
                {
                    "author": "1",
                    "date": '2017-1-13',
                    "content": '1'
                },{
                    "author": "2",
                    "date": '2017-1-13',
                    "content": 'f'
                }, {
                    "author": "3",
                    "date": '2017-1-13',
                    "content": 'f'
                },{
                    "author": "4",
                    "date": '2017-1-13',
                    "content": 'f'
                },{
                    "author": "5",
                    "date": '2017-1-13',
                    "content": 'f'
                },{
                    "author": "6",
                    "date": '2017-1-13',
                    "content": 'f'
                }
            ]
        },
        {
            "author": "ee",
            "date": "2018-1-17",
            "content": "hello world",
            "index":0,
            "comment": [
                {
                    "author": "b",
                    "date": '2017-1-13',
                    "content": 'alsl'
                },{
                    "author": "c",
                    "date": '2017-1-13',
                    "content": 'cc'
                }
            ]
        },
        {
            "author": "ff",
            "date": "2018-1-13",
            "content": "hello world",
            "index":0,
            "comment": [
                {
                    "author": "b",
                    "date": '2017-1-13',
                    "content": 'alsl'
                },{
                    "author": "c",
                    "date": '2017-1-13',
                    "content": 'cc'
                }
            ]
        },
        {
            "author": "gg",
            "date": "2018-1-13",
            "content": "hello world",
            "index":0,
            "comment": [
                {
                    "author": "b",
                    "date": '2017-1-13',
                    "content": 'alsl'
                },{
                    "author": "c",
                    "date": '2017-1-13',
                    "content": 'cc'
                }
            ]
        },
        {
            "author": "mm",
            "date": "2018-1-13",
            "content": "hello world",
            "index":0,
            "comment": [
                {
                    "author": "b",
                    "date": '2017-1-13',
                    "content": 'alsl'
                },{
                    "author": "c",
                    "date": '2017-1-13',
                    "content": 'cc'
                }
            ]
        }
    ]
}


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