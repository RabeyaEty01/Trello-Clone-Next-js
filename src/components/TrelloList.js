import React from "react";
import { Droppable } from "react-beautiful-dnd";
import styled from "styled-components";
import TrelloActionButton from "./TrelloActionButton";
import TrelloCard from "./TrelloCard";

const ListContainer = styled.div`
  background-color: #dfe3e6;
  border-radius: 3px;
  width: 300px;
  padding: 8px;
  height: 100%;
  margin-right: 8px;
`;

const TrelloList = ({ title, cards, listID }) => {
  return (
    <Droppable droppableId={String(listID)}>
      {(provided) => (
        <ListContainer {...provided.droppableProps} ref={provided.innerRef}>
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
        </ListContainer>
      )}
    </Droppable>
  );
};

export default TrelloList;
