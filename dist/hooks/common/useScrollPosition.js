"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var useScrollPosition = function () {
    var _a = (0, react_1.useState)({
        x: 0,
        y: 0,
    }), scrollPosition = _a[0], setScrollPosition = _a[1];
    var handleScroll = function () {
        setScrollPosition({
            x: window.scrollX,
            y: window.scrollY,
        });
    };
    (0, react_1.useEffect)(function () {
        window.addEventListener("scroll", handleScroll);
        return function () {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return {
        position: scrollPosition,
    };
};
exports.default = useScrollPosition;
