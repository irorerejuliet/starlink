import React from 'react'
import NavBar from '../Layouts/NavBar'

const MapPage = () => {
  return (
    <div
      style={{ height: "100vh", width: "100vw" }}
      className="relative w-screen h-screen"
    >
      {/* Navbar on top */}
      <div className="absolute top-10 left-0 w-full z-50">
        <NavBar />
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126614.51346330816!2d3.8226592620919257!3d7.387080139406527!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10398d77eeff086f%3A0x3b33e0f76e8e04a9!2sIbadan%2C%20Oyo!5e0!3m2!1sen!2sng!4v1745239994650!5m2!1sen!2sng"
        width="100%"
        height="100%"
        frameBorder="0"
        style={{ border: "0" }}
        allowFullScreen=""
        aria-hidden="false"
        tabIndex="0"
        allowfullscreen
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      >
        <NavBar />
      </iframe>
    </div>
  );
}

export default MapPage
