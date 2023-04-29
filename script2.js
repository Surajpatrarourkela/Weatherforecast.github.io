const option1 = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '643ac08b6amsh4aa9aa7b4ba1f33p11044ejsnf9aab2175237',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Boston', option1)
	.then(response => response.json())
	.then(response => {
		console.log(response)
		cloud_pct4.innerHTML = response.cloud_pct
		temp4.innerHTML = response.temp
		feels_like4.innerHTML = response.feels_like
		humidity4.innerHTML = response.humidity
		min_temp4.innerHTML = response.min_temp
		max_temp4.innerHTML = response.max_temp
		wind_speed4.innerHTML = response.wind_speed
		wind_degrees4.innerHTML = response.wind_degrees
		sunrise4.innerHTML = response.sunrise
		sunset4.innerHTML = response.sunset


	})
	.catch(err => console.error(err));