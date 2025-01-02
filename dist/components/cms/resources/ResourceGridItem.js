'use client';
"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_2 = require("@nextui-org/react");
var react_3 = require("@nextui-org/react");
var components_1 = require("../../../components");
function ResourceGridItem(props) {
    var _a = props || {}, selectable = _a.selectable, selected = _a.selected, primary = _a.primary, secondary = _a.secondary, avatar = _a.avatar, label = _a.label, image = _a.image, handleClick = _a.handleClick, handleEdit = _a.handleEdit, handleDelete = _a.handleDelete, handleSelect = _a.handleSelect, secondaryAction = _a.secondaryAction, _b = _a.slots, slots = _b === void 0 ? {} : _b;
    return (react_1.default.createElement(react_3.Card, { isPressable: true, onPress: handleClick, className: (0, react_2.cn)('border-2 border-transparent hover:border-primary', selected && 'border-primary') },
        react_1.default.createElement(react_3.CardHeader, { className: "w-full p-2 flex flex-row space-x-2 justify-between items-center" },
            react_1.default.createElement("div", { className: "flex flex-row space-x-2 items-center" },
                selectable && (react_1.default.createElement(react_3.Checkbox, { isSelected: selected, onValueChange: handleSelect })),
                secondaryAction),
            (handleEdit || handleDelete) && (react_1.default.createElement(components_1.MenuButton, { handleEdit: handleEdit, handleDelete: handleDelete }))),
        react_1.default.createElement("div", { className: 'w-full h-full' },
            avatar && avatar,
            image && (react_1.default.createElement(react_3.Image, __assign({ isZoomed: true, radius: 'none', src: image, alt: label || 'Resource image', width: 320, height: 160, className: "object-cover w-full h-full" }, slots.image)))),
        (primary || secondary) && (react_1.default.createElement(react_3.CardFooter, { className: "flex flex-col p-4" },
            react_1.default.createElement(components_1.Typography, { variant: "body1" }, primary),
            secondary && react_1.default.createElement(components_1.Typography, { variant: "body2" }, secondary)))));
}
exports.default = ResourceGridItem;
