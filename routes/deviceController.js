let deviceService = require('../services/deviceService');

let url = require('../config/url.json');

let device = require('../config/device.json');

module.exports = function(app){
	app.get(url.device, (req, res, next)=>{
		res.send(device.services.auth);
	});

	app.post(url.deviceAuth, (req, res, next)=>{
		let data = req.body.data;
		deviceService.auth(data).then(result=>{
			res.sent(device.services);
		}).catch(error=>{
			res.sent(device.services.auth);
		});
	});

	app.post(url.deviceService.getProductionData, (req, res, next)=>{
		//todo 
		//deviceService.getProductionData();
	})
}