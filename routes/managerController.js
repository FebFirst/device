let managerService = require('../services/managerService');

module.exports = function(app){
	app.post('manager', function(req, res, next){
		let data = req.body.data;
		managerService.managerRequestProcessor(data).then((result)=>{
			console.log(result);
			res.send('OK');
		}).catch((error)=>{
			next(error);
		})
	});
}