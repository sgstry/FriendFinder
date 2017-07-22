var path = require('path');

module.exports = function(app, friends){

    app.get('/api/friends', function(req, res){
        res.json(friends);
    });

    app.post('/api/friends', function(req, res){
    	if(friends.length > 0) {
    		res.send(findMatch(friends, req.body));
    	} else {
    		res.send({});
    	}
    	friends.push(req.body);
    });
}

function findMatch(friends, person) {
	var min = 41
	var diff = 0;
	var pos = 0;
	for(var i = 0; i < friends.length;i++) {
		var friend = friends[i];
		for(var j = 0;j < 10;j++) {
			diff += Math.abs(person.scores[j] - friend.scores[j]);
		}
		if(diff < min) {
			pos = i;
			min = diff;
		}
		diff = 0;
	}
	return friends[pos];
};