//import './App.css';
import './index-style.css';

function App() {
  var city = "Aracaju"

  const url = "https://api.openweathermap.org/data/2.5/weather?"
  const apiKey = "7453c886c1d4cedc457664da1b118841"

  async function getData() {
    if (city != null || undefined){
      const respose = await fetch(url + `q=${city}&` + `appid=${apiKey}`)
      .then(async function fetchStateOk(resp){
        if (resp.ok == true){
          const data = await resp.json()
          console.log(data)
          const container = document.querySelector('.container')
          container.innerHTML = container.innerHTML + `<p>${data.name}'s current temperature:</p>`
          container.innerHTML = container.innerHTML + `<h2>${(data.main.temp / 10).toFixed(2)}°C</h2>`
        }else{
          const container = document.querySelector('.container')
          container.innerHTML = container.innerHTML + `<p>${city} isn't a valid city</p>`
        }
      })
    }
  }
  getData()

  return (
    <div class="container">
        <h1>{city ?? "No city informed."}</h1>
            </div>
  );
}

export default App;
