import React from "react";

import Header from "./components/Header";
import AddTodoForm from "./components/AddTodoForm";
import TodoList from "./components/TodoList";

const App = () => {
  return (
    <div className="container flex flex-col min-h-screen">
      <Header />
      <section className="flex flex-col min-w-full flex-1 px-4 justify-center items-center bg-gray-200 py-8 dark:bg-very-dark-blue-top">
        <AddTodoForm />
        <TodoList />
      </section>
    </div>
  );
};

export default App;
