"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var ui_1 = require("components/ui");
var OnlineStatusAvatar = function (props) {
    var _a;
    var user = props.user, size = props.size;
    return (react_1.default.createElement(ui_1.OnlineStatusBadge, null,
        react_1.default.createElement(ui_1.UserAvatar, { src: (_a = user === null || user === void 0 ? void 0 : user.avatar) === null || _a === void 0 ? void 0 : _a.url, size: size })));
};
exports.default = OnlineStatusAvatar;
