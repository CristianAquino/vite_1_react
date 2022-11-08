import React from "react";
import { ViewImage } from "../ViewImage/ViewImage";
import "./LayoutImage.css";

const viewimg = {
  src: [
    "https://i.postimg.cc/ryvSF2Z1/Gakkou-Gurashi.jpg",
    "https://i.postimg.cc/R0sHkknn/Tanya-Degurechaff.jpg",
  ],
};
export const LayoutImage = () => {
  return (
    <div className="layout_image">
      {/* <ViewImage src={"https://i.postimg.cc/ryvSF2Z1/Gakkou-Gurashi.jpg"} />
      <ViewImage src={"https://i.postimg.cc/R0sHkknn/Tanya-Degurechaff.jpg"} /> */}
      {viewimg.src.map((src) => (
        <ViewImage src={src} />
      ))}
    </div>
  );
};
