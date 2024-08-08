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
var material_1 = require("@mui/material");
var components_1 = require("../../../components");
var router_1 = require("next/router");
var Cards = function (props) {
    var router = (0, router_1.useRouter)();
    var _a = props || {}, _b = _a.style, style = _b === void 0 ? 'card' : _b, items = _a.items, enableBorder = _a.enableBorder, enableGradient = _a.enableGradient, enableOverlay = _a.enableOverlay;
    var handleClick = function (card) {
        if (card === null || card === void 0 ? void 0 : card.url) {
            router.push(card.url);
        }
    };
    return (react_1.default.createElement(material_1.Box, null,
        react_1.default.createElement(material_1.Grid, { container: true, spacing: 2 }, items === null || items === void 0 ? void 0 : items.map(function (card, i) { return (react_1.default.createElement(material_1.Grid, { item: true, xs: 12, sm: 4, md: 4, key: i },
            react_1.default.createElement(components_1.ListCard, { buttons: [], style: style, resource: __assign(__assign({}, card), { image: {
                        url: card === null || card === void 0 ? void 0 : card.image,
                    } }), displayFields: [], handleClick: function () { return handleClick(card); }, enableBorder: enableBorder, enableGradient: enableGradient, enableOverlay: enableOverlay }))); })),
        (items === null || items === void 0 ? void 0 : items.length) == 0 && (react_1.default.createElement(components_1.Placeholder, { icon: "Search", title: "No content yet.", description: "Your content will appear here." }))));
};
exports.default = Cards;
