import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)
const apikey = '5023ae2f33d8b8c11145724f85a6c15e'

export default new Vuex.Store({
  state: {
    location: {
      main: {},
      wind: {},
      clouds: {},
      country: "",
      sys: {},
      weather: [{
        main: "",
        description: "",
      }],
    },

    forecast: {
      city: {},
      list: []
    }
  },
  mutations: {
    location(state, loc) {
      state.location = loc
    },

    forecast(state, loc) {
      state.forecast = loc
    },
  },
  actions: {
    async searchLoc({ commit }, query) {
      const url = 'http://api.openweathermap.org/data/2.5/weather?q=' + query + '&appid=' + apikey

      axios.post(url).then(({ data }) => {        
        commit('location', data)

        return Promise.resolve()
      }).catch(() => {})
    },

    async searchF({ commit }, query) {
      const url = 'http://api.openweathermap.org/data/2.5/forecast?q=' + query + '&appid=' + apikey

      axios.post(url).then(({ data }) => {      
        commit('forecast', data)

        return Promise.resolve()
      }).catch(() => {})
    }
  },
  getters: {
    currentWeather: state => ({
      temp: {
        kelvin: {
          number: state.location.main.temp,
          mark: 'K'
        },
        celsuium: {
          number: state.location.main.temp - 273.15,
          mark: '°C'
        },
        fahrenheit: {
          number: (state.location.main.temp - 273.15) * 9 / 5 + 32,
          mark: '°F'
        },
      },
      feel: {
        kelvin: {
          number: state.location.main.feels_like,
          mark: 'K'
        },
        celsuium: {
          number: state.location.main.feels_like - 273.15,
          mark: '°C'
        },
        fahrenheit: {
          number: (state.location.main.feels_like - 273.15) * 9 / 5 + 32,
          mark: '°F'
        },
      },
      humidity: {
        number: state.location.main.humidity,
        mark: '%'
      },
      wind: {
        ms: {
          number: state.location.wind.speed,
          mark: 'm/s'
        },
        kmh: {
          number: state.location.wind.speed,
          mark: 'km/h'
        }
      },
      clouds: {
        number: state.location.clouds.all,
        mark: '%'
      },
    }),

    location: state => ({
      name:  state.location.name,
      country: state.location.sys.country,
      weather: state.location.weather[0].main,
      description: state.location.weather[0].description
    }),

    forecast: state => ({
      forecast: state.forecast
    })
  }
})
