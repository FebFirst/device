let managerService = require('../services/managerService');

module.exports = function(app){
	/**
	 * process manager request
	 */
	app.post('/manager', function(req, res, next){
		let data = {"contentType": req.body.contentType, "data":req.body.data};
		// console.log(req.body);
		managerService.managerRequestProcessor(data).then((result)=>{
			console.log(result);
			res.send(result);
		}).catch((error)=>{
			console.log(error);
			//next(error);
		});
	});


	app.post('/manager/regist', (req, res, next)=>{
		let manager = req.body.data;
		console.log("lalal" + manager);
		managerService.managerRegister(manager).then(result=>{
			res.send(result);
		}).catch(error=>{
			next(error);
		});
	});
}