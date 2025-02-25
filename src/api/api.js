import axios from "axios";

const API_BASE_URL="http://192.168.40.139:5000";


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

export const userVotes = async (postId, voteType) =>{
    try{
        const response = await axios.post(`${API_BASE_URL}/posts/vote`,{
            postId,
            voteType
        },
        {
            headers : {
                "Content-Type" : "application/json"
            }
        }
        );
        return response.data;
    }
    catch(err){
        console.log("Error voting :", err);
        throw err;
    }
}

export const userLogin = async (username, password)=>{
    try{
        const response = await axios.post(`${API_BASE_URL}/user/login`,{
            username,
            password
        },
        {
            headers : {
                "Content-Type" : "application/json"
            }
        }
        );
        return response.data;
    }
    catch(err){
        console.log("Error logging in :", err);
        throw err;
    }
}

export const userSignup = async (email, username, password )=>{
    try{
        const response = await axios.post(`${API_BASE_URL}/user`,{
            email,
            username,
            password
        })
        return response.data;
    }
    catch(err){
        console.log("Error creating user :", err);
        throw err;
    }
}

export const uploadImage = async (file) => {
    const formData = new FormData();
    formData.append("image", file);

    try {
        const response = await axios.post(`${API_BASE_URL}/upload`, formData, {
            headers: { 
                "Authorization": "Bearer " + localStorage.getItem("token"),
                "Content-Type": "multipart/form-data",
            },
        });
        console.log("Upload Success:", response.data);
        return response.data.url; 
    } catch (err) {
        console.error("Upload error:", err.response?.data || err.message);
        throw new Error("Image upload failed");
    }
};


export const createCommunity = async (name , banner, icon) =>{
    try{
        const response = await axios.post(`${API_BASE_URL}/community`, {
            name,
            banner,
            icon
        },
        {    headers: {
                "Authorization" : "Bearer " + localStorage.getItem("token"),
                "Content-Type": "application/json",
        },
        });
        return response.data;
    }
    catch (err) {
        console.error("Error creating community :", err);
        throw err;
    }
}

export const getCommunity = async (id) =>{
    try{
        const response = await axios.post(`${API_BASE_URL}/community/specific`,{
            id
        });
        return response.data;
    }
    catch (err) {
        console.error("Error fetching community :", err);
        throw err;
    }
}

export const getAllCommunity = async () =>{
    try{
        const response = await axios.get(`${API_BASE_URL}/community/all`);
        return response.data;
    }
    catch(err){
        console.error("Error fetching community list :", err);
        throw err;
    }
}

export const joinCommunity = async (communityId) =>{
    try{
        const response = await axios.post(`${API_BASE_URL}/community/join`,{
            communityId
        },
        
        {
            headers : {
                "Authorization" : "Bearer " + localStorage.getItem("token"),
                "Content-Type": "application/json",
            }
        })
        return response.data;
    }
    catch(err){
        console.error("Error joining community  :", err);
        throw err;
    }
}

export const createPost = async (communityId, title, content, image) =>{
    try{
        const response = await axios.post(`${API_BASE_URL}/posts`,{
            communityId,
            title,
            content,
            image
        },
        {    headers: {
                "Authorization" : "Bearer " + localStorage.getItem("token"),
                "Content-Type": "application/json",
            }
        })
        return response.data;
    }
    catch(err){
        console.error("Error creating post :", err);
        throw err;
    }
}

export const votePost = async (voteType, postId) =>{
    try{
        const response = await axios.post(`${API_BASE_URL}/posts/vote`,{
            voteType,
            postId
        },
        { headers: {
            "Authorization" : "Bearer " + localStorage.getItem("token"),
            "Content-Type": "application/json",
        }   
        });
        return response.data;
    }
    catch(err){
        console.error("Error voting in the post :", err);
        throw err;
    }
}