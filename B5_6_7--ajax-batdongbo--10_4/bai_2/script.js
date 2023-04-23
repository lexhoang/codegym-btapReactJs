const inpCity = document.querySelector('#inp-city');

const address = document.querySelector('#address')
const day = document.querySelector('#day')
const temp = document.querySelector('#temp');
const humidity = document.querySelector('#humidity')
const wind = document.querySelector('#wind')
const description = document.querySelector('#description')

document.addEventListener('keydown', function (event) {
    if (event.keyCode === 'Enter') {
        submit_form()
    }
})

function submit_form(e) {
    e.preventDefault();
    let date = new Date();
    let dayNow = date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear()

    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${inpCity.value}&appid=067a5a41e175754ba7331c7667ad14a8`)
        .then((response) => {
            let data = response.data;
            console.log(data.coord.lat);
            console.log(data.coord.lon);
            if (data.length == 0) {
                alert('Không hợp lệ!');
                return
            }
            const lat = data.coord.lat;
            const lon = data.coord.lon;

            return axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=067a5a41e175754ba7331c7667ad14a8&units=Metric`)
        })
        .then((response) => {
            if (response != false) {
                let data = response.data;
                console.log(data);
                let weatherDescription = data.weather.map((weather) => {
                    return weather.description
                })
                address.innerHTML = `${data.name}, ${data.sys.country}`
                day.innerHTML = dayNow
                temp.innerHTML = `${data.main.feels_like}<sup>o</sup>C`;
                humidity.innerHTML = `${data.main.humidity}%`
                wind.innerHTML = `${data.wind.speed}m/s`;
                description.innerHTML = `${weatherDescription}, ${data.main.temp_min}<sup>o</sup> - ${data.main.temp_max}<sup>o</sup>`
            }
        })
}

// function submit_form(e) {
//     e.preventDefault();
//     let data;
//     let date = new Date();
//     let dayNow = date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear()
//     axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${inpCity.value}&appid=067a5a41e175754ba7331c7667ad14a8`)
//         .then((response) => {
//             data = response.data;
//             // console.log(data.coord.lat);
//             // console.log(data.coord.lon);

//             // axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${data.coord.lat}&lon=${data.coord.lon}&appid=067a5a41e175754ba7331c7667ad14a8&units=Metric`)
//             // .then((response) => {
//             // data = response.data;
//             console.log(data);
//             let weatherDescription = data.weather.map((weather) => {
//                 return weather.description
//             })

//             address.innerHTML = `${data.name}, ${data.sys.country}`
//             day.innerHTML = dayNow
//             temp.innerHTML = `${data.main.feels_like}<sup>o</sup>C`;
//             humidity.innerHTML = `${data.main.humidity}%`
//             wind.innerHTML = `${data.wind.speed}m/s`;
//             description.innerHTML = `${weatherDescription}, ${data.main.temp_min}<sup>o</sup> - ${data.main.temp_max}<sup>o</sup>`
//             // })
//         })
//     inpCity.value = ""
// }


