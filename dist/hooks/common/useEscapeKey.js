"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
// Helper hook to run a function on Enter key press
var useEscapeKey = function (onEscape) {
    (0, react_1.useEffect)(function () {
        var handleKeyPress = function (ev) {
            if (ev.key === 'Escape') {
                if (onEscape)
                    onEscape();
            }
        };
        window.addEventListener('keydown', handleKeyPress);
        return function () {
            window.removeEventListener('keydown', handleKeyPress);
        };
    }, [onEscape]);
    return;
};
exports.default = useEscapeKey;
