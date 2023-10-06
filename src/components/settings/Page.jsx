import React, { useState } from 'react';
import Modal from './Modal';

function Page() {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div style={{display:"flex",flexDirection:"column"}}>
     <h2>Click here to Update Profile</h2>
      <button 
      onClick={handleShowModal}
      style={{color:"black",backgroundColor:"white",fontSize:"24px",borderStyle:"dotted",borderColor:"#111e88",borderWidth:"3px",borderRadius:"12px",marginTop:"4%",width:"30%",marginLeft:"30%"}}
      > + Update Profile</button>
      {showModal && (
        <Modal
          show={showModal}
          handleClose={handleCloseModal}
          title="Update Profile"
        />
      )}
    </div>
  );
}

export default Page;
