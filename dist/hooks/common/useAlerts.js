"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var context_1 = require("../../context");
var useAlerts = function () {
    var setAlert = (0, react_1.useContext)(context_1.AppContext).setAlert;
    var showAlertError = function (message) { return setAlert({ message: message, variant: 'error' }); };
    var showAlertWarning = function (message) {
        return setAlert({ message: message, variant: 'warning' });
    };
    var showAlertSuccess = function (message) {
        return setAlert({ message: message, variant: 'success' });
    };
    return {
        showAlertError: showAlertError,
        showAlertWarning: showAlertWarning,
        showAlertSuccess: showAlertSuccess,
    };
};
exports.default = useAlerts;
