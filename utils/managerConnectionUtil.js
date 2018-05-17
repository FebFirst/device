let os = require('os');
let fs = require('fs');
let request = require('request');
let Promise = require('bluebird');

let fileUtil = require('./fileUtil');

let device = require('../config/device.json');
let url = require('../config/url.json');
let filePath = require('../config/filePath.json');


function getIpAndMac(){
	let network = os.networkInterfaces();
	let wlan = network.WLAN;
	for(let i = 0; i < wlan.length; i ++){
		if(wlan[i].family === "IPV4")
			return wlan[i];
	}

	return {"address":"127.0.0.1", "mac":"nothing"};
}

module.exports = {

	managerRegister : function(manager){
		
		return new Promise(async function(resolve, reject){
			try{
				let ipMac = getIpAndMac();
				let manager = await fileUtil.readFile(filePath.filePath + filePath.managerdb);
				let deviceData = {
					"contentType":"regist",
					"data":{
						"manager": manager,
						"deviceName":device.deviceName,
						"deviceID":ipMac.mac,
						"location":"http://" + ipMac.address + ":" + device.servicePort
						+ "/" + url.manager
					}
				};
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
			}catch(error){
				reject(error);
			}
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