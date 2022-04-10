import React, { useEffect, useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import { connect, useDispatch } from "react-redux";
import { sort } from "../src/actions";
import TrelloActionButton from "../src/components/TrelloActionButton";
import TrelloList from "../src/components/TrelloList";

function App({ lists }) {
  const [winReady, setwinReady] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    setwinReady(true);
  }, []);

  const HandleDragEnd = (result) => {
    const { destination, source, draggableId, type } = result;

    if (!destination) {
      return;
    }

    dispatch(
      sort(
        source.droppableId,
        destination.droppableId,
        source.index,
        destination.index,
        draggableId,
        type
      )
    );
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
