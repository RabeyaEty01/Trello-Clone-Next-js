import { Card, CardContent, Typography } from "@mui/material";
import React from "react";
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";

const CardContainer = styled.div`
  margin-bottom: 8px;
`;

const TrelloCard = ({ text, id, index }) => {
  return (
    <CardContainer>
      <Draggable draggableId={String(id)} index={index}>
        {(provided) => (
          <div
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
          >
            <Card>
              <CardContent>
                <Typography gutterBottom>{text}</Typography>{" "}
              </CardContent>
            </Card>
          </div>
        )}
      </Draggable>
    </CardContainer>
  );
};

export default TrelloCard;
