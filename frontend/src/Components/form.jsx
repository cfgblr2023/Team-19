import React, { useState } from 'react';
import './form.css';
import formNav from "./form-nav";
import Navbar from './form-nav';
import axios from 'axios';

const IssueForm = () => {
   
  const [data,setData]=useState({})

  const [wardNo, setWardNo] = useState('');
  const [issueType, setIssueType] = useState('');
  const [address, setAddress] = useState('');
  const [photo, setPhoto] = useState(null);
  const [video, setVideo] = useState(null);

  // function for handling change

  const handleWardNoChange = (event) => {
    setWardNo(event.target.value);
  };

  const handleIssueTypeChange = (event) => {
    setIssueType(event.target.value);
  };

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const handlePhotoUpload = (event) => {
    const file = event.target.files[0];
    setPhoto(file);
  };

  const handleVideoUpload = (event) => {
    const file = event.target.files[0];
    setVideo(file);
  };

  const handleSubmit = async(event) => {
    event.preventDefault();
    
     // converting file to form data
     const data=new FormData()
     data.append("file",photo)
     
     // uploading to cloudinary
     data.append("upload_preset","upload")

     try{
      const uploadRes=await axios.post("https://api.cloudinary.com/v1_1/dzv4luexe/image/upload",data)
       const {url}=uploadRes.data 
       console.log("url",url)
     }
     catch(err){
         console.log(err)
     }

    const photoUrl="photourl";
    
    const damagedRoad={"name":wardNo,"damageType":issueType,"picture":photoUrl}

    // Perform submission logic here, e.g., send data to server
   
    try{
   const r= await axios.post("/road",damagedRoad)
   console.log(r.data._id)
   const rId=r.data._id
   

    // posting this data to individual ward

    const ward=await axios.post("/ward",{name:wardNo,roadId:rId})

    console.log(`Damaged road added successfully ${wardNo}`)
    }
    catch(err){
      console.log(err)
    }

    // Reset form fields
    setWardNo('');
    setIssueType('');
    setAddress('');
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
      <div className="form-heading"><h1>Issue Form</h1></div>
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
        <label htmlFor="issueType">Type of Issue:</label>
        <select
          id="issueType"
          value={issueType}
          onChange={handleIssueTypeChange}
        >
          <option value="">Select an issue type</option>
          <option value="1">Garbage</option>
          <option value="2">Road </option>
          {/* Add more options as needed */}
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="address">Address:</label>
        <textarea id="address" value={address} onChange={handleAddressChange} />
      </div>

      <div className="form-group">
        <label htmlFor="photo">Upload Photo:</label>
        <input type="file" id="photo" onChange={handlePhotoUpload} />
      </div>

      <div className="form-group">
        <label htmlFor="video">Upload Video:</label>
        <input type="file" id="video" onChange={handleVideoUpload} />
      </div>

      <button type="submit" className="submit-button">Submit</button>
    </form>
    </div>
    </div>
  );
};

export default IssueForm;