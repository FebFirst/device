let fs = require('fs');
let request = require('request');
let Promise = require('bluebird');

let dataPath = "data/";

module.exports = {
	writeData: function(file, data){
		//todo: merge data
		fs.writeFileSync(dataPath + file, data);
	},

	readData: function(file){
		return new Promise((resolve, reject)=>{
			let data = fs.readFileSync(file);
			resolve(data);
		}).timeout(5000);
	},

	managerRegister : function(manager){
		return new Promise((resolve, reject)=>{
			request({
				url: manager,
				method: 'GET',
				headers:{
					"content-type": "application/json"
				},
				//body: device
			}, function(error, response, body){
				if(!error && response.statusCode == 200){
					resolve(body);
				}else{
					reject(new Error("Manager Regist Error."));
				}
			});
		})
	}
}