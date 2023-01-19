import { Component, createEffect, createSignal, Setter } from "solid-js";

interface IFormProps {
  setList: Setter<string[]>;
}

const Form: Component<IFormProps> = ({ setList }) => {
  const [value, setValue] = createSignal<string>("");

  const handleSubmit = (e: Event) => {
    e.preventDefault();
    setList((prev) => [...prev, value()]);
    setValue("");
  };

  return (
    <div class="py-2 w-[100%]">
      <form class="flex flex-1 w-[100%]" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your text here..."
          class="rounded border border-blue-500 text-blue-500 h-10 text-xl p-2 w-[100%] font-mono"
          onChange={(e) => setValue(e.currentTarget.value)}
          value={value()}
        />
        <button
          class="uppercase p-1 rounded bg-blue-500 color-white ml-1 text-white px-8 font-mono hover:bg-blue-600"
          type="submit"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default Form;
