import React, { useState, useEffect } from "react";
import "./Hero.css";

import slide1 from "../assets/slide1.jpeg";
import slide2 from "../assets/slide2.jpeg";
import slide3 from "../assets/slide3.jpeg";
import slide4 from "../assets/slide4.jpeg";
import slide5 from "../assets/slide5.jpeg";

const slides = [slide1, slide2, slide3, slide4, slide5];

function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const slider = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(slider);
  }, []);

  return (
    <div className="hero-slider">
      {slides.map((img, index) => (
        <img
          key={index}
          src={img}
          alt="hero"
          className={index === current ? "hero-slide active" : "hero-slide"}
        />
      ))}

      <div className="hero-dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={index === current ? "dot active" : "dot"}
            onClick={() => setCurrent(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default Hero;
