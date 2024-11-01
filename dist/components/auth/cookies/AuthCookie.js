'use client';
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var frontend_js_1 = require("frontend-js");
var cookies_next_1 = require("cookies-next");
var AuthCookie = function () {
    var _a = (0, frontend_js_1.useAuth)(), authCookie = _a.authCookie, authenticateFromToken = _a.authenticateFromToken;
    var mounted = (0, react_1.useRef)(false);
    (0, react_1.useEffect)(function () {
        if (!mounted.current) {
            mounted.current = true;
            var authToken = (0, cookies_next_1.getCookie)(authCookie);
            if (authToken) {
                authenticateFromToken(String(authToken));
            }
        }
    }, []);
    return null;
};
exports.default = AuthCookie;
