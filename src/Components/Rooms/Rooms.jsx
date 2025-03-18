import React, { useState } from "react";
import "./Rooms.css";


const roomsData = [
  { id: 1, name: "Classic Room", image: "/images/classic_hotel_room.jpg", description: "A cozy room with all basic amenities." },
  { id: 2, name: "Super Classic Room", image: "/images/Super_Classic_Room.jpg", description: "An upgraded classic room with more space." },
  { id: 3, name: "Standard Deluxe", image: "/images/Standard_Deluxe_Room.jpg", description: "A luxurious room with deluxe features." },
  { id: 4, name: "Executive Deluxe", image: "/images/Executive_Deluxe_Room.jpg", description: "A premium room for executives." },
  { id: 5, name: "Business Suite", image: "/images/Business_Suite_Room.jpg", description: "A spacious suite designed for business travelers." }
];

const Rooms = () => {
  const [currentRoom, setCurrentRoom] = useState(0);
  const [slideDirection, setSlideDirection] = useState("next");

  const nextRoom = () => {
    setSlideDirection("next");
    setTimeout(() => {
      setCurrentRoom((prev) => (prev + 1) % roomsData.length);
    }, 300);
  };

  const prevRoom = () => {
    setSlideDirection("prev");
    setTimeout(() => {
      setCurrentRoom((prev) => (prev - 1 + roomsData.length) % roomsData.length);
    }, 300);
  };

  return (
    <section id="rooms" className="rooms-section">
      <h2 className="section-title">Our Rooms</h2>
      <div className="rooms-container">
        <button className="nav-button prev" onClick={prevRoom}>&#9665;</button>
        <div className={`room-card ${slideDirection}`} key={roomsData[currentRoom].id}>
          <img src={roomsData[currentRoom].image} alt={roomsData[currentRoom].name} className="room-image" />
          <h3 className="room-name">{roomsData[currentRoom].name}</h3>
          <p className="room-description">{roomsData[currentRoom].description}</p>
        </div>
        <button className="nav-button next" onClick={nextRoom}>&#9655;</button>
      </div>
    </section>
  );
};

export default Rooms;
