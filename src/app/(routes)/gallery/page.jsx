"use client";

import Header from "@/app/components/header";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

const images = [
  "/gallery/ga1.JPG",
  "/gallery/ga2.JPG",
  "/gallery/ga3.JPG",
  "/gallery/ga4.JPG",
  "/gallery/ga5.JPG",
  "/gallery/ga6.JPG",
  "/gallery/ga7.JPG",
  "/gallery/ga8.JPG",
  "/gallery/ga9.JPG",
  "/gallery/ga10.JPG",
  "/gallery/ga11.JPG",
  "/gallery/ga12.JPG",
  "/gallery/ga13.JPG",
  "/gallery/ga14.JPG",
  "/gallery/ga15.JPG",
  "/gallery/ga16.JPG",
  "/gallery/ga17.JPG",
  "/gallery/ga18.JPG",
];

const Gallery = () => {
  return (
    <div>
      <Header title="GALERÍA" img="/headers/gallery.jpeg" />
      <section className="max-w-[1300px] mx-auto px-4 py-10">
        <PhotoProvider>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {images.map((src, index) => (
              <PhotoView key={index} src={src}>
                <div className="w-full h-[250px] overflow-hidden cursor-pointer">
                  <img
                    src={src}
                    alt={`Camping Vega de Francia ${index + 1}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </PhotoView>
            ))}
          </div>
        </PhotoProvider>
      </section>
    </div>
  );
};

export default Gallery;
