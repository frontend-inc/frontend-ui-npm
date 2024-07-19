"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var frontend_js_1 = require("frontend-js");
var swr_1 = __importDefault(require("swr"));
var useFetchForm = function (props) {
    var url = (props || {}).url;
    var api = (0, react_1.useContext)(frontend_js_1.ApiContext).api;
    var fetcher = function (url) { return api.get(url); };
    var _a = (0, swr_1.default)("".concat(url, "/form_fields"), fetcher), isLoading = _a.isLoading, data = _a.data, error = _a.error;
    return {
        loading: isLoading,
        errors: error,
        fields: data === null || data === void 0 ? void 0 : data.data
    };
};
exports.default = useFetchForm;
