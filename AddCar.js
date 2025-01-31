import React, { useState } from "react";
import { addCar } from "../services/carService";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const AddCar = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    image: "",
  });
  const { isAuthenticated } = useAuth();
  const history = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isAuthenticated()) {
      alert("You need to log in first!");
      return;
    }

    try {
      const token = localStorage.getItem("token");
      await addCar(formData, token);
      history.push("/cars");
    } catch (error) {
      console.error("Error adding car", error);
    }
  };

  return (
    <div>
      <h2>Add New Car</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Car Title"
        />
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Description"
        />
        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
          placeholder="Price"
        />
        <input
          type="text"
          name="image"
          value={formData.image}
          onChange={handleChange}
          placeholder="Image URL"
        />
        <button type="submit">Add Car</button>
      </form>
    </div>
  );
};

export default AddCar;
