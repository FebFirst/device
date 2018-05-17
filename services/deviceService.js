let Promise = require('bluebird');
let ffmpeg = require('fluent-ffmpeg');

let productionDataDao = require('../dao/productionDataDAO');

let services = require('../config/device.json').services;

module.exports = {
	auth: function(data){
		return new Promise((resolve, reject)=>{
			
		});
	},

	getServices: function(){
		return new Promise((resolve, reject)=>{

		})
	},

	getTextData:function(serviceName, params){
		return new Promise((resolve, reject)=>{

		})
	},

	getStreamData: function(serviceName, params){
		return new Promise((resolve, reject)=>{
			 switch (serviceName){
				case 1:
				 	break;
				default:
					productionDataDao.getScreenStream();
			 }
		})
	}
}