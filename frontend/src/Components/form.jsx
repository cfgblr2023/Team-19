import React, { useState } from 'react';
import './form.css';

const IssueForm = () => {
  const [wardNo, setWardNo] = useState('');
  const [issueType, setIssueType] = useState('');
  const [address, setAddress] = useState('');
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

  const handlePhotoUpload = (event) => {
    const file = event.target.files[0];
    setPhoto(file);
  };

  const handleVideoUpload = (event) => {
    const file = event.target.files[0];
    setVideo(file);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform submission logic here, e.g., send data to server

    // Reset form fields
    setWardNo('');
    setIssueType('');
    setAddress('');
    setPhoto(null);
    setVideo(null);
  };

  return (
    <form onSubmit={handleSubmit} className="issue-form">
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
  );
};

export default IssueForm;