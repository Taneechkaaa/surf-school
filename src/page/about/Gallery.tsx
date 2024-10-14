import { useState } from "react";
import "./gallery.css";

const gallery = [
  {
    src: "./about/nature-gallery1.png",
    imageWidth: 580,
    imageHeight: 280,
    type: "nature",
  },
  {
    src: "./about/nature-gallery2.png",
    imageWidth: 290,
    imageHeight: 280,
    type: "nature",
  },
  // {
  //   src: "./about/nature-gallery3.png",
  //   imageWidth: 290,
  //   imageHeight: 280,
  //   type: "nature",
  // },
  {
    src: "./about/nature-gallery4.png",
    imageWidth: 300,
    imageHeight: 280,
    type: "nature",
  },
  {
    src: "./about/nature-gallery5.png",
    imageWidth: 300,
    imageHeight: 280,
    type: "nature",
  },
  {
    src: "./about/tourists-gallery1.png",
    imageWidth: 300,
    imageHeight: 280,
    type: "tourists",
  },
  {
    src: "./about/tourists-gallery2.png",
    imageWidth: 300,
    imageHeight: 280,
    type: "tourists",
  },
  {
    src: "./about/tourists-gallery3.png",
    imageWidth: 300,
    imageHeight: 280,
    type: "tourists",
  },
  {
    src: "./about/tourists-gallery4.png",
    imageWidth: 300,
    imageHeight: 280,
    type: "tourists",
  },
  {
    src: "./about/tourists-gallery5.png",
    imageWidth: 300,
    imageHeight: 280,
    type: "tourists",
  },
  {
    src: "./about/tourists-gallery6.png",
    imageWidth: 300,
    imageHeight: 280,
    type: "tourists",
  },
];

type GalleryType = "tourists" | "nature";

export const Gallery = () => {
  const [currentType, setCurrentType] = useState<GalleryType>("tourists");

  function updateFiltres(type: GalleryType) {
    setCurrentType(type);
  }
  return (
    <div className="gallery">
      <h1 className="description-title">ГАЛЕРЕЯ</h1>
      <div className="galery-btn">
        <button
          className="galery-btn-item"
          onClick={() => updateFiltres("tourists")}
        >
          ТУРИСТЫ
        </button>
        <button
          className="galery-btn-item"
          onClick={() => updateFiltres("nature")}
        >
          ПРИРОДА
        </button>
      </div>
      <div className="gallery-img-container">
        {gallery
          .filter((g) => g.type === currentType)
          .map((g) => (
            <img
              key={g.src}
              src={g.src}
              // width={g.imageWidth}
              height={g.imageHeight}
            />
          ))}
      </div>
    </div>
  );
};
