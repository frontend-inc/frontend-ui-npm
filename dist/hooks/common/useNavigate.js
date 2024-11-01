'use client';
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var navigation_1 = require("next/navigation");
var __1 = require("..");
var useNavigate = function (params) {
    var handleClick = (params || {}).handleClick;
    var clientUrl = (0, __1.useApp)().clientUrl;
    var router = (0, navigation_1.useRouter)();
    var onClick = function (path) {
        if (handleClick) {
            handleClick();
        }
        else if (path) {
            window.scrollTo({
                top: 0,
                behavior: 'smooth',
            });
            router.push("".concat(clientUrl).concat(path));
        }
    };
    return onClick;
};
exports.default = useNavigate;
