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
var frontend_shopify_1 = require("frontend-shopify");
var addons_1 = require("../../../hooks/addons");
var components_1 = require("../../../components");
var react_2 = require("@nextui-org/react");
var components_2 = require("../../../components");
var frontend_shopify_2 = require("frontend-shopify");
var navigation_1 = require("next/navigation");
var react_3 = require("@nextui-org/react");
var ShopifyCartQuantityInput = function (props) {
    var quantity = props.quantity, handleAddQuantity = props.handleAddQuantity, handleRemoveQuantity = props.handleRemoveQuantity;
    return (react_1.default.createElement(react_2.ButtonGroup, { variant: "light", className: "border-1 border-divider rounded-xl w-[100px]", size: "sm" },
        react_1.default.createElement(react_2.Button, { isIconOnly: true, className: "min-w-8", onPress: handleRemoveQuantity },
            react_1.default.createElement(components_1.RemixIcon, { name: "ri-subtract-line" })),
        react_1.default.createElement(react_2.Button, { isIconOnly: true, fullWidth: true }, quantity),
        react_1.default.createElement(react_2.Button, { isIconOnly: true, onPress: handleAddQuantity, className: "min-w-8" },
            react_1.default.createElement(components_1.RemixIcon, { name: "ri-add-line" }))));
};
var ShopifyCartLine = function (_a) {
    var _b, _c, _d, _e, _f, _g, _h, _j;
    var line = _a.line;
    var router = (0, navigation_1.useRouter)();
    var trackRemoveFromCart = (0, addons_1.useSegment)().trackRemoveFromCart;
    var _k = (0, frontend_shopify_1.useCart)(), loading = _k.loading, cartLineRemove = _k.cartLineRemove, cartLineUpdate = _k.cartLineUpdate;
    var _l = line || {}, id = _l.id, quantity = _l.quantity, merchandise = _l.merchandise, sellingPlanAllocation = _l.sellingPlanAllocation;
    var _m = (0, react_1.useState)(null), price = _m[0], setPrice = _m[1];
    var _o = (0, react_1.useState)(null), compareAtPrice = _o[0], setCompareAtPrice = _o[1];
    var _p = merchandise || {}, product = _p.product, amount = _p.price.amount, 
    // @ts-ignore
    compareAtAmount = _p.compareAtPrice, url = _p.image.url;
    var handleUpdateQuantity = function (newQuantity) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, cartLineUpdate({ id: id, quantity: newQuantity })];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); };
    var handleAddQuantity = function () {
        handleUpdateQuantity(quantity + 1);
    };
    var handleRemoveQuantity = function () {
        if (quantity === 1) {
            handleRemoveLineItem();
        }
        else {
            handleUpdateQuantity(quantity - 1);
        }
    };
    var handleRemoveLineItem = function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, cartLineRemove(id)];
                case 1:
                    _a.sent();
                    trackRemoveFromCart({
                        quantity: quantity,
                        variant: merchandise,
                        product: product,
                    });
                    return [2 /*return*/];
            }
        });
    }); };
    (0, react_1.useEffect)(function () {
        var _a;
        // @ts-ignore
        if (((_a = sellingPlanAllocation === null || sellingPlanAllocation === void 0 ? void 0 : sellingPlanAllocation.priceAdjustments) === null || _a === void 0 ? void 0 : _a.length) > 0) {
            // @ts-ignore
            setPrice(sellingPlanAllocation.priceAdjustments[0].price.amount);
            setCompareAtPrice(
            // @ts-ignore
            sellingPlanAllocation.priceAdjustments[0].compareAtPrice.amount);
        }
        else {
            setPrice(Number(amount));
            setCompareAtPrice(compareAtAmount === null || compareAtAmount === void 0 ? void 0 : compareAtAmount.amount);
        }
    }, [price, sellingPlanAllocation]);
    return (react_1.default.createElement("div", { className: (0, react_3.cn)('flex items-start space-x-4 py-4', loading && 'opacity-30') },
        react_1.default.createElement("div", { className: "relative" },
            react_1.default.createElement(react_2.Badge, { color: "primary", content: quantity },
                react_1.default.createElement(react_2.Image, { alt: ((_c = (_b = line === null || line === void 0 ? void 0 : line.merchandise) === null || _b === void 0 ? void 0 : _b.product) === null || _c === void 0 ? void 0 : _c.title) || '', src: url, height: 96, width: 96, className: "min-h-[96px] min-w-[96px]" }))),
        react_1.default.createElement("div", { className: "flex-grow" },
            react_1.default.createElement(components_2.Typography, { variant: "body1" }, (_e = (_d = line === null || line === void 0 ? void 0 : line.merchandise) === null || _d === void 0 ? void 0 : _d.product) === null || _e === void 0 ? void 0 : _e.title),
            react_1.default.createElement(components_2.Typography, { variant: "body1", className: "text-foreground/70" }, (_h = (_g = (_f = line === null || line === void 0 ? void 0 : line.merchandise) === null || _f === void 0 ? void 0 : _f.selectedOptions) === null || _g === void 0 ? void 0 : _g.filter(function (option) { return option.name !== 'Title'; })) === null || _h === void 0 ? void 0 : _h.map(function (option) { return option.value; }).join(' / ')),
            (sellingPlanAllocation === null || sellingPlanAllocation === void 0 ? void 0 : sellingPlanAllocation.sellingPlan) && (react_1.default.createElement("p", { className: "text-sm italic text-foreground/70" }, (_j = sellingPlanAllocation === null || sellingPlanAllocation === void 0 ? void 0 : sellingPlanAllocation.sellingPlan) === null || _j === void 0 ? void 0 : _j.name)),
            react_1.default.createElement("p", { className: "text-sm font-medium mt-1" }, price === 0 ? 'Free' : (0, frontend_shopify_2.formatCurrency)(price)),
            react_1.default.createElement("div", { className: "mt-2" },
                react_1.default.createElement(ShopifyCartQuantityInput, { quantity: quantity, handleAddQuantity: handleAddQuantity, handleRemoveQuantity: handleRemoveQuantity }))),
        react_1.default.createElement(react_2.Button, { isIconOnly: true, variant: "light", radius: "full", className: "min-w-8", onPress: handleRemoveLineItem },
            react_1.default.createElement(components_1.RemixIcon, { name: "ri-close-fill" }))));
};
exports.default = ShopifyCartLine;
