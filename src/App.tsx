import { Component, createEffect, createSignal, For, onMount } from "solid-js";
import Form from "./components/Form";

const App: Component = () => {
  const [list, setList] = createSignal<string[]>([]);

  return (
    <div class="container mx-auto max-w-xl">
      <h2 class="text-2xl font-normal uppercase font-mono">
        Todo with <span class="text-blue-500">Solid.JS</span>
      </h2>
      <Form setList={setList} />
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
    </div>
  );
};

export default App;
