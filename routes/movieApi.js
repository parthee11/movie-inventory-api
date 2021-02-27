var express = require('express');
var router = express.Router();
var fetch = require('node-fetch');

router.get('/', function(req, res, next) {
    
    var url = "https://api.themoviedb.org/3/discover/movie?api_key=3d485e84c7ae1856fb134fefd31ed2df&language=en-US&sort_by=popularity.desc&include_video=false&page=1";

    fetch(url)
        .then(res => res.json())
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.send(err)
        })
});

module.exports = router;