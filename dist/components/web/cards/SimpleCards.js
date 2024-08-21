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
var __1 = require("../..");
var router_1 = require("next/router");
var SimpleCards = function (props) {
    var router = (0, router_1.useRouter)();
    var _a = props || {}, items = _a.items, enableGradient = _a.enableGradient, enableOverlay = _a.enableOverlay;
    var handleClick = function (card) {
        if (card === null || card === void 0 ? void 0 : card.url) {
            router.push(card.url);
        }
    };
    return (react_1.default.createElement(material_1.Box, null,
        react_1.default.createElement(material_1.Grid, { container: true, spacing: 1 }, items === null || items === void 0 ? void 0 : items.map(function (item, i) { return (react_1.default.createElement(material_1.Grid, { item: true, xs: 12, sm: 6, md: 4, key: i },
            react_1.default.createElement(__1.SimpleCard, { item: __assign(__assign({}, item), { image: {
                        url: item === null || item === void 0 ? void 0 : item.image,
                    } }), handleClick: function () { return handleClick(item); }, enableGradient: enableGradient, enableOverlay: enableOverlay }))); })),
        (items === null || items === void 0 ? void 0 : items.length) == 0 && (react_1.default.createElement(__1.Placeholder, { icon: "Search", title: "No content yet.", description: "Your content will appear here." }))));
};
exports.default = SimpleCards;
