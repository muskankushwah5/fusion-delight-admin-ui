import React, { useState, useEffect } from 'react';
import "./UpdateModal.css";
import { updateDishHandler } from '../../services/dishApi';

function UpdateModal(props) {
  const { show, handleClose,setChange, title, dishData } = props;
  const [selectedImage, setSelectedImage] = useState(null);
  const [Image, setImage] = useState(null);
  const [name, setName] = useState("");
  const [cuisine, setCuisine] = useState("thai");
  const [type, setType] = useState("starter");
  const [prize, setPrize] = useState(0);
  const [description, setDescription] = useState("");
  const [choices, setChoices] = useState([]);
  const [isImageChanged, setIsImageChanged] = useState(false);

  useEffect(() => {
    // Initialize form fields with existing data (dishData)
    if (dishData) {
      setName(dishData.title);
      setCuisine(dishData.cuisine_type);
      setSelectedImage(dishData.dishUrl);
      setImage(dishData.dishUrl);
      setType(dishData.dish_type);
      setPrize(dishData.prize);
      setDescription(dishData.description);
      setChoices(dishData.choices || []);
    }
  }, [dishData]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setIsImageChanged(true);

    if (file) {
      const blobUrl = URL.createObjectURL(file);
      setSelectedImage(blobUrl);
    }
  };

  const handleLabelChange = (index, e) => {
    const updatedChoices = [...choices];
    updatedChoices[index] = { ...updatedChoices[index], choice_type: e.target.value };
    setChoices(updatedChoices);
  };

  const handlePrizeChange = (index, e) => {
    const updatedChoices = [...choices];
    updatedChoices[index] = { ...updatedChoices[index], choice_prize: e.target.value };
    setChoices(updatedChoices);
  };

  const updateHandler = async () => {
    try {
      const choicesArray = choices.map((choice) => ({
        choice_type: choice.choice_type,
        choice_prize: choice.choice_prize,
      }));

      const formData = new FormData();
      formData.append("title", name);
      formData.append("description", description);
      formData.append("cuisine_type", cuisine);
      formData.append("dish_type", type);
      formData.append("choices", JSON.stringify(choicesArray));
      formData.append("prize", prize);

      if (isImageChanged) {
        formData.append("image", Image);
      }

      // Send the updated data to the backend
      const response = await updateDishHandler(formData, dishData._id);

      if (!response) {
        alert("Update failed. Please try again.");
      } else {
        alert("Successfully updated");
        setChange(true);
        handleClose();
      }
    } catch (err) {
      console.error('Error updating dish:', err);
    }
  };

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
          <div className="modal-body" style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", flexDirection: "row", marginLeft: "26%", marginBottom: "4%" }}>
              <label style={{ fontSize: "16px", color: "#007bff", fontWeight: "bold" }}>Upload Image</label>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                style={{ display: "none" }}
                id="imageUploadInput"
              />
              <label
                htmlFor="imageUploadInput"
                className="upload-label"
                style={{
                  borderColor: "#007bff",
                  borderWidth: "2px",
                  borderStyle: "solid",
                  marginLeft: "4%",
                  borderRadius: "24px",
                  padding: "6px 12px",
                  cursor: "pointer",
                  color: "#007bff"
                }}
              >
                Choose Image
              </label>
            </div>
            {selectedImage && (
              <div style={{ textAlign: "center" }}>
                <img src={selectedImage} alt="Selected" style={{ maxWidth: "100%", maxHeight: "200px" }} />
              </div>
            )}
            
            {/* Rest of your form */}
            <div style={{ display: "flex", flexDirection: "row", marginLeft: "26%", marginBottom: "4%" , marginTop:"2%" }}>
              <label style={{ fontSize: "16px", color: "#007bff", fontWeight: "bold" }}>Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={{ borderColor: "#007bff", borderWidth: "2px", borderStyle: "solid", marginLeft: "4%", borderRadius: "24px" }}
              />
            </div>
            <div style={{ display: "flex", flexDirection: "row" , marginLeft:"36%" ,marginBottom:"4%" }}>
             <select
                value={cuisine}
                onChange={(e) => setCuisine(e.target.value)}
                style={{
                  borderColor: "#007bff",
                  borderWidth: "2px",
                  borderStyle: "solid",
                  borderRadius: "24px",
                  marginRight:"40%",
                  marginRight:"4%",
                  width: "42%",
                  color: "#007bff"
                }}
              >
                <option value="thai" style={{ paddingLeft: "10%" }}>Thai</option>
                <option value="indian">Indian</option>
                <option value="labenese">Labenese</option>
              </select>
              <select
                value={type}
                onChange={(e) => setType(e.target.value)}
                style={{
                  borderColor: "#007bff",
                  borderWidth: "2px",
                  borderStyle: "solid",
                  borderRadius: "24px",
                  width: "42%",
                  height:"60%",
                  color: "#007bff"
                }}
              >
                <option value="starter" style={{ paddingLeft: "10%" }}>Starter</option>
                <option value="main">Main</option>
                <option value="drinks">Drink</option>
              </select>
            </div>
            <div style={{ display: "flex", flexDirection: "row", marginLeft: "28%", marginBottom: "4%" }}>
              <label style={{ fontSize: "16px", color: "#007bff", fontWeight: "bold" }}>Prize</label>
              <input
                type="number"
                value={prize}
                onChange={(e) => setPrize(e.target.value)}
                style={{ borderColor: "#007bff", borderWidth: "2px", borderStyle: "solid", marginLeft: "4%", borderRadius: "24px" }}
              />
            </div>
            <div style={{ display: "flex", flexDirection: "row", marginLeft: "16%", width : "100%" ,  marginBottom: "4%" }}>
              <label style={{ fontSize: "16px", color: "#007bff", fontWeight: "bold" }}>Description</label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                style={{
                  borderColor: "#007bff",
                  borderWidth: "2px",
                  borderStyle: "solid",
                  marginLeft: "4%",
                  borderRadius: "24px",
                  resize: "none",
                  paddingLeft:"2%",
                  paddingRight:"2%",
                  height:"60%",
                  width: "42%"
                }}
                rows="4"
                cols="50"
              ></textarea>
            </div>
            <div>
              <h5>Add Labels and Prizes</h5>
              {choices.map((choice, index) => (
                <div key={index} style={{ display: "flex", flexDirection: "row", marginBottom: "4%" }}>
                  <input
                    type="text"
                    value={choice.choice_type}
                    onChange={(e) => handleLabelChange(index, e)}
                    placeholder="Label"
                    style={{
                      borderColor: "#007bff",
                      borderWidth: "2px",
                      borderStyle: "solid",
                      marginLeft: "4%",
                      borderRadius: "24px",
                    }}
                  />
                  <input
                    type="text"
                    value={choice.choice_prize}
                    onChange={(e) => handlePrizeChange(index, e)}
                    placeholder="Prize"
                    style={{
                      borderColor: "#007bff",
                      borderWidth: "2px",
                      borderStyle: "solid",
                      marginLeft: "4%",
                      borderRadius: "24px",
                    }}
                  />
                </div>
              ))}
              <button
                style={{
                  backgroundColor: "#007bff",
                  color: "white",
                  fontSize: "16px",
                  borderStyle: "solid",
                  borderColor: "#111e88",
                  borderWidth: "2px",
                  borderRadius: "12px",
                  marginTop: "4%",
                  width: "20%",
                  marginLeft: "4%",
                }}
              >
                Add
              </button>
            </div>
            <div style={{ display: "flex", flexDirection: "row", marginLeft: "12%", marginBottom: "4%" }}>
              <button
                style={{
                  backgroundColor: "#007bff",
                  color: "white",
                  fontSize: "24px",
                  borderStyle: "solid",
                  borderColor: "#111e88",
                  borderWidth: "3px",
                  borderRadius: "12px",
                  marginTop: "4%",
                  width: "30%",
                  marginLeft: "30%"
                }}
                onClick={updateHandler}
              >
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpdateModal;
