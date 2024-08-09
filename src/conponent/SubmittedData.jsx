// SubmittedData.jsx
import React from 'react';
import { useLocation } from 'react-router-dom';

const SubmittedData = () => {
  const location = useLocation();
  const formData = location.state?.formData;

  return (
    <div className="submitted-data">
      <h2>Submitted Data</h2>
      <p>Name: {formData.name}</p>
      <p>Email: {formData.email}</p>
      <p>Message: {formData.message}</p>
    </div>
  );
};

export default SubmittedData;

