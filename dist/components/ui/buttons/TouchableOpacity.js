'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var hooks_1 = require("../../../hooks");
var TouchableOpacity = function (props) {
    var children = props.children, handleClick = props.handleClick;
    var _a = (0, hooks_1.useClickOrDrag)({
        onClick: handleClick,
    }), onMouseDown = _a.onMouseDown, onMouseUp = _a.onMouseUp;
    return (react_1.default.createElement("button", { onMouseDown: onMouseDown, onMouseUp: onMouseUp, className: "focus:outline-none focus:ring-2 rounded-lg" }, children));
};
exports.default = TouchableOpacity;
