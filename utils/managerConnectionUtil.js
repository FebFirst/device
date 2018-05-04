let fs = require('fs');
let request = require('request');
let Promise = require('bluebird');

let dataPath = "data/";

module.exports = {

	managerRegister : function(manager){
		let deviceData = {"contentType":"regist",
											"data":{
												"manager": "上海市闵行区东川路800号软件学院3108室",
												"deviceName":"投影仪",
												"deviceID":"18-31-BF-28-F6-36",
												"location":"192.168.2.33"
											}};
		return new Promise((resolve, reject)=>{
			request({
				url: manager,
				method: 'POST',
				headers:{
					"content-type": "application/json"
				},
				body: JSON.stringify(deviceData)
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