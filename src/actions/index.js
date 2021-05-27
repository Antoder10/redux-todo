export const addTodo = (todo) => {
  return {
    type: "ADD_TODO",
    payload: todo,
  };
};

export const deleteTodo = (id) => {
  return {
    type: "DELETE_TODO",
    payload: id,
  };
};

export const toggleComplete = (id) => {
  return {
    type: "TOGGLE_COMPLETE",
    payload: id,
  };
};

export const clearAllTodos = () => {
  return {
    type: "CLEAR_ALL_TODOS",
  };
};

export const clearCompletedTodos = () => {
  return {
    type: "CLEAR_COMPLETED_TODOS",
  };
};
