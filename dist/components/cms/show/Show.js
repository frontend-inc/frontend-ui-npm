"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var Article_1 = __importDefault(require("./Article"));
var Item_1 = __importDefault(require("./Item"));
var Person_1 = __importDefault(require("./Person"));
var Details_1 = __importDefault(require("../details/Details"));
var Show = function (props) {
    var _a = props || {}, _b = _a.style, style = _b === void 0 ? 'item' : _b, fields = _a.fields, url = _a.url, enableBorder = _a.enableBorder, actions = _a.actions, resource = _a.resource;
    return (react_1.default.createElement(material_1.Stack, { direction: "column", spacing: 4, sx: sx.root },
        style == 'item' && (react_1.default.createElement(Item_1.default, { resource: resource, actions: actions })),
        style == 'article' && (react_1.default.createElement(Article_1.default, { resource: resource, actions: actions })),
        style == 'person' && (react_1.default.createElement(Person_1.default, { resource: resource, actions: actions })),
        react_1.default.createElement(Details_1.default, { url: url, fields: fields, resource: resource, enableBorder: enableBorder })));
};
exports.default = Show;
var sx = {
    root: {
        width: '100%',
    }
};
