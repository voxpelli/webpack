const System = require("../../../helpers/fakeSystem");

module.exports = {
	beforeExecute: () => {
		System.init({
			external1: {
				default: "the external1 value",
			},
			external2: {
				default: "the external2 value",
			},
			external3: {
				default: "the external3 default export",
				namedThing: "the external3 named export"
			}
		});
	},
	moduleScope(scope) {
		scope.System = System;
	},
	afterExecute: () => {
		System.execute("(anonym)");
	}
};
