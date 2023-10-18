import React, { useState } from "react";

function Slider({ slides }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  function goToSlide(index) {
    setCurrentSlide(index);
  }

  function nextSlide() {
    setCurrentSlide((currentSlide + 1) % slides.length);
  }

  function prevSlide() {
    setCurrentSlide((currentSlide - 1 + slides.length) % slides.length);
  }

  function handleKeyPress(e) {
    if (e.key === "ArrowLeft") {
      prevSlide();
    } else if (e.key === "ArrowRight") {
      nextSlide();
    }
  }

  return (
    <div className="slider">
      <div className="slides">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slide ${index === currentSlide ? "active" : ""}`}
          >
            {slide}
          </div>
        ))}
      </div>
      <div className="dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentSlide ? "active" : ""}`}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>
      <button className="prev" onClick={prevSlide}>
        &lt;
      </button>
      <button className="next" onClick={nextSlide}>
        &gt;
      </button>
    </div>
  );
}

export default Slider;
