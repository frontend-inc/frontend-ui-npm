"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var __1 = require("../..");
var frontend_js_1 = require("frontend-js");
var ListContainer = function (props) {
    var url = props.url, _a = props.name, name = _a === void 0 ? 'document' : _a, _b = props.query, query = _b === void 0 ? {} : _b, children = props.children;
    return (react_1.default.createElement(frontend_js_1.ResourceProvider, { name: name, url: url },
        react_1.default.createElement(__1.Query, { query: query }, children)));
};
exports.default = ListContainer;
