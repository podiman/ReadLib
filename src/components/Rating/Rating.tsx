import React from "react";
import { ReactComponent as Star } from "../../icons/star.svg";

interface Props {
  color?: string;
}

const Rating: React.FC<Props> = () => {
  return (
    <div>
      {[...Array(5)].map((e, i) => (
        <Star className="star" key={i} />
      ))}
    </div>
  );
};

export default Rating;
