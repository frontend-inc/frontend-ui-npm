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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var frontend_shopify_1 = require("frontend-shopify");
var frontend_shopify_2 = require("frontend-shopify");
var lodash_1 = require("lodash");
var lucide_react_1 = require("lucide-react");
var ShopifyProductImage = function (_a) {
    var _b, _c, _d, _e;
    var handle = _a.handle, handleDelete = _a.handleDelete, _f = _a.height, height = _f === void 0 ? 160 : _f, _g = _a.width, width = _g === void 0 ? 160 : _g;
    var _h = (0, frontend_shopify_1.useProducts)(), product = _h.product, findProduct = _h.findProduct;
    (0, react_1.useEffect)(function () {
        if (handle) {
            findProduct(handle);
        }
    }, [handle, findProduct]);
    if (!product)
        return null;
    return (react_1.default.createElement("div", { className: "relative group animate-fade-in" },
        react_1.default.createElement("img", { src: (_e = (_d = (_c = (_b = product.images) === null || _b === void 0 ? void 0 : _b.edges) === null || _c === void 0 ? void 0 : _c[0]) === null || _d === void 0 ? void 0 : _d.node) === null || _e === void 0 ? void 0 : _e.url, alt: product.title, className: "rounded-md transition-shadow duration-300 group-hover:shadow-lg", style: { height: height, width: width } }),
        react_1.default.createElement("button", { onClick: handleDelete, className: "absolute top-2 right-2 p-1 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300", "aria-label": "Delete product" },
            react_1.default.createElement(lucide_react_1.X, { className: "w-4 h-4 text-gray-600" }))));
};
var ShopifyProductsInput = function (_a) {
    var _b = _a.value, value = _b === void 0 ? [] : _b, label = _a.label, _c = _a.direction, direction = _c === void 0 ? 'column' : _c, placeholder = _a.placeholder, _d = _a.name, name = _d === void 0 ? 'shopify_handle' : _d, handleChange = _a.handleChange, height = _a.height, width = _a.width;
    var _e = (0, react_1.useState)(''), currentValue = _e[0], setCurrentValue = _e[1];
    var _f = (0, react_1.useState)(value), shopifyProducts = _f[0], setShopifyProducts = _f[1];
    var _g = (0, react_1.useContext)(frontend_shopify_2.ShopifyContext), domain = _g.domain, storefrontAccessToken = _g.storefrontAccessToken;
    var _h = (0, frontend_shopify_1.useProducts)(), products = _h.products, setProduct = _h.setProduct, findProducts = _h.findProducts;
    var _j = (0, react_1.useState)([]), options = _j[0], setOptions = _j[1];
    var _k = (0, react_1.useState)(false), isLoading = _k[0], setIsLoading = _k[1];
    var handleInputChange = function (newValue) { return __awaiter(void 0, void 0, void 0, function () {
        var error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    setIsLoading(true);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, 4, 5]);
                    return [4 /*yield*/, findProducts(newValue)];
                case 2:
                    _a.sent();
                    if (newValue === '') {
                        setProduct(null);
                    }
                    return [3 /*break*/, 5];
                case 3:
                    error_1 = _a.sent();
                    console.error('Error fetching products:', error_1);
                    return [3 /*break*/, 5];
                case 4:
                    setIsLoading(false);
                    return [7 /*endfinally*/];
                case 5: return [2 /*return*/];
            }
        });
    }); };
    (0, react_1.useEffect)(function () {
        if (products) {
            setOptions(products.map(function (product) {
                var _a, _b, _c, _d;
                return ({
                    label: product.title,
                    value: product.handle,
                    image: (_d = (_c = (_b = (_a = product.images) === null || _a === void 0 ? void 0 : _a.edges) === null || _b === void 0 ? void 0 : _b[0]) === null || _c === void 0 ? void 0 : _c.node) === null || _d === void 0 ? void 0 : _d.url,
                });
            }));
        }
    }, [products]);
    (0, react_1.useEffect)(function () {
        if (value && Array.isArray(value)) {
            setShopifyProducts(value);
        }
    }, [value]);
    var handleAutocompleteChange = function (e) {
        var value = e.target.value;
        setCurrentValue(value);
        var uniqProducts = (0, lodash_1.uniq)(__spreadArray(__spreadArray([], shopifyProducts, true), [value], false));
        setShopifyProducts(uniqProducts);
        handleChange({
            target: {
                name: name,
                value: uniqProducts,
            },
        });
    };
    (0, react_1.useEffect)(function () {
        findProducts({
            first: 10,
        });
    }, [findProducts]);
    var handleDelete = function (handle) {
        var newProducts = shopifyProducts.filter(function (product) { return product !== handle; });
        setShopifyProducts(newProducts);
        handleChange({
            target: {
                name: name,
                value: newProducts,
            },
        });
    };
    if (!domain || !storefrontAccessToken) {
        return (react_1.default.createElement("div", { className: "bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4", role: "alert" },
            react_1.default.createElement("p", { className: "font-bold" }, "Shopify setup required"),
            react_1.default.createElement("p", null, "Shopify provider is not setup")));
    }
    return (react_1.default.createElement("div", { className: "w-full space-y-4" },
        shopifyProducts.length > 0 && (react_1.default.createElement("div", { className: "overflow-x-auto" },
            react_1.default.createElement("div", { className: "flex flex-wrap gap-4" }, shopifyProducts.map(function (handle) { return (react_1.default.createElement(ShopifyProductImage, { key: handle, handle: handle, height: height, width: width, handleDelete: function () { return handleDelete(handle); } })); })))),
        react_1.default.createElement("div", { className: "flex ".concat(direction === 'column' ? 'flex-col' : 'flex-row', " gap-2") },
            label && (react_1.default.createElement("label", { htmlFor: name, className: "block text-sm font-medium text-gray-700" }, label)),
            react_1.default.createElement("div", { className: "relative" },
                react_1.default.createElement("input", { type: "text", id: name, name: name, className: "w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500", placeholder: placeholder, value: currentValue, onChange: handleAutocompleteChange, onInput: function (e) {
                        return handleInputChange(e.target.value);
                    }, list: "product-options", "aria-autocomplete": "list", "aria-expanded": options.length > 0 }),
                isLoading && (react_1.default.createElement("div", { className: "absolute right-3 top-1/2 transform -translate-y-1/2" },
                    react_1.default.createElement("div", { className: "animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-blue-500" }))),
                react_1.default.createElement("datalist", { id: "product-options" }, options.map(function (option) { return (react_1.default.createElement("option", { key: option.value, value: option.value }, option.label)); }))))));
};
exports.default = ShopifyProductsInput;
