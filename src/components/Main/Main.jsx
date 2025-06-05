import React from "react";
import MainColumn from "./MainColumn";
import { cardsData } from "../../data";

const Main = () => {
  // Список всех статусов для колонок
  const statuses = [
    "Без статуса",
    "Нужно сделать",
    "В работе",
    "Тестирование",
    "Готово",
  ];

  return (
    <main className="main">
      <div className="container">
        <div className="main__block">
          <div className="main__content">
            {statuses.map((status) => (
              <MainColumn
                key={status}
                status={status}
                // Фильтруем карточки по статусу текущей колонки
                cards={cardsData.filter((card) => card.status === status)}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
