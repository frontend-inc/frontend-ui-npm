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
var link_1 = __importDefault(require("next/link"));
var frontend_shadcn_1 = require("frontend-shadcn");
var __1 = require("../..");
var core_1 = require("../../core");
var ListCard = function (props) {
    var _a = props || {}, _b = _a.circular, circular = _b === void 0 ? false : _b, _c = _a.sortable, sortable = _c === void 0 ? false : _c, _d = _a.selectable, selectable = _d === void 0 ? false : _d, _e = _a.selected, selected = _e === void 0 ? false : _e, label = _a.label, primary = _a.primary, secondary = _a.secondary, actions = _a.actions, secondaryAction = _a.secondaryAction, handleClick = _a.handleClick, handleSelect = _a.handleSelect, image = _a.image, _f = _a.size, size = _f === void 0 ? 140 : _f, disableImage = _a.disableImage, _g = _a.slots, slots = _g === void 0 ? {
        item: {},
        image: {},
    } : _g;
    return (react_1.default.createElement("div", { className: "p-4 border-b border-border last:border-b-0 hover:bg-gray-50 transition-colors duration-200" },
        react_1.default.createElement("div", { className: "flex flex-row items-center w-full" },
            selectable && (react_1.default.createElement("div", { className: "mr-2" },
                react_1.default.createElement(frontend_shadcn_1.Checkbox, { checked: selected, onCheckedChange: handleSelect }))),
            sortable && (react_1.default.createElement(__1.Icon, { name: "GripVertical", className: "text-muted-foreground" })),
            react_1.default.createElement("div", { className: "flex flex-row justify-start items-start space-x-4 flex-grow" },
                !disableImage && (react_1.default.createElement("div", { className: "flex-shrink-0 w-[180px]" },
                    react_1.default.createElement("div", { className: "w-full pr-2 h-full flex justify-center sm:justify-start items-center" }, circular ? (react_1.default.createElement(__1.AvatarImage, __assign({ label: label, src: image, height: size, alt: primary, onClick: handleClick }, slots.image))) : (react_1.default.createElement(__1.Image, __assign({ label: label, src: image, height: size, alt: primary, aspectRatio: 1.0, onClick: handleClick }, slots.image)))))),
                react_1.default.createElement("div", { className: "flex flex-col justify-between h-[140px] flex-grow" },
                    react_1.default.createElement("div", { className: "flex flex-col space-y-1" },
                        react_1.default.createElement(link_1.default, { href: "#", onClick: handleClick, className: "text-foreground no-underline" },
                            react_1.default.createElement(core_1.Typography, { variant: "subtitle1" }, primary)),
                        react_1.default.createElement(core_1.Typography, { variant: "body2", className: "text-muted-foreground" }, secondary)),
                    react_1.default.createElement("div", { className: "flex flex-row justify-between items-center w-full" },
                        actions,
                        secondaryAction))))));
};
exports.default = ListCard;
