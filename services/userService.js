let Promise = require("bluebird");

let userDao = require("../dao/userDAO");

module.exports = {
	getUser : function(email){
		return new Promise((resolve)=>{
			let user = userDao.getUser(email);
			resolve(user);
		}).timeout(3000);
	},

	isLegalUser : function(user){
		return new Promise((resolve, reject)=>{
			let tmpUser = userDao.getUser(user.email);
			if(tmpUser && tmpUser.password === user.password){
				resolve(true);
			}else{
				reject(new Error("Invalid email or password"));
			}
		})
	}
}