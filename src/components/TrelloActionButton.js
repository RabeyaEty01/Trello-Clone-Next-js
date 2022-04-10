import { Button, Card, Icon, TextareaAutosize } from "@mui/material";
import React, { useState } from "react";
import { connect } from "react-redux";
import { addList, addCard } from "../actions";

const TrelloActionButton = ({ list,dispatch,listID}) => {
  const [formOpen, setformOpen] = useState(false);
  const [text, setText] = useState("");

  const openForm = () => {
    setformOpen(true);
  };
  const closeForm = (e) => {
    setformOpen(false);
  };

  const handleInputChange = (e) => {
    setText(e.target.value);
  };
  const handleAddList = () => {
    if (text) {
      setText("");
      dispatch(addList(text));

    }
    return;
  };

  const handleAddCard = () => {
    console.log(listID);
    if (text) {
      setText("");
      dispatch(addCard(listID, text));
    }
  };

  const handleForm = () => {
    const placeholder = list
      ? "Enter list title..."
      : "enter title for this card...";
    const buttonTitle = list ? "Add List" : "Add Card";
    return (
      <div>
        <Card
          style={{
            overflow: "visible",
            minHeight: 80,
            minWidth: 272,
            padding: "6px 8px 2px",
          }}
        >
          <TextareaAutosize
            aria-label="empty textarea"
            placeholder={placeholder}
            autoFocus
            onBlur={closeForm}
            value={text}
            onChange={handleInputChange}
            style={{
              resize: "none",
              width: "100%",
              overflow: "hidden",
              outline: "none",
              border: "none",
            }}
          />
        </Card>

        <div style={styles.formButtonGroup}>
          <Button
            onMouseDown={list ? handleAddList : handleAddCard}
            variant="contained"
            style={{ color: "white", backgroundColor: "#5aac44" }}
          >
            {buttonTitle}
          </Button>
          <Icon style={{ marginLeft: 8, cursor: "pointer" }}>close</Icon>
        </div>
      </div>
    );
  };

  const handleAddButton = () => {
    const buttonText = list ? "Add another list" : "Add another card";
    const buttonTextOpacity = list ? 1 : 0.5;
    const buttonTextColor = list ? "white" : "inherit";
    const buttonTextBackground = list ? "rgba(0,0,0,.15)" : "inherit";
    return (
      <div
        onClick={openForm}
        style={{
          ...styles.openForButtonGroup,
          opacity: buttonTextOpacity,
          color: buttonTextColor,
          backgroundColor: buttonTextBackground,
        }}
      >
        <Icon>add</Icon>
        <p>{buttonText}</p>
      </div>
    );
  };

  return formOpen ? handleForm() : handleAddButton();
};

const styles = {
  openForButtonGroup: {
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    borderRadius: 3,
    height: 36,
    minWidth: 272,
    paddingLeft: 10,
  },
  formButtonGroup: {
    marginTop: 8,
    display: "flex",
    alignItems: "center",
  },
};

export default connect()(TrelloActionButton);
