'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../../../components");
var __1 = require("../..");
var hooks_1 = require("../../../hooks");
var frontend_shadcn_1 = require("frontend-shadcn");
var Cover = function (props) {
    var label = props.label, title = props.title, subtitle = props.subtitle, handleClick = props.handleClick, image = props.image, _a = props.height, height = _a === void 0 ? 400 : _a, _b = props.alt, alt = _b === void 0 ? 'image' : _b, _c = props.enableGradient, enableGradient = _c === void 0 ? false : _c, _d = props.enableOverlay, enableOverlay = _d === void 0 ? false : _d, _e = props.alignItems, alignItems = _e === void 0 ? 'center' : _e, buttonText = props.buttonText, actions = props.actions, path = props.path;
    var onClick = (0, hooks_1.useNavigate)({
        handleClick: handleClick,
    });
    return (react_1.default.createElement("div", { className: (0, frontend_shadcn_1.cn)('dark relative w-full') },
        react_1.default.createElement("div", { className: "hidden sm:block" },
            react_1.default.createElement(__1.Image, { disableBorderRadius: true, src: image, alt: alt, aspectRatio: 2.5, enableGradient: enableGradient, enableOverlay: enableOverlay })),
        react_1.default.createElement("div", { className: "block sm:hidden" },
            react_1.default.createElement(__1.Image, { disableBorderRadius: true, src: image, alt: alt, aspectRatio: 1.0, enableGradient: enableGradient, enableOverlay: enableOverlay })),
        react_1.default.createElement("div", { className: (0, frontend_shadcn_1.cn)('flex flex-col items-center justify-center', height && "h-[".concat(height, "px]"), "absolute top-0 left-0 w-full h-full px-3 sm:px-0") },
            react_1.default.createElement("div", { className: (0, frontend_shadcn_1.cn)('flex flex-col', alignItems === 'flex-start' && 'items-start', alignItems === 'center' && 'items-center', alignItems === 'flex-end' && 'items-end', 'space-y-4') },
                react_1.default.createElement(components_1.Heading, { label: label, title: title, subtitle: subtitle, textAlign: alignItems === 'center' ? 'center' : 'left', size: "lg" }),
                actions,
                buttonText && (react_1.default.createElement("div", { className: "py-2" },
                    react_1.default.createElement(components_1.Button, { size: "lg", onClick: function () { return onClick(path); }, variant: "default" }, buttonText)))))));
};
exports.default = Cover;
