
import { useEffect, useState } from "react";
import "../../styles/CarouselText.css";

function CarouselText({items}) {
  const [currentIndex, setCurrentIndex] = useState(0);


  const moveRight = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const moveLeft = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    // Autoavance cada 3 segundos
    const intervalId = setInterval(() => {
      moveRight();
    }, 3000);

    // Limpiar el intervalo al desmontar el componente
    return () => clearInterval(intervalId);
  }, [currentIndex]);

  return (
    <div className="carousel-container">
      <button className="carousel-btn" onClick={moveLeft}>
        &lt;
      </button>
      <div className="">{items[currentIndex]}</div>
      <button className="carousel-btn" onClick={moveRight}>
        &gt;
      </button>
    </div>
  );
}

export default CarouselText;
