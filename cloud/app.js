// 在 Cloud code 里初始化 Express 框架
var express = require('express');
var app = express();

// App 全局配置
app.set('views','cloud/views');   // 设置模板目录
app.set('view engine', 'ejs');    // 设置 template 引擎
app.use(express.bodyParser());    // 读取请求 body 的中间件


// 使用 Express 路由 API 服务 /hello 的 HTTP GET 请求
app.get('/hello', function(req, res) {
  res.render('hello', { message: 'Congrats, you just set up your app!' });
});

//
app.get('/', function(req, res) {
	res.render('index', {title: 'mobile Manager!'});
});
app.get('/author', function(req, res) {
	res.render('user/author', {title: 'author!'});
});
app.get('/view', function(req, res) {
	res.render('user/view', {title: 'view!'});
});
app.get('/task', function(req, res) {
	res.render('user/task', {title: 'task!'});
});
app.get('/login', function(req, res) {
	res.render('user/login');
});

// 最后，必须有这行代码来使 express 响应 HTTP 请求
app.listen();