<template>
  <div id="app" :class="typeof weather.main != 'undefined' && weather.main.temp > 16 ? 'sunny' : ''">
    <main>
      <div class="search-box">
        <input 
        type="text" 
        class="search-bar"
        placeholder="Pesquisar"
        v-model="query"
        @keypress="fetchWeather"
        >
      </div>

      <div class="weather-container" v-if="typeof weather.main != 'undefined'">
        <div class="location-content">
            <div class="location">{{ weather.name }} - {{ weather.sys.country }}</div>
            <div class="date">{{ dateBuilder() }}</div>
        </div>

        <div class="weather-box">
          <div class="temp">{{ Math.round(weather.main.temp) }}°c</div>
          <div class="weather">{{ weather.weather[0].main }}</div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      api_key: '24fd1dbe46bdb2c9e1e1dfa4d7677dd9',
      url_base: 'http://api.openweathermap.org/data/2.5/',
      query: '',
      weather: {}
    }
  },

  methods: {
    fetchWeather (e) {
      if (e.key == 'Enter') {
        fetch(`${this.url_base}weather?q=${this.query}&units=metric&lang=pt_br&APPID=${this.api_key}`)
          .then(res => {
            return res.json();
          }).then(this.setResults);
      }
    },

    setResults (results) {
      this.weather = results;
    },

    dateBuilder () {
      let d = new Date();
      let months = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
      let days = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Sexta-feira", "Sábado"];

      let day  = days[d.getDay()];
      let date = d.getDate();
      let month = months[d.getMonth()];
      let year = d.getFullYear();

      return `${day}, ${date}, ${month}, ${year}`;
    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  background: url('./assets/cold.jpg');
  background-size: cover;
  background-position: bottom;
  background-repeat: no-repeat;
  transition: 0.5s;
}

#app.sunny {
  background: url('./assets/sun.jpg');
}

#app.cold {
  background: url('./assets/cold.jpg');
}

main {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: linear-gradient(to bottom, rgba(0,0,0,0.25), rgba(0,0,0,0.75));
  padding: 1.563rem;
}

.search-box {
  width: 20%;
  margin-bottom: 1.875rem;
}

.search-box .search-bar {
  width: 100%;
  display: block;
  padding: 0.938rem;
  font-size: 1.25rem;
  color: #313131;
  appearance: none;
  border: none;
  outline: none;
  background: none;
  background-color: rgba(255,255,255,0.5);
  box-shadow: 0px 0px 8px rgba(0,0,0,0.25);
  border-radius: 0px 15px 0px 15px;
  transition: 0.5s;
}

.search-box .search-bar:focus {
  box-shadow: 0px 0px 15px rgba(0,0,0,0.25);
  background-color: rgba(255,255,255,0.75);
  border-radius: 15px 0px 15px 0px;
}

.location-content .location {
  font-size: 1.875rem;
  font-weight: 500;
  color: #ffffff;
  text-align: center;
  text-shadow: 1px 3px rgba(0,0,0,0.25);
}

.location-content .date {
  font-size: 1.25rem;
  font-weight: 300;
  font-style: italic;
  color: #ffffff;
  text-align: center;
}

.weather-box {
  text-align: center;
}

.weather-box .temp {
  display: inline-block;
  font-size: 5rem;
  font-weight: 700;
  color: #ffffff;
  padding: 0.625rem 1.563rem;
  text-shadow: 3px 5px rgba(0,0,0,0.25);
  background-color: rgba(255,255,255,0.25);
  border-radius: 15px;
  margin: 1.875rem 0;
  box-shadow: 3px 5px rgba(0,0,0,0.25);
}

.weather-box .weather {
  font-size: 2.5rem;
  font-weight: 600;
  font-style: italic;
  color: #ffffff;
  text-shadow: 3px 5px rgba(0,0,0,0.25);
}

</style>
