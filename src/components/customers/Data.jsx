import React from 'react'
import "./Data.css"

  
const RecentInfo = ({data}) => {
  return (
    <div className='main-div'>
    <table>
    <thead>
      <tr>
        <th style={{fontSize:"24px",padding:"3%",fontWeight:"bold"}}>UserName</th>
        <th style={{fontSize:"24px",padding:"3%",fontWeight:"bold"}}>UserEmail</th>
        <th style={{fontSize:"24px",padding:"3%",fontWeight:"bold"}}>UserNumber</th>
        <th style={{fontSize:"24px",padding:"3%",fontWeight:"bold"}}>UserAddress</th>
      </tr>
    </thead>
    <tbody>
        {data?.map((user,index) => (
            <tr key={index} style={{borderBottomWidth:"1px",borderBottomColor:"lightgray",borderBottomStyle:"solid",fontSize:"16px",paddingRight:"2%",paddingLeft:"2%"}}>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.phone}</td>
            <td>{user.address}</td>
            </tr>
        ))}
    </tbody>
    </table>
    </div>
  )
}

export default RecentInfo;