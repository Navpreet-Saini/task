import React, { useEffect, useState } from "react";
import { getAllCars } from "../services/carService";

const CarList = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const carsData = await getAllCars();
        setCars(carsData);
      } catch (error) {
        console.error("Error fetching cars", error);
      }
    };
    fetchCars();
  }, []);

  return (
    <div>
      <h2>Car List</h2>
      <ul>
        {cars.map((car) => (
          <li key={car._id}>
            <h3>{car.title}</h3>
            <p>{car.description}</p>
            <p>{car.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CarList;
