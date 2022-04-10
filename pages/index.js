import React, { useEffect, useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import { connect } from "react-redux";
import TrelloActionButton from "../src/components/TrelloActionButton";
import TrelloList from "../src/components/TrelloList";

function App({ lists }) {
  const [winReady, setwinReady] = useState(false);
  useEffect(() => {
    setwinReady(true);
  }, []);
  const HandleDragEnd = () => {
    //todo
  };
  return (
    <DragDropContext onDragEnd={HandleDragEnd}>
      <div className="App">
        <h2>To Do</h2>
        {winReady && (
          <div style={styles.listContainer}>
            {lists.map((list) => (
              <TrelloList
                listID={list.id}
                key={list.id}
                title={list.title}
                cards={list.cards}
              />
            ))}
            <TrelloActionButton list />
          </div>
        )}
      </div>
    </DragDropContext>
  );
}

const styles = {
  listContainer: {
    display: "flex",
    flexDirection: "row",
  },
};

const mapStateToProps = (state) => ({
  lists: state.lists,
});

export default connect(mapStateToProps)(App);
