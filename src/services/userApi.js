import axios from 'axios'
const domain = "https://fusion-delight-server-backend-2-0.onrender.com";
export const registerHandler =async (payload)=>{
    try{

        const response = await axios.post(`${domain}/api/user/signup`,payload);
    
        return response.data;
    }
    catch (err){
        alert(err.message);
    }
}

export const loginHandler =async (payload)=>{
    try{
        const response = await axios.post(`${domain}/api/user/login`,payload);
        return response.data;
    }
    catch (err){
        console.log(err.message);
        alert(err.message);
    }
}

export const chnagePasswordHandler =async (payload)=>{
    try{
        const response = await axios.post(`${domain}/api/user/change-password`,payload);
      
        return response.data;
    }
    catch (err){
        console.log(err.message);
    }
}

export const forgotPasswordHandler =async (payload)=>{
    try{
        const response = await axios.post(`${domain}/api/user/forgot-password`,payload);
    
        return response.data;
    }
    catch (err){
        console.log(err.message);
    }
}

export const updateUserHandler =async (payload,id)=>{
    try{
        const response = await axios.put(`${domain}/api/user/update-user/${id}`,payload);
       
        return response.data;
    }
    catch (err){
        console.log(err.message);
    }
}

export const allUsersHandler =async ()=>{
    try{
        const response = await axios.get(`${domain}/api/user/all-users`);
      
        return response.data;
    }
    catch (err){
        console.log(err.message);
    }
}
