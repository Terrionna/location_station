var express = require('express');
var server = express ();
var port = 8080;
var apiKey = require('./secrets').googleAPIKey;
var axios= require('axios');
//typicode
server.get('/posts/:postId', function(request, response){
  var url = 'https://jsonplaceholder.typicode.com/';
  axios.get(url)
      .then(function(results){
        response.send(results.data);
      })
      .catch(function(err){
        response.send(err)
      })
})
server.listen(port, function(){
  console.log('Now listening on port...', port);
});

//geolocation
server.get('/location/:address', function(request, response){
  var address = request.params.address;
var url = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${apiKey}`;
    axios.get(url)
   .then(function(results){
      response.send(results.data);
   })
   .catch(function(err){
      response.send(err);
   });
});
