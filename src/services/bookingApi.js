import axios from 'axios'
const domain = "https://fusion-delight-server-backend-2-0.onrender.com";

export const addBookingHandler =async (payload)=>{
    try{
        const response = await axios.post(`${domain}/api/booking/add-booking`,payload);

        return response.data;
    }
    catch (err){
        console.log(err.message);
    }
}

export const cancelBookingHandler =async (payload)=>{
    try{
        const response = await axios.post(`${domain}/api/booking/delete-booking`,payload);
        
        return response.data;
    }
    catch (err){
        console.log(err.message);
    }
}

export const updateTableHandler =async (payload,id)=>{
    try{
        const response = await axios.put(`${domain}/api/booking/update-table/${id}`,payload);
        
        return response.data;
    }
    catch (err){
        console.log(err.message);
    }
}



export const specificBookingHandler =async (id)=>{
    try{
        const response = await axios.get(`${domain}/api/booking/specific-booking/${id}`);
        return response.data;
    } 
    catch (err){
        console.log(err.message);
    }
}

export const allBookingHandler =async ()=>{
    try{
        const response = await axios.get(`${domain}/api/booking/get-booking`);
      
        return response.data;
    }
    catch (err){
        console.log(err.message);
    }
}
