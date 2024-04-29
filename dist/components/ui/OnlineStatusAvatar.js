"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../../components");
var OnlineStatusAvatar = function (props) {
    var user = props.user, size = props.size;
    return (react_1.default.createElement(components_1.OnlineStatusBadge, null,
        react_1.default.createElement(components_1.UserAvatar, { user: user, size: size })));
};
exports.default = OnlineStatusAvatar;
