"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var frontend_js_1 = require("frontend-js");
var hooks_1 = require("../../hooks");
var swr_1 = __importDefault(require("swr"));
var useCart = function () {
    var api = (0, frontend_js_1.useApi)().api;
    var _a = (0, hooks_1.useShop)(), cart = _a.cart, setCart = _a.setCart, cartOpen = _a.cartOpen, setCartOpen = _a.setCartOpen;
    var _b = (0, react_1.useState)(false), loading = _b[0], setLoading = _b[1];
    var _c = (0, react_1.useState)(null), errors = _c[0], setErrors = _c[1];
    var apiParams = {
        url: '/api/v1/shop/carts',
        name: 'cart',
    };
    var currentUser = (0, frontend_js_1.useAuth)().currentUser;
    var cacheKey = (cartOpen && (currentUser === null || currentUser === void 0 ? void 0 : currentUser.id)) ? true : false;
    var fetcher = function () { return loadingWrapper(function () { return api.fetchCart(apiParams); }); };
    (0, swr_1.default)([cacheKey], fetcher, {
        revalidateOnFocus: true,
        revalidateOnReconnect: true
    });
    var fetchCart = function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, loadingWrapper(function () {
                        return api.fetchCart(apiParams);
                    })];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    }); };
    var addToCart = function (productId, quantity) {
        if (quantity === void 0) { quantity = 1; }
        return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, loadingWrapper(function () {
                            return api.addToCart(productId, quantity, apiParams);
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    var removeFromCart = function (productId) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, loadingWrapper(function () {
                        return api.removeFromCart(productId, apiParams);
                    })];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    }); };
    var addQuantity = function (productId) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, loadingWrapper(function () {
                        return api.addQuantity(productId, apiParams);
                    })];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    }); };
    var removeQuantity = function (productId) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, loadingWrapper(function () {
                        return api.removeQuantity(productId, apiParams);
                    })];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    }); };
    var checkout = function (options) { return __awaiter(void 0, void 0, void 0, function () {
        var error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, 3, 4]);
                    setLoading(true);
                    return [4 /*yield*/, api.checkout(cart === null || cart === void 0 ? void 0 : cart.id, options, apiParams)];
                case 1: return [2 /*return*/, _a.sent()];
                case 2:
                    error_1 = _a.sent();
                    console.log(error_1);
                    setErrors(error_1);
                    return [3 /*break*/, 4];
                case 3:
                    setLoading(false);
                    return [7 /*endfinally*/];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var loadingWrapper = function (fn) { return __awaiter(void 0, void 0, void 0, function () {
        var resp, error_2;
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, 3, 4]);
                    setErrors(null);
                    setLoading(true);
                    return [4 /*yield*/, fn()];
                case 1:
                    resp = _b.sent();
                    if ((_a = resp === null || resp === void 0 ? void 0 : resp.data) === null || _a === void 0 ? void 0 : _a.id) {
                        setCart(resp.data);
                    }
                    return [3 /*break*/, 4];
                case 2:
                    error_2 = _b.sent();
                    console.log(error_2);
                    setErrors(error_2);
                    return [3 /*break*/, 4];
                case 3:
                    setLoading(false);
                    return [7 /*endfinally*/];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    return {
        loading: loading,
        errors: errors,
        fetchCart: fetchCart,
        cart: cart,
        cartOpen: cartOpen,
        setCartOpen: setCartOpen,
        setCart: setCart,
        addToCart: addToCart,
        removeFromCart: removeFromCart,
        addQuantity: addQuantity,
        removeQuantity: removeQuantity,
        checkout: checkout,
    };
};
exports.default = useCart;
