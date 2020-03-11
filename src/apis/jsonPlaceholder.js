import axios from 'axios';

export default axios.create({
    baseURL: 'https://my-json-server.typicode.com/coulthurst/dashboardDB/'
})

// baseURL will be the api entry point