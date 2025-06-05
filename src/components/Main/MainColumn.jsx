import React, { useState, useEffect } from "react";
import MainCard from "./MainCard";
import CardSkeleton from "../Skeleton/CardSkeleton";

const MainColumn = ({ status, cards }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Имитация загрузки данных
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="main__column column">
      <div className="column__title">
        <p>{status}</p>
      </div>
      <div className="cards">
        {isLoading
          ? // Показываем 3 скелетона во время загрузки
            Array(3)
              .fill(0)
              .map((_, index) => <CardSkeleton key={`skeleton-${index}`} />)
          : // Рендерим реальные карточки после загрузки
            cards.map((card) => (
              <MainCard
                key={card.id}
                topic={card.topic}
                title={card.title}
                date={card.date}
              />
            ))}
      </div>
    </div>
  );
};

export default MainColumn;
