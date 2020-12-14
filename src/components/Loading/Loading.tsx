import React from "react";
import Skeleton from "@material-ui/lab/Skeleton";
import "./styles.scss";

const Loading: React.FC = () => {
  return (
    <div className="page">
      <div className="pageBody">
        <div className="loading-page">
          <div className="loader"></div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
