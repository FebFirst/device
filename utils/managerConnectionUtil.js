let fs = require('fs');
let request = require('request');
let Promise = require('bluebird');

let dataPath = "data/";

module.exports = {

	managerRegister : function(manager){
		return new Promise((resolve, reject)=>{
			request({
				url: manager,
				method: 'POST',
				headers:{
					"content-type": "x-www-form-urlencoded"
				},
				//body: device
			}, function(error, response, body){
				if(!error && response.statusCode == 200){
					resolve(body);
				}else{
					console.log(response);
					reject(new Error("Manager Regist Error."));
				}
			});
		});
	},

	managerRequestDataProcess: function(data){
		let newTargetManager = data.data.resourceManager;
		let newTargetName = data.data.resourceName;

		data.data.resourceManager = data.data.targetManager;
		data.data.resourceName = data.data.targetName;
		data.data.targetManager = newTargetManager;
		data.data.targetName = newTargetName;

		return data;
	}
}