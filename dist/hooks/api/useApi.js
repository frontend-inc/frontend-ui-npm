"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var core_1 = require("context/core");
var useApi = function () {
    var api = (0, react_1.useContext)(core_1.ApiContext).api;
    return {
        api: api,
    };
};
exports.default = useApi;
