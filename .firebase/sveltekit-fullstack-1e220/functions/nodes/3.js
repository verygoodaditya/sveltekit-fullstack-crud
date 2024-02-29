

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/dashboard/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.DYZ6qv6P.js","_app/immutable/chunks/scheduler.DHKgWpgq.js","_app/immutable/chunks/index.CH_yHiIP.js","_app/immutable/chunks/store.D9NLukO8.js","_app/immutable/chunks/index.YyEweObM.js"];
export const stylesheets = ["_app/immutable/assets/3.Cj8h3dk3.css"];
export const fonts = [];
