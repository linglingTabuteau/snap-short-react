import React, { useState } from "react";
import PhotoBloc from "./PhotoBloc";
import "./App.css";

const photos = [
  { category: "mountain", id: "mountain_1", img: "./images/mountain_1.jpg" },
  { category: "mountain", id: "mountain_2", img: "./images/mountain_2.jpg" },
  { category: "beach", id: "beach_1", img: "./images/beach_1.jpg" },
  { category: "beach", id: "beach_2", img: "./images/beach_2.jpg" },
  { category: "birds", id: "birds_1", img: "./images/birds_1.jpg" },
  { category: "birds", id: "birds_2", img: "./images/birds_2.jpg" },
  { category: "food", id: "food_1", img: "./images/food_1.jpg" },
  { category: "food", id: "food_2", img: "./images/food_2.jpg" },
];

function App() {
  const [photoCategory, setPhotoCategory] = useState("");
  const [search, setSearch] = useState("");

  const changeCategoryHandler = (category) => {
    setPhotoCategory(category);
  };

  const searchHanlder = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="App">
      <h1>Snap Short</h1>
      <div className="SearchBar">
        <input onChange={searchHanlder} value={search} />
        <img src="./images/search.jpg" alt="search" />
      </div>
      <PhotoBloc
        changePhotoCategory={changeCategoryHandler}
        photos={photos}
        photoCategory={photoCategory}
        searchPhoto={search}
      />
    </div>
  );
}

export default App;
