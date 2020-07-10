import axios from 'axios'
import { API } from 'config/api'
import logger from './logger'

const request_custom = axios.create()

request_custom.interceptors.request.use(
  config => {
    config.baseURL = API
    // config.params= {

    // }
    // const url = config.url;
    // const checkJwt = jwtRequiredList.findIndex(jwt => url.includes(jwt));

    // if (checkJwt >= 0 && globalConfig.getToken()) {
    //   config.headers = {
    //     Authorization: `Bearer ${globalConfig.getToken()}`,
    //   };
    // } else {
    //   config.params = {
    //     consumer_key: configApi.CONSUMER_KEY,
    //     consumer_secret: configApi.CONSUMER_SECRET,
    //   };
    // }
    return config
  },
  error => Promise.reject(error)
)

request_custom.interceptors.response.use(
  function(response) {
    const { data } = response
    // if (Platform.OS === 'android' && typeof data === 'string') {
    //   data = data.replace(/\r?\n/g, '').replace(/[\u0080-\uFFFF]/g, '');
    //   data = JSON.parse(data);
    // }

    return data
  },
  function(error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      return Promise.reject(error.response.data)
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
      return Promise.reject(error.request)
    } else {
      // Something happened in setting up the request that triggered an Error
      return Promise.reject(error)
    }
  }
)
export default request_custom
