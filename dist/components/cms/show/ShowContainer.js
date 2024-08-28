"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var __1 = require("../..");
var frontend_js_1 = require("frontend-js");
var ShowContainer = function (props) {
    var _a = props || {}, url = _a.url, foreignUrl = _a.foreignUrl, resource = _a.resource, children = _a.children;
    return (react_1.default.createElement(frontend_js_1.ResourceProvider, { name: "document", resource: resource, url: url, foreignUrl: foreignUrl },
        children,
        react_1.default.createElement(__1.CollectionForm, null)));
};
exports.default = ShowContainer;
