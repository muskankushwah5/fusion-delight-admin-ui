import React from 'react';
import "./setting.css";

function Modal(props) {
  const { show, handleClose, title, content } = props;

  return (
    <div className={`modal ${show ? 'show' : ''}`}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{title}</h5>
            <button type="button" className="close" onClick={handleClose}>
              <span>&times;</span>
            </button>
          </div>
          <div className="modal-body" style={{display:"flex",flexDirection:"column"}}>
            <div style={{display:"flex",flexDirection:"row",marginLeft:"26%",marginBottom:"4%"}}>
                <label style={{fontSize:"16px",color:"#007bff",fontWeight:"bold"}}>Name</label>
                <input style={{borderColor:"#007bff",borderWidth:"2px",borderStyle:"solid",marginLeft:"4%",borderRadius:"24px"}}/>
             </div>
             <div style={{ display: "flex", flexDirection: "row", marginLeft: "25%", marginBottom: "4%" }}>
                <label style={{ fontSize: "16px", color: "#007bff", fontWeight: "bold" }}>Cuisine</label>
                <select
                    style={{
                    borderColor: "#007bff",
                    borderWidth: "2px",
                    borderStyle: "solid",
                    marginLeft: "4%",
                    borderRadius: "24px",
                    width:"42%",
                    color: "#007bff"
                    }}
                >
                    <option value="option1" style={{paddingLeft:"10%"}}>Thai</option>
                    <option value="option2">Indian</option>
                    <option value="option3">Labenese</option>
                </select>
                </div>

            <div style={{display:"flex",flexDirection:"row",marginLeft:"28%",marginBottom:"4%"}}>
                <label style={{fontSize:"16px",color:"#007bff",fontWeight:"bold"}}>Prize</label>
                <input type="number" style={{borderColor:"#007bff",borderWidth:"2px",borderStyle:"solid",marginLeft:"4%",borderRadius:"24px"}}/>
            </div>
            <div style={{ display: "flex", flexDirection: "row", marginLeft: "16%", marginBottom: "4%" }}>
                <label style={{ fontSize: "16px", color: "#007bff", fontWeight: "bold" }}>Description</label>
                <textarea
                    style={{
                    borderColor: "#007bff",
                    borderWidth: "2px",
                    borderStyle: "solid",
                    marginLeft: "4%",
                    borderRadius: "24px",
                    resize: "none",
                    width:"42% "// To disable resizing
                    }}
                    rows="4" // Specify the number of rows (adjust as needed)
                    cols="50" // Specify the number of columns (adjust as needed)
                ></textarea>
            </div>
            <div style={{ display: "flex", flexDirection: "row", marginLeft: "12%", marginBottom: "4%" }}>
            <button style={{backgroundColor:"#007bff",color:"white",fontSize:"24px",borderStyle:"solid",borderColor:"#111e88",borderWidth:"3px",borderRadius:"12px",marginTop:"4%",width:"30%",marginLeft:"30%"}}
            >Submit</button>
        </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;