let Promise = require('bluebird');

let managerUtil = require('../utils/managerConnectionUtil');
let device = require('../config/device.json');
let contentType = require('../config/contentType.json');

module.exports = {
	managerRegister: function(manager){
		managerUtil.managerRegister(manager).then((result)=>{
			// console.log(result);
			managerUtil.writeData("manager.cfg", result);
		}).catch((error)=>{
			console.log(error);
		})
	},

	managerRequestProcessor : function(data){
		return new Promise((resolve, reject)=>{
			if(data.contentType === contentType['manager-request']){
				
			}
		});
	}
}

