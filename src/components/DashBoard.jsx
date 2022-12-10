import React from 'react'
import './DashBoard.css'
import profileImage from '../assets/userImage.png'

const DashBoard = () => {
  return (
    <div className="dashboard">
        <div className="profiler">
            <div className="profileWrapper"> 
                <div className="profileImage">
                   <img style={{padding:"0px"}}
                   src={profileImage}
                   />
                   
                </div>
                <div className="profileUserName">UserName</div>
            </div>
            
        </div>
        <div className="billArea">
          {/* {TODO  add here month or year based filter } */}
          <div className="billCard">
            <div className="billNumber">Bill Number</div>
            <div className="storeName">Store Name</div>
            <div className="amount">Amount</div>
          </div>
          <div className="billCard">
            <div className="billNumber">Bill Number</div>
            <div className="storeName">Store Name</div>
            <div className="amount">Amount</div>
          </div>
        </div>
    </div>
  )
}

export default DashBoard