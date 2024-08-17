"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var hooks_1 = require("../../../hooks");
var ButtonMenu = function (props) {
    var onClick = props.onClick, action = props.action, actionId = props.actionId, path = props.path, label = props.label;
    var handleClick = (0, hooks_1.useButtons)({
        action: action,
        actionId: actionId,
        path: path,
    }).handleClick;
    return (react_1.default.createElement(material_1.MenuItem, { onClick: onClick ? onClick : handleClick }, label));
};
exports.default = ButtonMenu;
