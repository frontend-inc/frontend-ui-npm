"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var __1 = require("../..");
var material_1 = require("@mui/material");
var UserButton = function (props) {
    var user = props.user, _a = props.size, size = _a === void 0 ? 24 : _a, handleClick = props.handleClick;
    if (!(user === null || user === void 0 ? void 0 : user.name))
        return null;
    return (react_1.default.createElement(material_1.Box, null,
        react_1.default.createElement(material_1.Button, { sx: sx.root, onClick: handleClick, startIcon: react_1.default.createElement(__1.UserAvatar, { user: user, size: size }) }, user === null || user === void 0 ? void 0 : user.name)));
};
exports.default = UserButton;
var sx = {
    root: {
        color: 'text.secondary',
        '&:hover': {
            bgcolor: 'transparent',
        }
    }
};
