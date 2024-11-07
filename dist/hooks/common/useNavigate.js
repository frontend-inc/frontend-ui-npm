'use client';
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var navigation_1 = require("next/navigation");
var __1 = require("..");
var useNavigate = function (params) {
    var _a = params || {}, handleClick = _a.handleClick, _path = _a.path, url = _a.url;
    var clientUrl = (0, __1.useApp)().clientUrl;
    var router = (0, navigation_1.useRouter)();
    var onClick = function (path) {
        if (handleClick) {
            handleClick();
        }
        else if (url) {
            window.open(url, '_blank');
        }
        else if (_path) {
            window.scrollTo({
                top: 0,
                behavior: 'smooth',
            });
            router.push("".concat(clientUrl).concat(_path));
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
