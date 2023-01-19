import { Component, createSignal } from "solid-js";
import Form from "./components/Form";
import Todos from "./components/Todos";

const App: Component = () => {
  const [list, setList] = createSignal<string[]>([]);

  return (
    <div class="container mx-auto max-w-xl">
      <h2 class="text-2xl font-normal uppercase font-mono">
        Todo with <span class="text-blue-500">Solid.JS</span>
      </h2>
      <Form setList={setList} />
      <Todos list={list} setList={setList} />
    </div>
  );
};

export default App;
