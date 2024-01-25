"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var useLoaded = function (props) {
    var _a = props.loading, loading = _a === void 0 ? false : _a;
    var _b = (0, react_1.useState)(false), loaded = _b[0], setLoaded = _b[1];
    (0, react_1.useEffect)(function () {
        if (loading) {
            setLoaded(false);
        }
        else {
            setLoaded(true);
        }
    }, [loading]);
    return {
        loaded: loaded,
    };
};
exports.default = useLoaded;
