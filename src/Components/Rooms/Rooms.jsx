import React, { useState } from "react";
import "./Rooms.css";

const roomsData = [
  { id: 1, name: "Classic Room", video: "https://res.cloudinary.com/dlxbur3on/video/upload/v1742647607/19403230-hd_1920_1080_25fps_fc1yso.mp4", description: "A cozy room with all basic amenities." },
  { id: 2, name: "Super Classic Room", video: "https://res.cloudinary.com/dlxbur3on/video/upload/v1742647217/9663211-hd_1920_1080_30fps_u6pxlq.mp4", description: "An upgraded classic room with more space." },
  { id: 3, name: "Standard Deluxe", video: "https://res.cloudinary.com/dlxbur3on/video/upload/v1742648005/3773489-hd_1920_1080_30fps_h4be2h.mp4", description: "A luxurious room with deluxe features." },
  { id: 4, name: "Executive Deluxe", video: "https://res.cloudinary.com/dlxbur3on/video/upload/v1742645409/executive_11_xm5cge.mp4", description: "A premium room for executives." },
  { id: 5, name: "Business Suite", video: "https://res.cloudinary.com/dlxbur3on/video/upload/v1742559624/business_suite_jzb4qm.mp4", description: "A spacious suite designed for business travelers." }
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
          <video className="room-video" autoPlay loop muted playsInline>
            <source src={roomsData[currentRoom].video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <h3 className="room-name">{roomsData[currentRoom].name}</h3>
          <p className="room-description">{roomsData[currentRoom].description}</p>
        </div>
        <button className="nav-button next" onClick={nextRoom}>&#9655;</button>
      </div>
    </section>
  );
};

export default Rooms;