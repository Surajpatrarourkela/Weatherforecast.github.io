const option3 = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '643ac08b6amsh4aa9aa7b4ba1f33p11044ejsnf9aab2175237',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Kolkata', option3)
	.then(response => response.json())
	.then(response => {
		console.log(response)
		cloud_pct6.innerHTML = response.cloud_pct
		temp6.innerHTML = response.temp
		feels_like6.innerHTML = response.feels_like
		humidity6.innerHTML = response.humidity
		min_temp6.innerHTML = response.min_temp
		max_temp6.innerHTML = response.max_temp
		wind_speed6.innerHTML = response.wind_speed
		wind_degrees6.innerHTML = response.wind_degrees
		sunrise6.innerHTML = response.sunrise
		sunset6.innerHTML = response.sunset


	})
	.catch(err => console.error(err));