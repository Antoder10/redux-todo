import React, { useState } from "react";
import { connect } from "react-redux";
import { addTodo } from "../actions";
import { v4 as uuidv4 } from "uuid";

const AddTodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo({
      todoString: value,
      isCompleted: false,
      id: uuidv4(),
    });
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit} className="mb-8 min-w-2/3">
      <input
        type="text"
        placeholder="Create a new todo..."
        className="p-4 rounded-md w-full dark:bg-dark-desaturated-blue dark:text-white"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </form>
  );
};

export default connect(null, { addTodo })(AddTodoForm);
