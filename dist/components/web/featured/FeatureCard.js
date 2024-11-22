'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var hooks_1 = require("../../../hooks");
var components_1 = require("../../../components");
var __1 = require("../..");
var navigation_1 = require("next/navigation");
var frontend_shadcn_1 = require("frontend-shadcn");
var FeaturedCard = function (props) {
    var clientUrl = (0, hooks_1.useApp)().clientUrl;
    var _a = props || {}, label = _a.label, title = _a.title, subtitle = _a.subtitle, _b = _a.image, image = _b === void 0 ? '' : _b, href = _a.href, buttonText = _a.buttonText, _c = _a.flexDirection, flexDirection = _c === void 0 ? 'row' : _c, handleClick = _a.handleClick, _d = _a.objectFit, objectFit = _d === void 0 ? 'cover' : _d, _e = _a.enableOverlay, enableOverlay = _e === void 0 ? false : _e, _f = _a.enableGradient, enableGradient = _f === void 0 ? false : _f, _g = _a.border, border = _g === void 0 ? false : _g, _h = _a.fill, fill = _h === void 0 ? false : _h;
    var router = (0, navigation_1.useRouter)();
    var handleItemClick = function () {
        if (handleClick) {
            return handleClick();
        }
        else if (href) {
            router.push("".concat(clientUrl).concat(href));
        }
    };
    return (react_1.default.createElement("div", { className: (0, frontend_shadcn_1.cn)('flex items-center gap-10 flex-wrap md:flex-nowrap', flexDirection === 'row-reverse' ? 'flex-row-reverse' : 'flex-row', border && 'p-6 border-2 border-border rounded-lg', fill && 'p-6 bg-muted/50 rounded-lg') },
        react_1.default.createElement("div", { className: "w-full md:w-1/2" },
            react_1.default.createElement(__1.Image, { label: label, src: image, height: 320, aspectRatio: 1.5, objectFit: objectFit, alt: title, enableOverlay: enableOverlay, enableGradient: enableGradient, disableBorderRadius: border })),
        react_1.default.createElement("div", { className: "flex flex-col gap-4 w-full md:w-1/2" },
            react_1.default.createElement(components_1.Typography, { variant: "h5" }, title),
            react_1.default.createElement(components_1.Typography, { variant: "subtitle2", className: "text-muted-foreground" }, subtitle),
            buttonText && (react_1.default.createElement("div", { className: "flex flex-row gap-4" },
                react_1.default.createElement(components_1.Button, { size: "lg", onClick: handleItemClick }, buttonText))))));
};
exports.default = FeaturedCard;
