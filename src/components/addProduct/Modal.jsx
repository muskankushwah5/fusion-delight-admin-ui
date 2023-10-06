import React, { useState } from 'react';
import "./addProduct.css";
import { addDishHandler } from '../../services/dishApi';
import toast from 'react-hot-toast';

function Modal(props) {
  const { show, handleClose, title, content } = props;
  const [selectedImage, setSelectedImage] = useState(null);
  const [Image, setImage] = useState(null);
  const [labels, setLabels] = useState([]);
  const [name, setName] = useState("");
  const [cuisine, setCuisine] = useState("thai");
  const [type, setType] = useState("starter");
  const [prize, setPrize] = useState(0);
  const [description, setDescription] = useState("");
  const [choices, setChoices] = useState([]); // State for choices

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    if (file) {
      // Create a blob URL for the selected file
      const blobUrl = URL.createObjectURL(file);
      setSelectedImage(blobUrl); // Set selectedImage state with blob URL
    }
  };

  // Function to handle adding a label and prize
  const addLabelAndPrize = () => {
    // Add a new choice to the choices array
    setChoices([...choices, { choise_type: '', choise_prize: '' }]);
  };

  // Function to handle changing a label
  const handleLabelChange = (index, e) => {
    const updatedChoices = [...choices];
    updatedChoices[index] = { ...updatedChoices[index], choise_type: e.target.value };
    setChoices(updatedChoices);
  };

  // Function to handle changing a prize
  const handlePrizeChange = (index, e) => {
    const updatedChoices = [...choices];
    updatedChoices[index] = { ...updatedChoices[index], choise_prize: e.target.value };
    setChoices(updatedChoices);
  };

  const addHandler = async () => {
    try {
      const choicesArray = choices.map((input, index) => ({
      choice_type: input.choise_type,
      choice_prize: input.choise_prize,
      }));
  
      const choicesString = JSON.stringify(choicesArray);
  
      const form = new FormData();
      form.append("title", name);
      form.append("description", description);
      form.append("cuisine_type", cuisine);
      form.append("dish_type", type);
      form.append("choices", choicesString); // Append the choices as a comma-separated string
      form.append("prize", prize);
      form.append("image", Image);

      console.log(form);

      toast.loading("adding ...");

      const response = await addDishHandler(form);

      if (!response) {
        toast.error("Try Again");
      } else {
        toast.success("Successfully added");
        handleClose();
      }
    } catch (err) {
      toast.error('Error submitting form:', err);
    }
    toast.dismiss();
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
            <div style={{ display: "flex", flexDirection: "row", marginLeft: "26%", marginBottom: "4%" ,marginTop:"4%"}}>
              <label style={{ fontSize: "16px", color: "#007bff", fontWeight: "bold" }}>Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={{ borderColor: "#007bff", borderWidth: "2px", borderStyle: "solid", marginLeft: "4%", borderRadius: "24px" }}
              />
            </div>
            <div style={{ display: "flex", flexDirection: "row", marginLeft: "25%", marginBottom: "4%" }}>
              <label style={{ fontSize: "16px", color: "#007bff", fontWeight: "bold" }}>Cuisine</label>
              <select
                value={cuisine}
                onChange={(e) => setCuisine(e.target.value)}
                style={{
                  borderColor: "#007bff",
                  borderWidth: "2px",
                  borderStyle: "solid",
                  marginLeft: "4%",
                  borderRadius: "24px",
                  width: "42%",
                  color: "#007bff"
                }}
              >
                <option value="thai" style={{ paddingLeft: "10%" }}>Thai</option>
                <option value="indian">Indian</option>
                <option value="labenese">Labenese</option>
              </select>
              <label style={{ fontSize: "16px", color: "#007bff", fontWeight: "bold", marginLeft: "4%" }}>Type</label>
              <select
                value={type}
                onChange={(e) => setType(e.target.value)}
                style={{
                  borderColor: "#007bff",
                  borderWidth: "2px",
                  borderStyle: "solid",
                  marginLeft: "1%",
                  borderRadius: "24px",
                  width: "42%",
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
            <div style={{ display: "flex", flexDirection: "row", marginLeft: "16%", marginBottom: "4%" }}>
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
                    value={choice.choise_type}
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
                    value={choice.choise_prize}
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
                onClick={addLabelAndPrize}
                style={{
                  backgroundColor: "#007bff",
                  color: "white",
                  fontSize: "12px",
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
                  fontSize: "12px",
                  borderStyle: "solid",
                  borderColor: "#111e88",
                  borderWidth: "3px",
                  borderRadius: "12px",
                  marginTop: "4%",
                  width: "30%",
                  marginLeft: "30%"
                }}
                onClick={addHandler}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
