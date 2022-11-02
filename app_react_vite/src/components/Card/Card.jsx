import { useState } from "react";
import { Link } from "react-router-dom";

import "./Card.css";

const card = {
  image: {
    url: "https://i.postimg.cc/ryvSF2Z1/Gakkou-Gurashi.jpg",
    alt: "gakkou",
  },
  title: "Titulo",
  chapters: ["Ch. 1", "Ch. 2", "Ch. 3"],
};

export const Card = () => {
  const [state, setState] = useState(card);
  const len = state.chapters.length;
  return (
    <div className="card">
      <div className="card_img">
        <Link to={"#"}>
          <img src={state.image.url} alt={state.image.alt} />
        </Link>
      </div>
      <div className="card_body">
        <span className="titulo">{state.title}</span>
        <Link to={"#"}>
          <div className="chapter new">
            <span>{state.chapters[len - 1]}</span>
            <span>New</span>
          </div>
        </Link>
        <Link to={"#"}>
          <div className="chapter">
            <span>{state.chapters[len - 2]}</span>
            <span>Date</span>
          </div>
        </Link>
      </div>
    </div>
  );
};
