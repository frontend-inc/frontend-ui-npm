'use client';
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var hooks_1 = require("../../../hooks");
var components_1 = require("../../../components");
var react_2 = require("@nextui-org/react");
var components_2 = require("../../../components");
var components_3 = require("../../../components");
var react_3 = require("@nextui-org/react");
var react_4 = require("@nextui-org/react");
var lucide_react_1 = require("lucide-react");
var CartQuantityInput = function (props) {
    var quantity = props.quantity, handleAddQuantity = props.handleAddQuantity, handleRemoveQuantity = props.handleRemoveQuantity;
    return (react_1.default.createElement(react_3.ButtonGroup, { variant: "light", className: "border-2 border-divider rounded-xl w-[100px]", size: "sm" },
        react_1.default.createElement(react_3.Button, { isIconOnly: true, size: "sm", className: "min-w-8", onPress: handleRemoveQuantity },
            react_1.default.createElement(lucide_react_1.Minus, { size: 20 })),
        react_1.default.createElement(react_3.Button, { isIconOnly: true, size: "sm", className: "min-w-8 w-full" }, quantity),
        react_1.default.createElement(react_3.Button, { isIconOnly: true, size: "sm", className: "min-w-8", onPress: handleAddQuantity },
            react_1.default.createElement(lucide_react_1.Plus, { size: 20 }))));
};
var CartLineItem = function (props) {
    var _a;
    var lineItem = props.lineItem;
    var _b = (0, react_1.useState)(false), open = _b[0], setOpen = _b[1];
    var _c = (0, hooks_1.useCart)(), loading = _c.loading, addQuantity = _c.addQuantity, removeQuantity = _c.removeQuantity, removeFromCart = _c.removeFromCart;
    var setCartOpen = (0, hooks_1.useCart)().setCartOpen;
    var _d = lineItem || {}, id = _d.id, quantity = _d.quantity, product = _d.product;
    var handleAddQuantity = function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, addQuantity(product === null || product === void 0 ? void 0 : product.id)];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); };
    var handleRemoveQuantity = function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, removeQuantity(product === null || product === void 0 ? void 0 : product.id)];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); };
    var handleRemoveFromCart = function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, removeFromCart(product === null || product === void 0 ? void 0 : product.id)];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); };
    var handleClick = function () {
        setOpen(true);
        //setCartOpen(false)
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: (0, react_4.cn)('flex items-center justify-between py-2', loading && 'opacity-30') },
            react_1.default.createElement("div", { className: "flex space-x-4 items-center pt-1" },
                react_1.default.createElement(react_2.Badge, { color: "primary", content: quantity },
                    react_1.default.createElement(react_2.Card, { isPressable: true, onPress: function () { return handleClick(); }, className: "w-[72px] h-[72px] rounded-lg" },
                        react_1.default.createElement(react_2.Image, { removeWrapper: true, alt: (product === null || product === void 0 ? void 0 : product.title) || '', src: (_a = product === null || product === void 0 ? void 0 : product.image) === null || _a === void 0 ? void 0 : _a.url, height: 72, width: 72, className: "w-full object-cover" }))),
                react_1.default.createElement("div", { className: "flex flex-col space-y-1" },
                    react_1.default.createElement(components_2.Typography, { variant: "body1" }, product === null || product === void 0 ? void 0 : product.title),
                    react_1.default.createElement(components_2.Typography, { className: "text-foreground/70", variant: "body2" }, product === null || product === void 0 ? void 0 : product.display_price),
                    react_1.default.createElement(CartQuantityInput, { quantity: quantity, handleAddQuantity: handleAddQuantity, handleRemoveQuantity: handleRemoveQuantity }))),
            react_1.default.createElement(react_3.Button, { isIconOnly: true, size: "sm", variant: "light", radius: "full", onPress: handleRemoveFromCart },
                react_1.default.createElement(components_1.Icon, { name: "X", className: "h-4 w-4 text-foreground/70 hover:text-foreground" }))),
        react_1.default.createElement(components_3.ProductModal, { open: open, handleClose: function () { return setOpen(false); }, productId: product === null || product === void 0 ? void 0 : product.handle })));
};
exports.default = CartLineItem;
