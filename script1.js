const option = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '643ac08b6amsh4aa9aa7b4ba1f33p11044ejsnf9aab2175237',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Shanghai', option)
	.then(response => response.json())
	.then(response => {
		console.log(response)
		cloud_pct3.innerHTML = response.cloud_pct
		temp3.innerHTML = response.temp
		feels_like3.innerHTML = response.feels_like
		humidity3.innerHTML = response.humidity
		min_temp3.innerHTML = response.min_temp
		max_temp3.innerHTML = response.max_temp
		wind_speed3.innerHTML = response.wind_speed
		wind_degrees3.innerHTML = response.wind_degrees
		sunrise3.innerHTML = response.sunrise
		sunset3.innerHTML = response.sunset


	})
	.catch(err => console.error(err));