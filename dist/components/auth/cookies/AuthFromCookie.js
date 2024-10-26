'use client';
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var frontend_js_1 = require("frontend-js");
var cookies_next_1 = require("cookies-next");
var AuthFromCookie = function () {
    var _a = (0, frontend_js_1.useAuth)(), authCookie = _a.authCookie, fetchMe = _a.fetchMe, currentUser = _a.currentUser, authenticateFromToken = _a.authenticateFromToken;
    (0, react_1.useEffect)(function () {
        if (!(currentUser === null || currentUser === void 0 ? void 0 : currentUser.id)) {
            var authToken = (0, cookies_next_1.getCookie)(authCookie);
            if (authToken) {
                authenticateFromToken(String(authToken));
                if (!currentUser) {
                    fetchMe();
                }
            }
        }
    }, [currentUser === null || currentUser === void 0 ? void 0 : currentUser.id]);
    return null;
};
exports.default = AuthFromCookie;
