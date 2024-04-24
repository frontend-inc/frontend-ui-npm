"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var frontend_js_1 = require("frontend-js");
var useAuthorized = function (params) {
    var appId = params.appId;
    var currentUser = (0, frontend_js_1.useAuth)().currentUser;
    var _a = (0, react_1.useState)(null), authorized = _a[0], setAuthorized = _a[1];
    var checkUserAuthorized = function (currentUser) {
        var _a;
        if (!((_a = currentUser === null || currentUser === void 0 ? void 0 : currentUser.app_users) === null || _a === void 0 ? void 0 : _a.map(function (appUser) { return appUser.app.handle; }).includes(appId))) {
            setAuthorized(false);
        }
        else {
            setAuthorized(true);
        }
    };
    (0, react_1.useEffect)(function () {
        if (currentUser === null || currentUser === void 0 ? void 0 : currentUser.id) {
            checkUserAuthorized(currentUser);
        }
    }, [currentUser]);
    return {
        authorized: authorized,
        setAuthorized: setAuthorized,
    };
};
exports.default = useAuthorized;
