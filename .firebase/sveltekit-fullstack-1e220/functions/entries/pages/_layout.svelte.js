import { c as create_ssr_component } from "../../chunks/ssr.js";
import "../../chunks/firebase.js";
import "firebase/firestore";
import "firebase/auth";
const css = {
  code: ".mainContainer.svelte-dwa91y{min-height:100vh;background:linear-gradient(to bottom right, #000000, #202028);color:white;position:relative;display:flex;flex-direction:column}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="mainContainer svelte-dwa91y">${slots.default ? slots.default({}) : ``} </div>`;
});
export {
  Layout as default
};
