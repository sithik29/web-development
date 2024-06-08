import axios from 'axios';

const TEAMCONNECT_API_BASE_URL= "http://localhost:8080/api/v1";

   

const config = {
    headers:{
        'Authorization':`Bearer ${localStorage.getItem('token')}`,
        'Content-Type':'application/json'    
    }
  };

class UserService {
  
    createUser(user){
        return axios.post(TEAMCONNECT_API_BASE_URL + '/auth/register', user).then(res=>res.data);
    }

    loginUser(user){
        return axios.post(TEAMCONNECT_API_BASE_URL + '/auth/login' , user).then(res=>res.data);
    }

    adminLogin(user){
        return axios.post(TEAMCONNECT_API_BASE_URL + '/auth/login' , user).then(res=>res.data);
    }

    getAllUser(){
        return axios.get(TEAMCONNECT_API_BASE_URL+'/user/get',config).then(res => res.data)
    }
    getAllProjects(){
        return axios.get(TEAMCONNECT_API_BASE_URL+'/project/getAllProject',config).then(res => res.data)
    }

    getUserCount(){
        return axios.get(TEAMCONNECT_API_BASE_URL+"/user/getUserCount",config).then(res=>res.data);
    }

    getProjectCount(){
        return axios.get(TEAMCONNECT_API_BASE_URL+"/project/getProjectCount",config).then(res=>res.data);
    }
}

export default new UserService();