var fs  = require('fs'),
    sys = require('sys');

var Router = require('../../lib/biggie-router/lib/biggie-router');
var router = new Router();

router.get('/').bind(function(request, response, next) {
    response.sendBody(200, 'Hello World!');
});

router.get('/ogg').bind(function(request, response, next) {

    response.writeHead(200, {
        'Transfer-Encoding': 'chunked',
        'Content-Type': 'audio/ogg'
    });

    var stream = fs.createReadStream('eleanor-rigby-sample.ogg');

    stream.addListener('data', function(chunk) {
       response.write(chunk, 'binary'); 
    }).addListener('end', function() {
        response.end();
    });
})

router.listen(8080);

