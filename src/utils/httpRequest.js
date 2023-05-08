import axios from "axios";

const apiUrl = process.env.REACT_APP_BASE_URL;

const request = axios.create({
    baseURL: apiUrl
})

export const get = async (path, options ={}) =>{
    const response = await request.get(path, options);
    return response.data;
}

export default request;
