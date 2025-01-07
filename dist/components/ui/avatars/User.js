'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_2 = require("@nextui-org/react");
var helpers_1 = require("../../../helpers");
var User = function (props) {
    var _a;
    var isBordered = props.isBordered, user = props.user, _b = props.size, size = _b === void 0 ? 'md' : _b, radius = props.radius, className = props.className;
    return (react_1.default.createElement(react_2.User, { avatarProps: {
            src: (_a = user === null || user === void 0 ? void 0 : user.avatar) === null || _a === void 0 ? void 0 : _a.url,
            name: (0, helpers_1.getInitials)(user === null || user === void 0 ? void 0 : user.name),
            alt: user === null || user === void 0 ? void 0 : user.name,
            radius: radius,
            isBordered: isBordered,
            className: isBordered ? 'mr-1' : '',
            size: size,
        }, name: user === null || user === void 0 ? void 0 : user.name, description: user === null || user === void 0 ? void 0 : user.email, className: className }));
};
exports.default = User;
