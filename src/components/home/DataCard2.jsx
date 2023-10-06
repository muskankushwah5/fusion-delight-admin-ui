import React from 'react'

import "../../App.css";
import RecentInfo from '../orders/Data'
import Sales from './Sales'

const DataCard2 = () => {
  return (
    <div className="insights second-home-div" >
    <div >
        <RecentInfo isHome={true}/>
    </div>
    <div >
        <Sales/>
    </div>
    </div>
  )
}

export default DataCard2