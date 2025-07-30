import React, { useState, useEffect } from "react";
import "./Rooms.css";

const roomsData = [
  {
    id: 1,
    name: "Classic Room",
    image: "/images/classic.jpg",
    description: "A cozy room with all basic amenities.",
    price: "₦30,000 / night",
  },
  {
    id: 2,
    name: "Super Classic Room",
    image: "/images/Superclassic.jpg",
    description: "An upgraded classic room with more space.",
    price: "₦35,000 / night",
  },
  {
    id: 3,
    name: "Standard Deluxe",
    image: "/images/standard_deluxe.jpg",
    description: "A luxurious room with deluxe features.",
    price: "₦40,000 / night",
  },
  {
    id: 4,
    name: "Executive Deluxe",
    image: "/images/executive.jpg",
    description: "A premium room for executives.",
    price: "₦45,000 / night",
  },
  {
    id: 5,
    name: "Business Suite",
    image: "/images/business.jpg",
    description: "A spacious suite designed for business travelers.",
    price: "₦50,000 / night",
  },
];

const Rooms = () => {
  const [currentRoom, setCurrentRoom] = useState(0);

  const nextRoom = () => {
    setCurrentRoom((prev) => (prev + 1) % roomsData.length);
  };

  const prevRoom = () => {
    setCurrentRoom((prev) => (prev - 1 + roomsData.length) % roomsData.length);
  };

  useEffect(() => {
    const interval = setInterval(nextRoom, 7000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="rooms" className="rooms-section">
      <h2 className="section-title">Our Rooms</h2>
      <div className="rooms-container">
        <button className="room-btn left" onClick={prevRoom}>&#10094;</button>
        <div className="room-card fade" key={roomsData[currentRoom].id}>
          <img
            src={roomsData[currentRoom].image}
            alt={roomsData[currentRoom].name}
            className="room-image"
          />
          <h3 className="room-name">{roomsData[currentRoom].name}</h3>
          <p className="room-description">{roomsData[currentRoom].description}</p>
          <p className="room-price">{roomsData[currentRoom].price}</p>
        </div>
        <button className="room-btn right" onClick={nextRoom}>&#10095;</button>
      </div>
    </section>
  );
};

export default Rooms;
