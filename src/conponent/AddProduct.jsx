
import React, { useState } from 'react';
const AddProduct = ({ fetchData }) => {
  const [formData, setFormData] = useState({
    // Define state variables for form field
    title: '',
    description: '',
    brand: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

 
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://dummyjson.com/products/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      const result = await response.json();
      console.log("Success:", result);
    } catch (error) {
      console.error("Error:", error);
    }

    setFormData({
      title: '',
      description: '',
      brand: ''
    });

  };
  return (
    <div className="container">
    <h2>Add New Product</h2>
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          className="form-control"
          required
        />
      </div>
      <div className="form-group">
        <label>Description:</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="form-control"
          required
        ></textarea>
      </div>
      <div className="form-group">
        <label>Brand:</label>
        <input
          type="text"
          name="brand"
          value={formData.brand}
          onChange={handleChange}
          className="form-control"
          required
        />
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  </div>
  
);
};

export default AddProduct;
