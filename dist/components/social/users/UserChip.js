"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var __1 = require("../..");
var material_1 = require("@mui/material");
var UserChip = function (props) {
    var user = props.user, _a = props.size, size = _a === void 0 ? 24 : _a;
    if (!(user === null || user === void 0 ? void 0 : user.name))
        return null;
    return (react_1.default.createElement(material_1.Stack, { sx: sx.root, direction: "row", spacing: 1 },
        react_1.default.createElement(__1.UserAvatar, { user: user, size: size }),
        react_1.default.createElement(material_1.Typography, { variant: "body2", color: "text.primary" }, user === null || user === void 0 ? void 0 : user.name)));
};
exports.default = UserChip;
var sx = {
    root: {
        alignItems: 'center',
    },
};
