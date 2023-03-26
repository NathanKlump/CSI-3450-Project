import React, { useState } from 'react';

function App() {
  const [formData, setFormData] = useState({
    address: '',
    squareFootSize: '',
    bedrooms: '',
    bathrooms: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
  };

  return (
    <div className="App">
      <h1>House Information Form</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Address:
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Square Foot Size:
          <input
            type="number"
            name="squareFootSize"
            value={formData.squareFootSize}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Bedrooms:
          <input
            type="number"
            name="bedrooms"
            value={formData.bedrooms}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Bathrooms:
          <input
            type="number"
            name="bathrooms"
            value={formData.bathrooms}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
