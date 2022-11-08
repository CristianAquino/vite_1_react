import { Link } from "react-router-dom";
import { Rank } from "../Rank/Rank";
import "./Ranking.css";

export const Ranking = () => {
  return (
    <div className="ranking">
      <ul className="head_tags">
        <li className="active">
          <Link>Top Day</Link>
        </li>
        <li>
          <Link>Top Week</Link>
        </li>
        <li>
          <Link>Top Month</Link>
        </li>
      </ul>
      <Rank />
      <Rank />
      <Rank />
      <Rank />
      <Rank />
      <Rank />
      <Rank />
      <Rank />
      <Rank />
      <Rank />
    </div>
  );
};
