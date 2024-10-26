'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../../../components");
var __1 = require("../..");
var navigation_1 = require("next/navigation");
var hooks_1 = require("../../../hooks");
var frontend_shadcn_1 = require("frontend-shadcn");
var Cover = function (props) {
    var router = (0, navigation_1.useRouter)();
    var clientUrl = (0, hooks_1.useApp)().clientUrl;
    var title = props.title, description = props.description, _a = props.textVariant, textVariant = _a === void 0 ? 'h3' : _a, handleClick = props.handleClick, image = props.image, _b = props.height, height = _b === void 0 ? 400 : _b, _c = props.alt, alt = _c === void 0 ? 'image' : _c, _d = props.enableGradient, enableGradient = _d === void 0 ? false : _d, _e = props.enableOverlay, enableOverlay = _e === void 0 ? false : _e, _f = props.opacity, opacity = _f === void 0 ? 0.65 : _f, _g = props.alignItems, alignItems = _g === void 0 ? 'center' : _g, buttonText = props.buttonText, path = props.path;
    var handleItemClick = function () {
        if (handleClick) {
            return handleClick();
        }
        else if (path) {
            router.push("".concat(clientUrl).concat(path));
        }
    };
    return (react_1.default.createElement("div", { className: (0, frontend_shadcn_1.cn)('dark relative w-full') },
        react_1.default.createElement("div", { className: "hidden sm:block" },
            react_1.default.createElement(__1.Image, { disableBorderRadius: true, src: image, alt: alt, aspectRatio: 2.5, enableGradient: enableGradient, enableOverlay: enableOverlay })),
        react_1.default.createElement("div", { className: "block sm:hidden" },
            react_1.default.createElement(__1.Image, { disableBorderRadius: true, src: image, alt: alt, aspectRatio: 1.0, enableGradient: enableGradient, enableOverlay: enableOverlay })),
        react_1.default.createElement("div", { className: (0, frontend_shadcn_1.cn)('flex flex-col items-center justify-center', height && "h-[".concat(height, "px]"), "absolute top-0 left-0 w-full h-full px-3 sm:px-0") },
            react_1.default.createElement("div", { className: (0, frontend_shadcn_1.cn)('flex flex-col', alignItems === 'flex-start' && 'items-start', alignItems === 'center' && 'items-center', alignItems === 'flex-end' && 'items-end', 'space-y-4') },
                title && (react_1.default.createElement(components_1.Typography, { className: "text-foreground", variant: textVariant, textAlign: alignItems === 'center' ? 'center' : 'left' }, title)),
                description && (react_1.default.createElement(components_1.Typography, { className: "text-foreground", variant: "subtitle2", textAlign: alignItems === 'center' ? 'center' : 'left' }, description)),
                buttonText && (react_1.default.createElement("div", { className: "py-2" },
                    react_1.default.createElement(components_1.Button, { size: "lg", onClick: handleItemClick, variant: "default" }, buttonText)))))));
};
exports.default = Cover;
