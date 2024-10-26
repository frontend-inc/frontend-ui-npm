'use client';
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var usePrevious = function (value) {
    var ref = (0, react_1.useRef)();
    // Store current value in ref
    (0, react_1.useEffect)(function () {
        ref.current = value;
    }, [value]);
    return ref.current;
};
exports.default = usePrevious;
