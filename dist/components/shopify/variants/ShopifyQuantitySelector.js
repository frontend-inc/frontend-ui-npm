'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../../../components");
var lucide_react_1 = require("lucide-react");
var frontend_shadcn_1 = require("frontend-shadcn");
function ShopifyQuantitySelector(_a) {
    var quantity = _a.quantity, handleAddQuantity = _a.handleAddQuantity, handleRemoveQuantity = _a.handleRemoveQuantity;
    var buttonClasses = (0, frontend_shadcn_1.cn)('w-[32px] p-0 min-w-[32px]', 'w-full text-secondary-foreground border-secondary');
    return (react_1.default.createElement("div", { className: "inline-flex min-w-[96px] rounded-md shadow-sm", role: "group" },
        react_1.default.createElement(components_1.Button, { variant: "secondary", className: (0, frontend_shadcn_1.cn)(buttonClasses, 'rounded-r-none border-r-0'), onClick: handleRemoveQuantity },
            react_1.default.createElement(lucide_react_1.Minus, { className: "h-5 w-5" })),
        react_1.default.createElement(components_1.Button, { variant: "secondary", className: (0, frontend_shadcn_1.cn)(buttonClasses, 'rounded-none border-x') }, quantity),
        react_1.default.createElement(components_1.Button, { variant: "secondary", className: (0, frontend_shadcn_1.cn)(buttonClasses, 'rounded-l-none border-l-0'), onClick: handleAddQuantity },
            react_1.default.createElement(lucide_react_1.Plus, { className: "h-5 w-5" }))));
}
exports.default = ShopifyQuantitySelector;
