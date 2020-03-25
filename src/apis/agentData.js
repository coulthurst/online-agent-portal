import axios from 'axios';

export default axios.create({
    baseURL: 'http://testapps.nmblife.org/AgentDashSvc/AgtDash.svc/dashboardInfo/'
})