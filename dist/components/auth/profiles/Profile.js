"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var components_1 = require("../../../components");
var Profile = function (props) {
    var _a = props || {}, url = _a.url, fields = _a.fields, enableBorder = _a.enableBorder, actions = _a.actions, resource = _a.resource;
    return (react_1.default.createElement(material_1.Stack, { direction: "column", spacing: 4, sx: sx.root },
        react_1.default.createElement(components_1.Person, { resource: resource, actions: actions }),
        react_1.default.createElement(components_1.Details, { url: url, fields: fields, resource: resource, enableBorder: enableBorder })));
};
exports.default = Profile;
var sx = {
    root: {
        width: '100%',
    },
};
