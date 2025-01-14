import React, { useEffect, useRef, useState } from "react";
import TodoItems from "./TodoItems";

let count = 0;

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const inputRef = useRef(null);

  const addTodo = () => {
    const inputValue = inputRef.current.value.trim();
    if (inputValue) {
      setTodos([...todos, { no: count++, text: inputValue, display: "" }]);
      inputRef.current.value = "";
      localStorage.setItem("todos_count",count);
    }
  };

  useEffect(() => {
    setTodos(JSON.parse(localStorage.getItem("todos")));
    count = localStorage.getItem("todos_count");
  }, []);

  useEffect(() => {
    setTimeout(() => {
      console.log(todos);
      localStorage.setItem("todos", JSON.stringify(todos));
    }, 100);
  }, [todos]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      <div className="w-full max-w-md bg-gradient-to-br from-gray-800 to-gray-700 backdrop-blur-lg shadow-2xl rounded-2xl p-6 border border-gray-600">
        {/* Header */}
        <div className="text-center text-gray-100 text-3xl font-semibold mb-6">
          To-Do List
        </div>

        {/* Input and Button */}
        <div className="flex items-center gap-4 mb-6">
          <input
            ref={inputRef}
            type="text"
            placeholder="Add Your Task"
            className="flex-grow px-4 py-3 text-sm text-gray-100 placeholder-gray-500 bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 transition-all"
          />
          <button
            onClick={addTodo}
            className="px-6 py-3 bg-gradient-to-r from-purple-700 to-blue-700 text-gray-100 font-medium rounded-lg hover:opacity-90 transition-all"
          >
            ADD
          </button>
        </div>

        <div className="todo-list">
          {todos.map((item, index) => {
            return (
              <TodoItems
                key={index}
                no={item.no}
                display={item.display}
                text={item.text}
                setTodos={setTodos}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Todo;
