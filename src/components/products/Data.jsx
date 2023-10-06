import React from 'react';
import { deleteDishHandler } from '../../services/dishApi';

import "./Data.css";
import toast from 'react-hot-toast';

const RecentInfo = ({ data  ,setChange , setUserId}) => {
  const deleteHandler = async(id)=>{
    toast.loading("Deleting the dish ..");
    try{
      const response = await deleteDishHandler(id);
      if(!response){
        toast.error("Try Again Later");
      }
      else{
        toast.success("Successfully deleted");
        setChange(true);
      }
    }
    catch(err){
      toast.error(err);
    }
    toast.dismiss();
  }
  return (
    <div className='main-div' >
      <table>
        <thead>
          <tr>
            <th >Image</th>
            <th >Title</th>
            <th >Description</th>
            <th>Prize</th>
            <th >Choices</th>
            <th >Cuisine</th>
            <th >Dish</th>
            <th >Shipping</th>
            <th ></th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} >
              <td><img src={item.dishUrl} alt={item.title}/></td>
              <td>{item.title}</td>
              <td>{item.description}</td>
              <td>{item.prize}</td>
              <td>
                <select>
                  {item.choices.map((choice, choiceIndex) => (
                    <option key={choiceIndex}>{choice.choice_type}</option>
                  ))}
                </select>
              </td>
              <td>{item.cuisine_type}</td>
              <td>{item.dish_type}</td>
              <td>
                <button onClick={()=>setUserId(item._id)}>Update</button><span>{" "}</span>
                <button onClick={()=>deleteHandler(item._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RecentInfo;
