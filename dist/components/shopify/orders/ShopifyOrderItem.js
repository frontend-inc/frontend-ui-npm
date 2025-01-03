'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_2 = require("@nextui-org/react");
var frontend_shopify_1 = require("frontend-shopify");
var moment_1 = __importDefault(require("moment"));
var react_3 = require("@nextui-org/react");
var ShopifyOrderItem = function (_a) {
    var _b, _c, _d, _e, _f, _g;
    var order = _a.order, handleClick = _a.handleClick, className = _a.className;
    return (react_1.default.createElement(react_2.Card, { isPressable: true, className: (0, react_3.cn)('w-full justify-start text-left hover:bg-content2', className), onPress: function () { return handleClick(order); } },
        react_1.default.createElement("div", { className: "flex items-center space-x-4" },
            react_1.default.createElement("div", { className: "flex-shrink-0" },
                react_1.default.createElement(react_2.Image, { alt: (order === null || order === void 0 ? void 0 : order.name) || 'Order image', src: 
                    //@ts-ignore
                    ((_f = (_e = (_d = (_c = (_b = order === null || order === void 0 ? void 0 : order.lineItems) === null || _b === void 0 ? void 0 : _b.edges[0]) === null || _c === void 0 ? void 0 : _c.node) === null || _d === void 0 ? void 0 : _d.variant) === null || _e === void 0 ? void 0 : _e.image) === null || _f === void 0 ? void 0 : _f.url) ||
                        '/placeholder.svg', width: 64, height: 64 })),
            react_1.default.createElement("div", { className: "flex-grow" },
                react_1.default.createElement("h3", { className: "text-base font-semibold mb-1" },
                    "Order ", order === null || order === void 0 ? void 0 :
                    order.name),
                react_1.default.createElement("div", { className: "text-sm text-foreground/70" },
                    react_1.default.createElement("p", null, (0, moment_1.default)(order === null || order === void 0 ? void 0 : order.processedAt).format('MM/DD/YYYY')),
                    react_1.default.createElement("p", null, (0, frontend_shopify_1.formatCurrency)((_g = order === null || order === void 0 ? void 0 : order.totalPrice) === null || _g === void 0 ? void 0 : _g.amount)))))));
};
exports.default = ShopifyOrderItem;
