import React, { useEffect, useState } from "react";
import { Droppable } from "react-beautiful-dnd";
import TrelloActionButton from "./TrelloActionButton";
import TrelloCard from "./TrelloCard";

const TrelloList = ({ title, cards, listID }) => {
   
  return (
    <Droppable droppableId={String(listID)} type="card">
      {(provided) => (
        <div
          {...provided.droppableProps}
          ref={provided.innerRef}
          style={styles.container}
        >
          <h4>{title}</h4>
          {cards.map((card, index) => (
            <TrelloCard
              key={card.id}
              index={index}
              text={card.text}
              id={card.id}
            />
          ))}
          {provided.placeholder}
          <TrelloActionButton listID={listID} />
        </div>
      )}
    </Droppable>
  );
};

const styles = {
  container: {
    backgroundColor: "#dfe3e6",
    borderRadius: 3,
    width: 300,
    padding: 8,
    height: "100%",
    marginRight: 8,
  },
};

export default TrelloList;
