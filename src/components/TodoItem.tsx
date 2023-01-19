import { Component } from "solid-js";

interface ITodoItemProps {
  text: string;
}

const TodoItem: Component<ITodoItemProps> = ({ text }) => {
  return <div class="border p-2 border-dark">{text}</div>;
};

export default TodoItem;
