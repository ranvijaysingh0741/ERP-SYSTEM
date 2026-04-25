import React, { useState, useEffect } from "react";
import "./Hero.css";

const slides = [
  {
    src: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1800&q=90",
    alt: "Students studying together in a classroom",
  },
  {
    src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1800&q=90",
    alt: "Teacher guiding students in class",
  },
  {
    src: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=1800&q=90",
    alt: "Students reading books in a library",
  },
  {
    src: "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1800&q=90",
    alt: "Students learning in a bright classroom",
  },
  {
    src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1800&q=90",
    alt: "Student writing notes during study",
  },
];

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
          src={img.src}
          alt={img.alt}
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
