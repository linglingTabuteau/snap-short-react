import React from "react";
import "./PhotoBloc.css";

const PhotoBloc = (props) => {
  let listPhoto;
  if (props.photoCategory) {
    listPhoto = props.photos
      .filter((photo) => photo.category === props.photoCategory)
      .map((photo) => (
        <img
          className="OnePhoto"
          key={photo.id}
          src={photo.img}
          alt={photo.id}
        />
      ));
  } else if (props.searchPhoto) {
    listPhoto = props.photos
      .filter((photo) => photo.category.includes(props.searchPhoto))
      .map((photo) => (
        <img
          className="OnePhoto"
          key={photo.id}
          src={photo.img}
          alt={photo.id}
        />
      ));
  } else {
    listPhoto = props.photos.map((photo) => (
      <img className="OnePhoto" key={photo.id} src={photo.img} alt={photo.id} />
    ));
  }

  return (
    <div>
      <div className="Titles">
        <h2 onClick={() => props.changePhotoCategory("mountain")}>Mountain</h2>
        <h2 onClick={() => props.changePhotoCategory("beach")}>Beach</h2>
        <h2 onClick={() => props.changePhotoCategory("birds")}>Birds</h2>
        <h2 onClick={() => props.changePhotoCategory("food")}>food</h2>
      </div>
      <div className="Photos">{listPhoto}</div>
    </div>
  );
};

export default PhotoBloc;
