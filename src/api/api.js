import axios from "axios";

const API_BASE_URL="http://localhost:5000";

console.log("API_BASE_URL:", API_BASE_URL);

export const getPosts = async () =>{
    try{
        const response = await axios.get(`${API_BASE_URL}/posts`);
        return response.data;
    }
    catch(err){
        console.log("Error registering user:", err);
        throw err;
    }
}