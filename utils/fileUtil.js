let fs = require('fs');

module.exports = {
	
	writeFile: function(file, data){
		//todo: merge data
		fs.writeFileSync(dataPath + file, data);
	},

	readFile: function(file){
		return new Promise((resolve, reject)=>{
			let data = fs.readFileSync(file);
			resolve(data);
		}).timeout(5000);
	}
}