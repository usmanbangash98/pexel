import React, { useState, useEffect } from "react";
import axios from "axios";
import ImageGrid from "./components/ImageGrid";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const API_KEY = process.env.REACT_APP_PEXELS_API_KEY;

const App = () => {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchImages = async () => {
      const url = query
        ? `https://api.pexels.com/v1/search?query=${query}&per_page=80`
        : "https://api.pexels.com/v1/curated?per_page=80";
      try {
        const response = await axios.get(url, {
          headers: {
            Authorization: API_KEY,
          },
        });
        setImages(response.data.photos);
      } catch (error) {
        console.error("Error fetching images from Pexels:", error);
      }
    };

    fetchImages();
  }, [query]);

  return (
    <>
      <Navbar setQuery={setQuery} />
      <div className="container mx-auto p-4 bg-slate-100">
        <ImageGrid images={images} />
      </div>
      <Footer />
    </>
  );
};

export default App;
