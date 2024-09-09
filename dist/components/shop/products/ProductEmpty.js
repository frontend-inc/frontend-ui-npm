"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var __1 = require("../..");
var material_1 = require("@mui/material");
var frontend_js_1 = require("frontend-js");
var ProductEmpty = function (props) {
    var resources = (0, frontend_js_1.useResourceContext)().resources;
    var _a = props || {}, icon = _a.icon, title = _a.title, description = _a.description;
    if ((resources === null || resources === void 0 ? void 0 : resources.length) > 0)
        return null;
    return (react_1.default.createElement(material_1.Box, { sx: sx.root },
        react_1.default.createElement(__1.Placeholder, { icon: icon, title: title, description: description })));
};
exports.default = ProductEmpty;
var sx = {
    root: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 2,
    },
};
