const searchInput = document.getElementById('searchInput')
const searchButton = document.getElementById('searchButton')
const infoContainer = document.getElementById('infoContainer')
const temperatureContainer = document.getElementById('temperatureContainer')
const dataContainer = document.getElementById('dataContainer')

searchButton.addEventListener('click', getWeather)
searchInput.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
        getWeather()
    }
})

function getWeather() {

    let inputValue = document.getElementById('searchInput').value

    fetch(`http://api.weatherapi.com/v1/current.json?key=f1dbde97ae0a489c8b1232700242309&q=${inputValue}&aqi=no`)
        .then(res => res.json())
        .then(res => displayWeather(res))
}


function displayWeather(weather) {

    temperatureContainer.innerHTML = ''
    dataContainer.innerHTML = ''

    let cityTitle = document.createElement('h2')
    cityTitle.textContent = weather.location.name

    let countryTitle = document.createElement('p')
    countryTitle.textContent = weather.location.country

    let roundedTemp = Math.round(`${weather.current.temp_c}`)
    let temperature = document.createElement('h2')
    temperature.textContent = roundedTemp + '°'

    let weatherIcon = document.createElement('img')
    weatherIcon.src = `${weather.current.condition.icon}`

    let humidity = document.createElement('p')
    humidity.textContent = 'Humedad: ' + weather.current.humidity + '%'

    infoContainer.appendChild(cityTitle)
    infoContainer.appendChild(countryTitle)
    temperatureContainer.appendChild(temperature)
    temperatureContainer.appendChild(weatherIcon)
    dataContainer.appendChild(humidity)

    console.log(weather)
}