import React, { useState } from "react";
import "./form.css";

import Navbar from "./form-nav";
import axios from "axios";

const IssueForm = () => {
  const [wardNo, setWardNo] = useState("");
  const [issueType, setIssueType] = useState("");
  const [address, setAddress] = useState("");
  const [photo, setPhoto] = useState(null);
  const [video, setVideo] = useState(null);
  
  const handleWardNoChange = (event) => {
    setWardNo(event.target.value);
  };

  const handleIssueTypeChange = (event) => {
    setIssueType(event.target.value);
  };

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const d={'0':'Encroachment','1':'Obstruction','2':'Unsafe Zone','3':'Waste','4':'Broken Footpath'}

  const handlePhotoUpload = async (event) => {
    console.log("IN")
    const file = event.target.files[0];
     setPhoto(file);
    const formData = new FormData();
    formData.append("image", file);
   await axios.post("http://localhost:5000/test", formData).then(
      (response) => {
       const result = response;
        try{
          console.log(d[result.data.prediction])
          setIssueType(d[result.data.prediction])
          console.log(result);
        }catch(err){
            console.log(err)
        }

      },
      (error) => {
        console.log(error);
      }
    );

    
  };

  const handleVideoUpload = (event) => {
    const file = event.target.files[0];
    setVideo(file);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    

    // Perform submission logic here, e.g., send data to server

    // Reset form fields
    setWardNo("");
    setIssueType("");
    setAddress("");
    setPhoto(null);
    setVideo(null);
  };

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="outer-div">
        <form onSubmit={handleSubmit} className="issue-form">
          <div className="form-heading">
            <h1>Issue Form</h1>
          </div>
          <div className="form-group">
            <label htmlFor="wardNo">Ward No:</label>
            <input
              type="text"
              id="wardNo"
              value={wardNo}
              onChange={handleWardNoChange}
            />
          </div>


          <div className="form-group">
            <label htmlFor="address">Address:</label>
            <textarea
              id="address"
              value={address}
              onChange={handleAddressChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="photo">Upload Photo:</label>
            <input type="file" id="photo" onChange={handlePhotoUpload} />
          </div>

          
          <div className="form-group">
            <label htmlFor="issueType">Type of Issue:</label>
            <input type="text"
              id="issueType"
              value={issueType}
              // onSu={handlePhotoUpload}
            >
              {/* <option value="">Select an issue type</option>
              <option value="1">Garbage</option>
              <option value="2">Road </option> */}
              {/* Add more options as needed */}
            </input>
          </div>

          <div className="form-group">
            <label htmlFor="video">Upload Video:</label>
            <input type="file" id="video" onChange={handleVideoUpload} />
          </div>

          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default IssueForm;
