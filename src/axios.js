import axios from 'axios'
const instance = axios.create({
    baseURL: 'https://apni-kaksha-29.herokuapp.com'

});


export default instance;