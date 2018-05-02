let users = require("../config/users.json");
let User = require("../model/user");


module.exports = {
	getUser : function(email){
		for(let i = 0; i < users.length; i ++){
			if(email = users[i].email){
				return new User(users[i].email, users[i].username, users[i].password);
			}
		}

		return null;
	},

	addUser : function(user){
		return false;
	}
}