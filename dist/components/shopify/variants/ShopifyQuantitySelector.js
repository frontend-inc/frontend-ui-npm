'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_2 = require("@nextui-org/react");
var lucide_react_1 = require("lucide-react");
function ShopifyQuantitySelector(props) {
    var _a = props || {}, _b = _a.size, size = _b === void 0 ? 'md' : _b, quantity = _a.quantity, handleAddQuantity = _a.handleAddQuantity, handleRemoveQuantity = _a.handleRemoveQuantity;
    return (react_1.default.createElement(react_2.ButtonGroup, { variant: "light", className: "border-1 border-divider rounded-xl", size: size },
        react_1.default.createElement(react_2.Button, { isIconOnly: true, onPress: handleRemoveQuantity },
            react_1.default.createElement(lucide_react_1.Minus, { className: "h-5 w-5" })),
        react_1.default.createElement(react_2.Button, { isIconOnly: true }, quantity),
        react_1.default.createElement(react_2.Button, { isIconOnly: true, onPress: handleAddQuantity },
            react_1.default.createElement(lucide_react_1.Plus, { className: "h-5 w-5" }))));
}
exports.default = ShopifyQuantitySelector;
