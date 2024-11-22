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
var hooks_1 = require("../../../hooks");
var components_1 = require("../../../components");
var __1 = require("..");
var frontend_shopify_2 = require("frontend-shopify");
var ShopifyAddToCartButton = function (props) {
    var showAlertError = (0, hooks_1.useToast)().showAlertError;
    var trackAddToCart = (0, addons_1.useSegment)().trackAddToCart;
    var toggleCart = (0, react_1.useContext)(frontend_shopify_2.ShopifyContext).toggleCart;
    var _a = (0, frontend_shopify_1.useCart)(), loading = _a.loading, cartLineAdd = _a.cartLineAdd;
    var _b = props.label, label = _b === void 0 ? 'Add to Cart' : _b, product = props.product, variant = props.variant, _c = props.buttonVariant, buttonVariant = _c === void 0 ? 'default' : _c, _d = props.enableQuantity, enableQuantity = _d === void 0 ? false : _d, _e = props.enableSubscription, enableSubscription = _e === void 0 ? false : _e, _f = props.enableFavorites, enableFavorites = _f === void 0 ? false : _f, _g = props.size, size = _g === void 0 ? 'default' : _g;
    var _h = (0, react_1.useState)(1), quantity = _h[0], setQuantity = _h[1];
    var _j = (0, react_1.useState)(null), activeSellingPlanId = _j[0], setActiveSellingPlanId = _j[1];
    var handleSellingPlanChange = function (ev) {
        var value = ev.target.value;
        setActiveSellingPlanId(value);
    };
    var handleAddQuantity = function () {
        setQuantity(quantity + 1);
    };
    var handleRemoveQuantity = function () {
        if (quantity <= 1)
            return;
        setQuantity(quantity - 1);
    };
    var handleAddToCart = function () { return __awaiter(void 0, void 0, void 0, function () {
        var line;
        return __generator(this, function (_a) {
            if (!(product === null || product === void 0 ? void 0 : product.availableForSale)) {
                showAlertError('Please select all options');
                return [2 /*return*/];
            }
            if (variant === null || variant === void 0 ? void 0 : variant.id) {
                if (variant === null || variant === void 0 ? void 0 : variant.availableForSale) {
                    line = {
                        merchandiseId: variant === null || variant === void 0 ? void 0 : variant.id,
                        quantity: quantity,
                        sellingPlanId: activeSellingPlanId,
                    };
                    cartLineAdd(line);
                    trackAddToCart({
                        quantity: quantity,
                        variant: variant,
                        product: product,
                    });
                    setTimeout(function () { return toggleCart(); }, 500);
                }
                else {
                    showAlertError('This product is not available for sale');
                }
            }
            else {
                showAlertError('Please select all options');
            }
            return [2 /*return*/];
        });
    }); };
    if (!product)
        return null;
    return (react_1.default.createElement("div", { className: "flex flex-col space-y-2" },
        enableSubscription && (react_1.default.createElement(__1.ShopifySubscriptionSelector, { product: product, activeSellingPlanId: activeSellingPlanId, handleChange: handleSellingPlanChange })),
        react_1.default.createElement("div", { className: "flex flex-row space-x-2 justify-content items-center" },
            enableQuantity == true && (react_1.default.createElement(__1.ShopifyQuantitySelector, { quantity: quantity, handleAddQuantity: handleAddQuantity, handleRemoveQuantity: handleRemoveQuantity })),
            react_1.default.createElement(components_1.Button, { fullWidth: true, onClick: handleAddToCart, variant: buttonVariant, loading: loading, size: size }, label),
            enableFavorites && react_1.default.createElement(__1.ShopifyProductFavoriteButton, { product: product }))));
};
exports.default = ShopifyAddToCartButton;
