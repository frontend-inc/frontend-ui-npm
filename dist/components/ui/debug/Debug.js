"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var Debug = function (props) {
    (0, react_1.useEffect)(function () {
        console.log('Debug', props);
    }, [props]);
    return null;
};
exports.default = Debug;
