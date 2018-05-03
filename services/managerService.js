let Promise = require('bluebird');

let managerUtil = require('../utils/managerConnectionUtil');
let fileUtil = require('../utils/fileUtil');
let device = require('../config/device.json');
let contentType = require('../config/contentType.json');

module.exports = {
	managerRegister: function(manager){
		return new Promise((resolve, reject)=>{
			managerUtil.managerRegister(manager).then((result)=>{
				// console.log(result);
				fileUtil.writeFile("manager.cfg", result);
				resolve(result);
			}).catch((error)=>{
				reject(error);
			});
		});
	},

	managerRequestProcessor : function(data){
		return new Promise((resolve, reject)=>{
			if(data.contentType === contentType['manager-request']){
				let newData = managerUtil.managerRequestDataProcess(data);
				resoleve(newData);
			}
		});
	}
}

