import { c as create_ssr_component, e as escape, a as subscribe, d as each, b as add_attribute, v as validate_component, n as null_to_empty } from "../../../chunks/ssr.js";
import "../../../chunks/firebase.js";
import "firebase/auth";
import { w as writable } from "../../../chunks/index.js";
import "firebase/firestore";
const authStore = writable({
  user: null,
  loading: true,
  data: {}
});
const css$1 = {
  code: ".todo.svelte-1fl9h32.svelte-1fl9h32{border-left:1px solid cyan;padding:8px 14px;display:flex;align-items:center;justify-content:space-between}.actions.svelte-1fl9h32.svelte-1fl9h32{display:flex;align-items:center;gap:14px;font-size:1.3rem}.actions.svelte-1fl9h32 i.svelte-1fl9h32{cursor:pointer}.actions.svelte-1fl9h32 i.svelte-1fl9h32:hover{color:coral}",
  map: null
};
const TodoItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { index } = $$props;
  let { todo } = $$props;
  let { editTodo } = $$props;
  let { removeTodo } = $$props;
  if ($$props.index === void 0 && $$bindings.index && index !== void 0)
    $$bindings.index(index);
  if ($$props.todo === void 0 && $$bindings.todo && todo !== void 0)
    $$bindings.todo(todo);
  if ($$props.editTodo === void 0 && $$bindings.editTodo && editTodo !== void 0)
    $$bindings.editTodo(editTodo);
  if ($$props.removeTodo === void 0 && $$bindings.removeTodo && removeTodo !== void 0)
    $$bindings.removeTodo(removeTodo);
  $$result.css.add(css$1);
  return `<div class="todo svelte-1fl9h32"><p>${escape(index + 1)}. ${escape(todo)}</p> <div class="actions svelte-1fl9h32"><i class="fa-regular fa-pen-to-square svelte-1fl9h32"></i> <i class="fa-regular fa-trash-can svelte-1fl9h32"></i></div> </div>`;
});
const css = {
  code: ".mainContainer.svelte-11qu6c4.svelte-11qu6c4{display:flex;flex-direction:column;min-height:100vh;gap:24px;padding:24px;width:100%;max-width:1000px;margin:0 auto}.headerContainer.svelte-11qu6c4.svelte-11qu6c4{display:flex;align-items:center;justify-content:space-between}.headerBtns.svelte-11qu6c4.svelte-11qu6c4{display:flex;align-items:center;gap:13px}.headerContainer.svelte-11qu6c4 button.svelte-11qu6c4{padding:10px 18px;background:rgb(145, 164, 167);border:none;color:rgb(56, 55, 55);font-weight:600;cursor:pointer;transition:background 0.2s ease-in-out,\r\n			color 0.2s ease-in-out;border-radius:4px;display:flex;align-items:center;gap:10px}.headerContainer.svelte-11qu6c4 button.svelte-11qu6c4:hover{background:rgb(0, 129, 169);color:rgb(215, 215, 215)}.headerContainer.svelte-11qu6c4 button i.svelte-11qu6c4{font-size:1.1rem}main.svelte-11qu6c4.svelte-11qu6c4{display:flex;flex-direction:column;gap:8px;flex:1}.todo.svelte-11qu6c4.svelte-11qu6c4{border-left:1px solid cyan;padding:8px 14px;display:flex;align-items:center;justify-content:space-between}.actions.svelte-11qu6c4.svelte-11qu6c4{display:flex;align-items:center;gap:14px;font-size:1.3rem}.enterTodo.svelte-11qu6c4.svelte-11qu6c4{display:flex;align-items:stretch;border:1.3px solid rgb(197, 211, 211);border-radius:6px;overflow:hidden}.errorBorder.svelte-11qu6c4.svelte-11qu6c4{border-color:rgb(255, 136, 136) !important}.enterTodo.svelte-11qu6c4 input.svelte-11qu6c4{background:transparent;border:none;padding:14px;color:white;flex:1}.enterTodo.svelte-11qu6c4 input.svelte-11qu6c4:focus{outline:none}.enterTodo.svelte-11qu6c4 button.svelte-11qu6c4{padding:0 39px;background:rgb(145, 164, 167);border:none;color:rgb(56, 55, 55);font-weight:600;cursor:pointer;transition:background 0.2s ease-in-out,\r\n			color 0.2s ease-in-out;border-radius:4px}.enterTodo.svelte-11qu6c4 button.svelte-11qu6c4:hover{background:rgb(0, 129, 169);color:rgb(215, 215, 215)}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $authStore, $$unsubscribe_authStore;
  $$unsubscribe_authStore = subscribe(authStore, (value) => $authStore = value);
  let todoList = [];
  let currTodo = "";
  authStore.subscribe((curr) => {
    todoList = curr.data.todos;
  });
  function editTodo(index) {
    let newTodoList = [...todoList].filter((val, i) => {
      console.log(i, index, i !== index);
      return i != index;
    });
    currTodo = todoList[index];
    todoList = newTodoList;
  }
  function removeTodo(index) {
    let newTodoList = [...todoList].filter((val, i) => {
      console.log(i, index, i !== index);
      return i != index;
    });
    todoList = newTodoList;
  }
  $$result.css.add(css);
  $$unsubscribe_authStore();
  return `${!$authStore.loading ? `<div class="mainContainer svelte-11qu6c4"><div class="headerContainer svelte-11qu6c4"><h1 data-svelte-h="svelte-1g9d2um">Todo List</h1> <div class="headerBtns svelte-11qu6c4"><button class="svelte-11qu6c4" data-svelte-h="svelte-1g5ful5"><i class="fa-regular fa-floppy-disk svelte-11qu6c4"></i> <p>Save</p></button> <button class="svelte-11qu6c4" data-svelte-h="svelte-f6h3b2"><i class="fa-solid fa-right-from-bracket svelte-11qu6c4"></i> <p>Logout</p></button></div></div> <main class="svelte-11qu6c4">${todoList.length === 0 ? `<p data-svelte-h="svelte-1jtqiij">You have nothing to do!</p>` : ``} ${each(todoList, (todo, index) => {
    return `${validate_component(TodoItem, "TodoItem").$$render($$result, { todo, index, removeTodo, editTodo }, {}, {})}`;
  })}</main> <div class="${escape(null_to_empty("enterTodo "), true) + " svelte-11qu6c4"}"><input type="text" placeholder="Enter todo" class="svelte-11qu6c4"${add_attribute("value", currTodo, 0)}> <button class="svelte-11qu6c4" data-svelte-h="svelte-o5h7g0">ADD</button></div></div>` : ``}`;
});
export {
  Page as default
};
