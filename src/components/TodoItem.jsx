import React, { useState } from "react";
import { useTodo } from "../context/TodoContext";

const TodoItem = ({ todo }) => {
  const [todoMsg, setTodoMsg] = useState(todo.todo);
  const [isTodoEditable, setIsTodoEditable] = useState(false);
  const [isTodoChecked, setIsTodoChecked] = useState(false);

  const { editTodo, deleteTodo } = useTodo();
  
  const updateTodo = () => {
    editTodo(todo.id, { ...todo, todo: todoMsg });
    setIsTodoEditable(false);
  };

  return (
    <div
      className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
        isTodoChecked ? "bg-[#c6e9a7]" : "bg-[#b464f2]"
      }`}
    >
      <input
        type="checkbox"
        className="cursor-pointer"
        checked={isTodoChecked}
        onChange={() => setIsTodoChecked((prev) => !prev)}
      />
      <input
        type="text"
        className={`border outline-none w-full bg-transparent rounded-lg ${
          isTodoEditable ? "border-black/50 px-2" : "border-transparent"
        } ${isTodoChecked ? "line-through" : ""}`}
        value={todoMsg}
        onChange={(e) => setTodoMsg(e.target.value)}
        readOnly={!isTodoEditable}
      />
      <button
        onClick={() => {
          isTodoEditable ? updateTodo() : setIsTodoEditable((prev) => !prev);
        }}
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-green-100  hover:bg-gray-100 shrink-0 disabled:opacity-50"
      >
        {isTodoEditable ? "📁" : "✏️"}
      </button>
      <button
        onClick={() => deleteTodo(todo.id)}
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-green-100  hover:bg-gray-100 shrink-0"
      >
        ❌
      </button>
    </div>
  );
};

export default TodoItem;
