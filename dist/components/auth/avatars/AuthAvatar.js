"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var frontend_js_1 = require("frontend-js");
var components_1 = require("../../../components");
var AuthAvatar = function (props) {
    var _a;
    var _b = props.size, size = _b === void 0 ? 20 : _b;
    var currentUser = (0, frontend_js_1.useAuth)().currentUser;
    return (react_1.default.createElement(material_1.Avatar, { variant: "circular", src: (_a = currentUser === null || currentUser === void 0 ? void 0 : currentUser.avatar) === null || _a === void 0 ? void 0 : _a.url, sx: sx.avatar },
        react_1.default.createElement(components_1.Icon, { name: "User", size: size, color: 'primary.contrastText' })));
};
exports.default = AuthAvatar;
var sx = {
    avatar: {
        height: '32px',
        width: '32px',
        bgcolor: 'accent.main',
        color: 'text.primary',
    },
};
