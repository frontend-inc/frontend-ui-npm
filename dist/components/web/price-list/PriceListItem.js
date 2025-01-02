"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var __1 = require("../..");
var hooks_1 = require("../../../hooks");
var react_2 = require("@nextui-org/react");
var helpers_1 = require("../../../helpers");
var PriceListItem = function (props) {
    var _a = props || {}, variant = _a.variant, image = _a.image, price = _a.price, _b = _a.precision, precision = _b === void 0 ? 0 : _b, title = _a.title, subtitle = _a.subtitle, path = _a.path, url = _a.url, handleImageClick = _a.handleImageClick;
    var onClick = (0, hooks_1.useNavigate)({
        path: path,
        url: url
    });
    return (react_1.default.createElement("li", { className: 'w-full' },
        react_1.default.createElement("button", { 
            //@ts-ignore
            onClick: onClick, className: (0, react_2.cn)('w-full flex justify-between items-center rounded-xl p-4 focus:outline-none hover:bg-content2', variant == 'fill' && 'bg-content1 p-6 rounded-lg', variant == 'outline' && 'border border-divider p-6 rounded-lg') },
            react_1.default.createElement("div", { className: " flex flex-row space-x-6 items-center" },
                image && (react_1.default.createElement("div", { className: "h-12 w-12" },
                    react_1.default.createElement(__1.Image, { src: image, alt: title, height: 72, handleClick: handleImageClick }))),
                react_1.default.createElement("div", { className: "flex flex-col space-y-0" },
                    react_1.default.createElement(__1.Typography, { variant: "subtitle1", className: "font-medium" }, title),
                    react_1.default.createElement(__1.Typography, { variant: "body2", className: "text-foreground/70" }, subtitle))),
            react_1.default.createElement(__1.Typography, { variant: "body1", className: "text-foreground" }, (0, helpers_1.formatCurrency)(price, precision)))));
};
exports.default = PriceListItem;
