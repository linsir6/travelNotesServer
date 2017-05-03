var koa = require('koa');
var controller = require('koa-route');
var app = koa();

var views = require('co-views');
var render = views('./view', {
    map: {html: 'ejs'}
});

var koa_static = require('koa-static-server');
var service = require('./service/tripService.js');
var querystring = require('querystring');
app.use(koa_static({
    rootDir: './static/',
    rootPath: '/static/',
    maxage: 0
}));


app.use(controller.get('/register', function*() {
    this.set('Cache-Control', 'no-cache');
    var params = querystring.parse(this.req._parsedUrl.query);
    var phone = params.phone;
    var pwd = params.pwd;
    var name = params.name;
    this.body = yield service.register(phone, pwd, name);
}));


app.use(controller.get('/login', function*() {
    this.set('Cache-Control', 'no-cache');
    var params = querystring.parse(this.req._parsedUrl.query);
    var phone = params.phone;
    var pwd = params.pwd;
    this.body = yield service.load(phone, pwd);
}));


app.use(controller.get('/get_all_travel_notes', function*() {
    this.set('Cache-Control', 'no-cache');
    this.body = yield service.all_travel_notes();
}));


app.use(controller.get('/get_all_raiders', function*() {
    this.set('Cache-Control', 'no-cache');
    this.body = yield service.all_raiders();
}));

app.use(controller.get('/search_travel_notes', function*() {
    this.set('Cache-Control', 'no-cache');
    var params = querystring.parse(this.req._parsedUrl.query);
    var place = params.place;
    this.body = yield service.search_travel_notes(place);
}));


app.use(controller.get('/search_raiders', function*() {
    this.set('Cache-Control', 'no-cache');
    var params = querystring.parse(this.req._parsedUrl.query);
    var place = params.place;
    this.body = yield service.search_raiders(place);
}));

app.use(controller.get('/user_list', function*() {
    this.set('Cache-Control', 'no-cache');
    this.body = yield service.user_list();
}));

app.use(controller.get('/add_travel_notes_list', function*() {
    this.set('Cache-Control', 'no-cache');
    var params = querystring.parse(this.req._parsedUrl.query);
    var title = params.title;
    var date = params.date;
    var background = params.background;
    var text1 = params.text1;
    var img1 = params.img1;
    var text2 = params.text2;
    this.body = yield service.add_travel_notes_list(title, date, background, text1, img1, text2);
}));

app.use(controller.get('/add_raiders_list', function*() {
    this.set('Cache-Control', 'no-cache');
    var params = querystring.parse(this.req._parsedUrl.query);
    var title = params.title;
    var description = params.description;
    var details_description = params.details_description;
    var background = params.background;
    var text1 = params.text1;
    var img1 = params.img1;
    var text2 = params.text2;
    var img2 = params.img2;
    var text3 = params.text3;
    var img3 = params.img3;
    this.body = yield service.add_raiders_list(title, description, details_description, background, text1, img1, text2, img2, text3, img3);
}));

app.use(controller.get('/check_version', function*() {
    this.set('Cache-Control', 'no-cache');
    this.body = yield service.check_version();
}));

app.use(controller.get('/login.html', function*() {
    this.set('Cache-Control', 'no-cache');
    this.body = yield render('login');
}));

app.use(controller.get('/add_raiders_list.html', function*() {
    this.set('Cache-Control', 'no-cache');
    this.body = yield render('add_raiders_list');
}));
app.use(controller.get('/add_travel_notes.html', function*() {
    this.set('Cache-Control', 'no-cache');
    this.body = yield render('add_travel_notes');
}));
app.use(controller.get('/index.html', function*() {
    this.set('Cache-Control', 'no-cache');
    this.body = yield render('index');
}));
app.use(controller.get('/show_raiders.html', function*() {
    this.set('Cache-Control', 'no-cache');
    this.body = yield render('show_raiders');
}));
app.use(controller.get('/show_travel_notes.html', function*() {
    this.set('Cache-Control', 'no-cache');
    this.body = yield render('show_travel_notes');
}));
app.use(controller.get('/user_list.html', function*() {
    this.set('Cache-Control', 'no-cache');
    this.body = yield render('user_list');
}));

app.use(controller.get('/callback', function*() {
    this.set('Cache-Control', 'no-cache');
    var params = querystring.parse(this.req._parsedUrl.query);
    var user_phone = params.user_phone;
    var user_name = params.user_name;
    var text = params.text;
    this.body = yield service.call_back(user_phone, user_name, text);
}));



app.listen(3000);
console.log('Koa server is started!');






























