'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var hooks_1 = require("../../../hooks");
var components_1 = require("../../../components");
var react_2 = require("@nextui-org/react");
var __1 = require("../..");
var navigation_1 = require("next/navigation");
var react_3 = require("@nextui-org/react");
var FeaturedCard = function (props) {
    var clientUrl = (0, hooks_1.useApp)().clientUrl;
    var _a = props || {}, label = _a.label, title = _a.title, subtitle = _a.subtitle, _b = _a.image, image = _b === void 0 ? '' : _b, href = _a.href, buttonText = _a.buttonText, _c = _a.direction, direction = _c === void 0 ? 'row' : _c, handleClick = _a.handleClick, _d = _a.height, height = _d === void 0 ? 360 : _d, _e = _a.enableOverlay, enableOverlay = _e === void 0 ? false : _e, _f = _a.enableGradient, enableGradient = _f === void 0 ? false : _f, variant = _a.variant;
    var flexDirectionClass = {
        row: 'flex-row',
        column: 'flex-col',
        'row-reverse': 'flex-row-reverse',
    };
    var router = (0, navigation_1.useRouter)();
    var handleItemClick = function () {
        if (handleClick) {
            return handleClick();
        }
        else if (href) {
            router.push("".concat(clientUrl).concat(href));
        }
    };
    return (react_1.default.createElement("div", { className: (0, react_3.cn)('flex items-center gap-10 flex-wrap md:flex-nowrap', direction && flexDirectionClass[direction], variant == 'outline' && 'p-6 border-2 border-divider rounded-lg', variant == 'fill' && 'p-6 bg-content1/50 rounded-lg') },
        react_1.default.createElement("div", { className: "w-full md:w-1/2" },
            react_1.default.createElement(__1.Image, { label: label, src: image, height: height, alt: title || 'Image', enableOverlay: enableOverlay, enableGradient: enableGradient, disableBorderRadius: variant == 'outline' ? true : false })),
        react_1.default.createElement("div", { className: (0, react_3.cn)('flex flex-col gap-4 w-full', 'md:w-1/2') },
            react_1.default.createElement(components_1.Typography, { variant: "h5" }, title),
            react_1.default.createElement(components_1.Typography, { variant: "subtitle2", className: "text-foreground/70" }, subtitle),
            buttonText && (react_1.default.createElement("div", { className: "flex flex-row gap-4" },
                react_1.default.createElement(react_2.Button, { size: "lg", onPress: handleItemClick }, buttonText))))));
};
exports.default = FeaturedCard;
