import axios from "axios";


const API_URL = "http://localhost:8000/house/";

const postHouse = (headline, description, location) => {
    return axios.post(API_URL + "addHouse", {
        headline,
        description,
        location
    });
}

const fetchHouses = () => {
    return axios.get(API_URL + "getHouse")
}

const postFavProperty = (headline, description, location) => {
    return axios.post(API_URL + "addFavProperty", {
        headline,
        description,
        location
    });
}

const fetchFavProperty = () => {
    return axios.get(API_URL + "getFavProperty")
}

const HouseService = {
    postHouse,
    fetchHouses,
    postFavProperty,
    fetchFavProperty
}

export default HouseService