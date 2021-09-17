import axiosWithAuth from '../helpers/axiosWithAuth';

// const fetchColorService = () => {
//     axiosWithAuth()
//     .get('/colors')
//     .then(res => {
//       return res.data
//     })
//     .catch(err => {
//       console.log(err.response)
//     })
// }

// export default fetchColorService;

const fetchColorService = () => {
    return axiosWithAuth()
        .get('http://localhost:5000/api/colors')
}


export default fetchColorService;