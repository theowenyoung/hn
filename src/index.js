// import 'promise-polyfill';
// import 'isomorphic-fetch';
import { h, render } from "preact";
function init() {
	let App = require("./components/app").default;
	const elements = document.querySelectorAll(".hn-card");
	if (elements && elements.length > 0) {
		for (let i = 0; i < elements.length; i++) {
			const element = elements[i];
			if (element && element.dataset.id) {
				const hnID = element.dataset.id;
				render(<App id={hnID} />, element);
			} else {
				console.warn("Can not detect data-id");
			}
		}
	} else {
		console.warn("Can not detect the hn-card element");
		return;
	}
}
// in development, set up HMR:
if (module.hot) {
	//require('preact/devtools');   // turn this on if you want to enable React DevTools!
	module.hot.accept("./components/app", () => requestAnimationFrame(init));
}
document.addEventListener("DOMContentLoaded", function () {
	//the event occurred
	init();
});
