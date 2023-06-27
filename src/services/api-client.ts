import axios from "axios";

export default axios.create({
    baseURL:"https://api.rawg.io/api",
    params:{
        key:"2e4e93a992c140d887498321a18541bf"
    }   
})