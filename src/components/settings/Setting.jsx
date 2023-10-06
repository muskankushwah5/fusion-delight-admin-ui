import React from 'react'
import Sidebar from '../sidebar/Sidebar'
import Page from './Page'

const Setting = () => {
    return (
        <div style={{display:"flex",flexDirection:"row"}}>
        <div style={{width:"16%"}}>
            <Sidebar/>
        </div>
        <div style={{width:"80%",marginTop:"0px",display:"flex",flexDirection:"column",margin:"2%"}}>
           <Page/>
            </div>
        </div>
    )
}

export default Setting