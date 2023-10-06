import axios from 'axios'
const domain = "https://fusion-delight-server-backend-2-0.onrender.com";

export const addOrderHandler =async (payload)=>{
    try{
        const response = await axios.post(`${domain}/api/order/add-order`,payload);
  
        return response.data;
    }
    catch (err){
        console.log(err.message);
    }
}

export const statusHandler =async (payload,id)=>{
    try{
        const response = await axios.put(`${domain}/api/order/update-status/${id}`,payload);
        return response.data;
    }
    catch (err){
        console.log(err.message);
    }
}

export const deliveryInfoHandler =async (payload,id)=>{
    try{
        const response = await axios.put(`${domain}/api/order/update-delivery-info/${id}`,payload);
     
        return response.data;
    }
    catch (err){
        console.log(err.message);
    }
}


export const emailHandler =async (id)=>{
    try{
        const response = await axios.put(`${domain}/api/order/send-confirmation-email/${id}`);
       
        return response.data;
    }
    catch (err){
        console.log(err.message);
    }
}





export const deleteOrderHandler =async (id)=>{
    try{
        const response = await axios.delete(`${domain}/api/order/delete-order/${id}`);

        return response.data;
    }
    catch (err){
        console.log(err.message);
    }
}

export const specificOrderHandler =async (payload,id)=>{
    try{
        const response = await axios.get(`${domain}/api/order/specific-user-order/${id}`,payload);

        return response.data;
    }
    catch (err){
        console.log(err.message);
    }
}


export const allOrdersHandler =async ()=>{
    try{
        const response = await axios.get(`${domain}/api/order/all-orders`);

        return response.data;
    }
    catch (err){
        console.log(err.message);
    }
}
