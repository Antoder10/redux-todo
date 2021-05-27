import { combineReducers } from "redux";

const initialState = [
  { todoString: "read", isCompleted: false, id: 1 },
  { todoString: "write", isCompleted: false, id: 2 },
];

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO": {
      return [...state, action.payload];
    }
    case "DELETE_TODO": {
      return state.filter((todo) => todo.id !== action.payload);
    }
    case "TOGGLE_COMPLETE": {
      return state.map((todo) => {
        if (todo.id !== action.payload) {
          return todo;
        }
        return {
          ...todo,
          isCompleted: !todo.isCompleted,
        };
      });
    }
    case "CLEAR_ALL_TODOS": {
      return { ...state, todos: [] };
    }
    case "CLEAR_COMPLETED_TODOS": {
      return state.filter((todo) => !todo.isCompleted);
    }
    default:
      return state;
  }
};

export default combineReducers({
  todos: todosReducer,
});
