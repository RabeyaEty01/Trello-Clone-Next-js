import { CONSTANTS } from "../actions";
let listID = 3;
let cardID = 9;

const initialState = [
  {
    title: "Last Episode",
    id: `list-${0}`,
    cards: [
      {
        id: `card-${0}`,
        text: "we created a static list and a static card",
      },
      {
        id: `card-${1}`,
        text: "we used a mix between material UI React and styled components",
      },
    ],
  },
  {
    title: "This Episode",
    id: `list-${1}`,
    cards: [
      {
        id: `card-${2}`,
        text: "we will create our first reducer",
      },
      {
        id: `card-${3}`,
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos, expedita.",
      },
      {
        id: `card-${4}`,
        text: "consectetur adipisicing elit.sit amet consectetur adipisicing elit. Officia reiciendis magni ipsa eos iure expedita delectus, quo architecto sint consectetur!",
      },
      {
        id: `card-${5}`,
        text: " elit.sit amet consectetur adipisicing elit. Officia reiciendis magni ipsa eos iure expedita delectus, quo architecto sint consectetur!",
      },
    ],
  },
  {
    title: "This Episode",
    id: `list-${2}`,
    cards: [
      {
        id: `card-${6}`,
        text: "we will create our first reducer",
      },
      {
        id: `card-${7}`,
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos, expedita.",
      },
      {
        id: `card-${8}`,
        text: "consectetur adipisicing elit.sit amet consectetur adipisicing elit. Officia reiciendis magni ipsa eos iure expedita delectus, quo architecto sint consectetur!",
      },
    ],
  },
];

const listsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CONSTANTS.ADD_LIST:
      const newList = {
        title: action.payload,
        cards: [],
        id: `list-${listID}`,
      };
      listID += 1;
      return [...state, newList];
    case CONSTANTS.ADD_CARD: {
      const newCard = {
        text: action.payload.text,
        id: `card-${cardID}`,
      };
      cardID += 1;
      console.log("action recieved", action);
      const newState = state.map((list) => {
        if (list.id === action.payload.listID) {
          return {
            ...list,
            cards: [...list.cards, newCard],
          };
        } else {
          return list;
        }
      });
      return newState;
    }
    case CONSTANTS.DRAG_HAPPENED:
      const {
        droppableIdStart,
        droppableIdEnd,
        droppableIndexStart,
        droppableIndexEnd,
        draggableId,
      } = action.payload;
      const newState = [...state];
      //in the same list
      if (droppableIdStart === droppableIdEnd) {
        const list = state.find((list) => droppableIdStart === list.id);
        const card = list.cards.splice(droppableIndexStart, 1);
        list.cards.splice(droppableIndexEnd, 0, ...card);
      }
      return newState;

    default:
      return state;
  }
};
export default listsReducer;
