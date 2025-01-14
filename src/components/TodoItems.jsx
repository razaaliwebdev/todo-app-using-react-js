import React from "react";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { MdOutlineRadioButtonUnchecked } from "react-icons/md";
import { IoMdClose } from "react-icons/io";

const TodoItems = ({ no, display, text, setTodos }) => {
  const deleteTodo = () => {
    let data = JSON.parse(localStorage.getItem("todos"));
    data = data.filter((todo) => todo.no !== no); // Corrected filtering
    setTodos(data);
  };

  const toggle = () => {
    let data = JSON.parse(localStorage.getItem("todos"));
    for (let i = 0; i < data.length; i++) {
      if (data[i].no === no) {
        if (data[i].display === "") {
          data[i].display = "line-through";
        } else {
          data[i].display = "";
        }
        break;
      }
    }
    setTodos(data);
  };

  return (
    <div className="flex items-center justify-between bg-gray-800 p-4 mb-4 rounded-lg shadow-md text-gray-100">
      {/* Left Section: Icon and Text */}
      <div className="flex items-center gap-4" onClick={() => toggle(no)}>
        {display === "" ? (
          <button className="text-2xl text-gray-400">
            <MdOutlineRadioButtonUnchecked />
          </button>
        ) : (
          <button className="text-2xl text-green-400">
            <IoIosCheckmarkCircle />
          </button>
        )}

        <h4 className={`text-lg ${display}`}>{text}</h4>
        {/* Apply dynamic style here */}
      </div>

      {/* Right Section: Close Icon */}
      <button
        onClick={() => deleteTodo(no)}
        className="text-xl text-red-500 hover:text-red-400 transition duration-200"
      >
        <IoMdClose />
      </button>
    </div>
  );
};

export default TodoItems;