import React from "react";
import "./CardSkeleton.css";

const CardSkeleton = () => {
  return (
    <div className="cards__item skeleton">
      <div className="cards__card card">
        <div className="card__group">
          <div className="card__theme skeleton-block"></div>
          <div className="card__btn skeleton-block"></div>
        </div>
        <div className="card__content">
          <h3 className="card__title skeleton-line"></h3>
          <div className="card__date">
            <div className="skeleton-icon"></div>
            <div className="skeleton-line"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardSkeleton;
