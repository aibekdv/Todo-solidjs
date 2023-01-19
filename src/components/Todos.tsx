import { For, Component, Accessor, Setter } from "solid-js";

interface ITodosProps {
  list: Accessor<string[]>;
  setList: Setter<string[]>;
}

const Todos: Component<ITodosProps> = ({ list, setList }) => {
  return (
    <For
      each={list()}
      fallback={<div class="text-2xl text-red-500">Todo list is empty!</div>}
    >
      {(todo) => (
        <div class="border mb-1 p-2 border-dark flex justify-between">
          {todo}
          <button
            class="bg-red-500 text-white py-1 px-2 hover:bg-red-600 rounded"
            onClick={() => setList(list().filter((i) => i !== todo))}
          >
            delete
          </button>
        </div>
      )}
    </For>
  );
};


export default Todos