import axios from "axios";

export interface FetchResponse<T> {
    count: number;
    results: T[];
  }

export default axios.create({
    baseURL:"https://api.rawg.io/api",
    params:{
        key:"2e4e93a992c140d887498321a18541bf"
    }   
})