"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../../../components");
var frontend_js_1 = require("frontend-js");
var HeroContainer = function (props) {
    var _a = props || {}, url = _a.url, fields = _a.fields, resource = _a.resource, children = _a.children;
    return (react_1.default.createElement(frontend_js_1.CollectionProvider, { resource: resource, url: url },
        children,
        react_1.default.createElement(components_1.CollectionFormModal, { fields: fields })));
};
exports.default = HeroContainer;
