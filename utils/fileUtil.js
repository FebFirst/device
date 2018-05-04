let fs = require('fs');

let filePath = require('../config/filePath.json');

module.exports = {
	
	writeFile: function(file, data){
		//todo: merge data
		fs.writeFileSync(filePath.filePath + file, data);
	},

	readFile: function(file){
		return new Promise((resolve, reject)=>{
			let data = fs.readFileSync(file);
			resolve(data);
		}).timeout(5000);
	}
}