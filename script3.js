const option2 = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '643ac08b6amsh4aa9aa7b4ba1f33p11044ejsnf9aab2175237',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Lucknow', option2)
	.then(response => response.json())
	.then(response => {
		console.log(response)
		cloud_pct5.innerHTML = response.cloud_pct
		temp5.innerHTML = response.temp
		feels_like5.innerHTML = response.feels_like
		humidity5.innerHTML = response.humidity
		min_temp5.innerHTML = response.min_temp
		max_temp5.innerHTML = response.max_temp
		wind_speed5.innerHTML = response.wind_speed
		wind_degrees5.innerHTML = response.wind_degrees
		sunrise5.innerHTML = response.sunrise
		sunset5.innerHTML = response.sunset


	})
	.catch(err => console.error(err));