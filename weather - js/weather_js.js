const api = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
    const apikey = "b2eb64790086032d01ab8e77ffacb882";

    let Searchbox = document.querySelector('.search input');
    let SearchBtn = document.querySelector('.search button');
    let Weathericon = document.querySelector('.imgtag img');
    let  weathercard = document.querySelector('.card');
    let formdata = document.querySelector('.search');
 
    //function
    async function checkweather(city) {
        const response = await fetch(api + city + `&appid=${apikey}`);

        if (response.status == 404 || response.status == 400) {
            Swal.fire({
                icon: "error",
                title: "Invalid city Name",
                text: "Please Enter Correct city name",
            });
        }
            let data = await response.json();

        console.log(data.weather[0].main);

        document.querySelector('.location').innerHTML = data.name;
        document.querySelector('#humidity').innerHTML = data.main.humidity + "%";
        document.querySelector('#wind').innerHTML = data.wind.speed + " KM/H";
        document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + "°C";

        if (data.weather[0].main == 'Clouds') {
            Weathericon.src = "images/images/clouds.png";
            weathercard.style.setProperty("background-image", "linear-gradient(180deg, #b8c9ff, #406cff)", "important");
        } else if (data.weather[0].main == 'Clear') {
            Weathericon.src = "images/images/clear.png";
            weathercard.style.setProperty("background-image", "linear-gradient(180deg, #fffdcf, #fff757)", "important");
        } else if (data.weather[0].main == 'Drizzle') {
            Weathericon.src = "images/images/drizzle.png";
            weathercard.style.setProperty("background-image", "linear-gradient(180deg, #b5b9f7, #6d6f99 )", "important");
        } else if (data.weather[0].main == 'Mist') {
            Weathericon.src = "images/images/mist.png";
            weathercard.style.setProperty("background-image", "linear-gradient(180deg, #e3e3e6, #69696b)", "important");
        } else if (data.weather[0].main == 'Rain') {
            Weathericon.src = "images/images/rain.png";
            weathercard.style.setProperty("background-image", "linear-gradient(180deg, #bee2fa, #3baaf5)", "important");
        } else if (data.weather[0].main == 'Snow') {
            Weathericon.src = "images/images/snow.png";
            weathercard.style.setProperty("background-image", "linear-gradient(180deg, #f0f6fa, #d2eafa)", "important");
        } else if (data.weather[0].main == 'Haze') {
            Weathericon.src = "images/images/Haze.png";
            weathercard.style.setProperty("background-image", "linear-gradient(180deg, #e6ecf0, #c1ccd4)", "important");
        }

        document.querySelector('.weather').style.display = 'block';
    }
    // checkweather();
    formdata.addEventListener('submit', (event) => {
        event.preventDefault();
        checkweather(Searchbox.value);

    });