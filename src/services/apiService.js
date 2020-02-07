import axios from "axios"

let apiService1=

axios.create({
  baseUrl: 'https://pokeapi.co/api/v2',
  headers: {
    Pragma:'no-cache'
  }
})

export default apiService1