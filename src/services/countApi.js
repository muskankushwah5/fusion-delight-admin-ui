import axios from 'axios'
const domain = "https://fusion-delight-server-backend-2-0.onrender.com";
export const allDataHandler =async ()=>{
    try{
        const response = await axios.get(`${domain}/api/tableLengths`);
     
        return response.data;
    }
    catch (err){
        console.log(err.message);
    }
}

export const orderDataHandler =async ()=>{
    try{
        const response = await axios.get(`${domain}/api/orderDataMonthly`);
        
        return response.data;
    }
    catch (err){
        console.log(err.message);
    }
}

export const reservationDataHandler =async ()=>{
    try{
        const response = await axios.get(`${domain}/api/reservationCountMonthly`);
        
        return response.data;
    }
    catch (err){
        console.log(err.message);
    }
}

export const userDataHandler =async ()=>{
    try{
        const response = await axios.get(`${domain}/api/userCountsMonthly`);
        
        return response.data;
    }
    catch (err){
        console.log(err.message);
    }
}
