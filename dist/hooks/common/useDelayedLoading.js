"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var use_debounce_1 = require("use-debounce");
function useDelayedLoading(_a) {
    var loading = _a.loading, _b = _a.delay, delay = _b === void 0 ? 500 : _b;
    var debouncedLoading = (0, use_debounce_1.useDebounce)(loading, delay)[0];
    return {
        loading: debouncedLoading,
    };
}
exports.default = useDelayedLoading;
