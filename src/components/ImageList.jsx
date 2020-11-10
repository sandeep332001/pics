import React from "react";
import ImageCard from "./ImageCard";
import "./ImageList.css";

const ImageList = (props) => {
  const images = props.imageList.map((image) => {
    return (
      <ImageCard urls={image.urls.regular} des={image.description} key={image.id} />
    );
  });

  return <div className="image-list">{images}</div>;
};

export default ImageList;
