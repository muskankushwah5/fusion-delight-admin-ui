import axios from 'axios'
const domain = "https://fusion-delight-server-backend-2-0.onrender.com";

export const addDishHandler =async (payload)=>{
    try{
        const response = await axios.post(`${domain}/api/add-dish`,payload,
       { headers: { 'Content-Type': 'multipart/form-data' }},
    );
        return response.data;
    }
    catch (err){
        console.log(err.message);
    }
}

export const updateDishHandler =async (payload,id)=>{
    try{
        const response = await axios.put(`${domain}/update-dish/${id}`,payload);

        return response.data;
    }
    catch (err){
        console.log(err.message);
    }
}




export const deleteDishHandler =async (id)=>{
    try{
        const response = await axios.delete(`${domain}/api/dish/delete-dish/${id}`);

        return response.data;
    }
    catch (err){
        console.log(err.message);
    }
}




export const allDishesHandler =async ()=>{
    try{
        const response = await axios.get(`${domain}/api/dish/all-dishes`);
    
        return response.data;
    }
    catch (err){
        console.log(err.message);
    }
}
