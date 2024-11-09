'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Avatar_1 = __importDefault(require("./Avatar"));
var helpers_1 = require("../../../helpers");
var UserAvatar = function (props) {
    var _a;
    var user = props.user, _b = props.variant, variant = _b === void 0 ? 'rounded' : _b, _c = props.size, size = _c === void 0 ? 36 : _c, className = props.className, _d = props.enableGradient, enableGradient = _d === void 0 ? false : _d;
    return (react_1.default.createElement(Avatar_1.default, { variant: variant, label: (0, helpers_1.getInitials)(user === null || user === void 0 ? void 0 : user.name), size: size, src: (_a = user === null || user === void 0 ? void 0 : user.avatar) === null || _a === void 0 ? void 0 : _a.url, enableGradient: enableGradient, className: className }));
};
exports.default = UserAvatar;
