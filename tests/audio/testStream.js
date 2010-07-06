var fs  = require('fs'),
    sys = require('sys');

var Router = require('../../lib/biggie-router/lib/biggie-router');
var router = new Router();

router.get('/').bind(function(request, response, next) {
    response.sendBody(200, 'Hello World!');
});

router.get('/ogg').bind(function(request, response, next) {

    response.writeHead(200, {'Content-Type': 'audio/ogg'});

    var stream = fs.createReadStream('eleanor-rigby-sample.ogg');

    sys.pump(stream, response, function () {
        console.log('done');
    });
})

router.listen(8000);

