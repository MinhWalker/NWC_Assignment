var request = require('request');
var db = require('../db');


module.exports.index = (req, res) => {   //render index page
	res.render('index', {
		
	});		
};

module.exports.indexPOST = (req, res, next) => {	//request to API 

	var voice = req.body.voice;

	var headers = {
    'api-key': 'Wgm3SJWo1eKAo6h0eSOqoc2UpCGOiFLK',
    'speed': '',
    'voice': voice
	};

	var dataString = req.body.content;

	var options = {
	    url: 'https://api.fpt.ai/hmi/tts/v5',
	    method: 'POST',
	    headers: headers,
	    body: dataString
	};

	request(options, (error, response, body) => {		//send data to API and callback function for get mp3 link
	    if (!error && response.statusCode == 200) {
	        var content = JSON.parse(body);
	        
  			db.set('datas.name', content.async)
  			.write()
			// console.log(content.async);
	    }
	    res.redirect('/');
	});
	
};

module.exports.show = (req, res) => { 	//rend data(mp3 link) to index page
	res.render('index', {
		data: db.get('datas.name')
	});		
};


