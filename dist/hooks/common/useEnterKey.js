"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
// Helper hook to run a function on Enter key press
var useEnterKey = function (props) {
    var onEnter = props.onEnter, _a = props.skip, skip = _a === void 0 ? false : _a;
    var handleKeyPress = function (ev) {
        if (ev.key == 'Enter') {
            onEnter();
        }
    };
    (0, react_1.useEffect)(function () {
        if (!skip) {
            window.addEventListener('keydown', handleKeyPress);
            return function () {
                window.removeEventListener('keydown', handleKeyPress);
            };
        }
    }, [onEnter, skip]);
    return;
};
exports.default = useEnterKey;
