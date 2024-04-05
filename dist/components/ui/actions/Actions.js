"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var ActionButton_1 = __importDefault(require("./ActionButton"));
var Actions = function (props) {
    var actions = props.actions, resource = props.resource;
    return (react_1.default.createElement(material_1.Stack, { direction: "row", spacing: 1 }, actions.map(function (action, index) { return (react_1.default.createElement(ActionButton_1.default, { key: index, color: index == 0 ? 'primary' : 'secondary', action: action, resource: resource })); })));
};
exports.default = Actions;
