

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.BbpFgs25.js","_app/immutable/chunks/scheduler.DHKgWpgq.js","_app/immutable/chunks/index.CH_yHiIP.js","_app/immutable/chunks/store.D9NLukO8.js","_app/immutable/chunks/index.YyEweObM.js"];
export const stylesheets = ["_app/immutable/assets/2.nRbQHJuo.css"];
export const fonts = [];
