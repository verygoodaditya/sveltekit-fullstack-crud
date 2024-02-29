export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.PsZ-BaLG.js","app":"_app/immutable/entry/app.DBbfzruO.js","imports":["_app/immutable/entry/start.PsZ-BaLG.js","_app/immutable/chunks/entry.ChNg4adc.js","_app/immutable/chunks/scheduler.DHKgWpgq.js","_app/immutable/chunks/index.YyEweObM.js","_app/immutable/entry/app.DBbfzruO.js","_app/immutable/chunks/scheduler.DHKgWpgq.js","_app/immutable/chunks/index.CH_yHiIP.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/dashboard",
				pattern: /^\/dashboard\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
