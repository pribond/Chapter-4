var fs = require('fs');
fs.readFile("./data/earthquakes.csv", 'utf8',
	function (err, textFileData) {
		if (err) {
			console.error("An error occurred!");
			return;
		}

		console.log(textFileData);
	}
);
