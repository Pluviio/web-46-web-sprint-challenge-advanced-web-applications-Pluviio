// import axios from "axios";


// const axiosWithAuth = () => {
//     const token = localStorage.getItem("token");

//     return axios.create({
//         headers: {
//             authorization: token,
//             // 'Access-Control-Allow-Origin': '*',
//             // 'Content-Type': 'application/json'
//         },
//         baseURL: 'http://localhost:5000/api'
//     });
// }

// export default axiosWithAuth;

import axios from "axios";

const axiosWithAuth = () => {
    
    const token = localStorage.getItem('token')
    console.log(token)
    return axios.create({
        headers:{
            Authorization: token
        }
    
    })
}
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.withCredentials = true;
axios.defaults.crossDomain = true;

export default axiosWithAuth;

//Task List:
//Build and export a function used to send in our authorization token