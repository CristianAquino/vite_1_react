import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";

import "./Rank.css";

export const Rank = () => {
  return (
    <Link to={"#"} className="rank">
      <span className="number">#1</span>
      <div className="rank_img">
        <img
          src="https://i.postimg.cc/ryvSF2Z1/Gakkou-Gurashi.jpg"
          alt="gakkou"
        />
      </div>
      <div className="rank_data">
        <p>Titulo</p>
        <span>
          <FaEye />
          vistas
        </span>
      </div>
    </Link>
  );
};
