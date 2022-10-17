const tempM= document.querySelector('#tempC');
const tempm= document.querySelector('#tempF');
const img= document.getElementById('imgg');
const windd = document.querySelector('#wind');
const viz= document.querySelector('#viz');
const city=document.querySelector('#city');
const temp_now=document.querySelector('#temp_now');
window.addEventListener('load', () => {

    let long;
    let lat;

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition((position) => {
          long=position.coords.longitude;
          lat=position.coords.latitude;

          const base=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=f9a8258ee1f8c4be095e69556ec5fd35&units=metric`;
          fetch(base)
            .then((Response) =>{
              return Response.json();
            })
            .then((data) =>{
              console.log(data);
              const temp_n=data.main.temp;
              const temp_m = data.main.temp_max;
              const temp_M = data.main.temp_min;
              const place= data.name;
              const { description, icon } = data.weather[0];
              const visibility= data.visibility;
              const wind = data.wind.speed;
              
              
              const iconUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`;
              temp_now.textContent = `Right now it is ${temp_n.toFixed(2)} C`
              tempC.textContent = `The maximum temperature is ${temp_m.toFixed(2)} C`;
              tempF.textContent = `The minimum temperature is ${temp_M.toFixed(2)}  C`;
              img.src=iconUrl;
              windd.textContent = `The wind is: ${wind}`;
              viz.textContent = `Visibility is: ${visibility}m`;
              city.textContent=`The weather in ${place}: `;

            })

        })

    }
  })
function manual_search( ){
  const location=document.getElementById("search_city").value;

  const location_api=`http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=f9a8258ee1f8c4be095e69556ec5fd35&units=metric`;
  fetch(location_api)
  .then((Response) =>{
    return Response.json();
  })
  .then((data)=>{
    console.log(data);
    const temp_m = data.main.temp_max;
    const temp_M = data.main.temp_min;
    const place= data.name;
    const {  icon } = data.weather[0];
    const visibility= data.visibility;
    const wind = data.wind.speed;
    
    
    const iconUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`;

    tempC.textContent = `The maximum temperature is ${temp_m.toFixed(2)} C`;
    tempF.textContent = `The minimum temperature is ${temp_M.toFixed(2)}  C`;
    img.src=iconUrl;
    windd.textContent = `The wind is: ${wind}`;
    viz.textContent = `Visibility is: ${visibility}m`;
    city.textContent=`The weather in ${place}: `;
  })
  var form = document.getElementById("form");
  function handleForm(event) { event.preventDefault(); } 
  form.addEventListener('submit', handleForm);

}




