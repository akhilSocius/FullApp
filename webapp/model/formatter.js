sap.ui.define([], function () {
	"use strict";

	return {
		getClass: function (oVal) {
			if (oVal % 2 === 0) {
				return "style1";
			}
			else {
				return "style2";
			}
		}
	};
});