const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '62f6666ccamsh8e69d0f11fc9e6fp18f0d0jsn966eef87ff4b',
		'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
	}
};

fetch('https://api-football-v1.p.rapidapi.com/v3/timezone', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));