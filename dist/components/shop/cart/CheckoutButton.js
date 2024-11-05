'use client';
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
var react_1 = __importDefault(require("react"));
var core_1 = require("../../core");
var hooks_1 = require("../../../hooks");
var hooks_2 = require("../../../hooks");
var CheckoutButton = function () {
    var _a = (0, hooks_1.useCart)(), loading = _a.loading, cart = _a.cart, checkout = _a.checkout;
    var showAlertError = (0, hooks_2.useAlerts)().showAlertError;
    var handleClick = function () { return __awaiter(void 0, void 0, void 0, function () {
        var currentUrl, stripe, url;
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    currentUrl = window.location.href;
                    return [4 /*yield*/, checkout({
                            success_url: currentUrl,
                            cancel_url: currentUrl,
                        })];
                case 1:
                    stripe = _b.sent();
                    if (stripe === null || stripe === void 0 ? void 0 : stripe.errors) {
                        showAlertError(stripe.errors);
                    }
                    else {
                        url = (_a = stripe === null || stripe === void 0 ? void 0 : stripe.data) === null || _a === void 0 ? void 0 : _a.url;
                        if (window.parent === window) {
                            window.open(url, '_blank');
                        }
                        else {
                            parent.window.open(url, '_blank');
                        }
                    }
                    return [2 /*return*/];
            }
        });
    }); };
    var cartDisabled = (cart === null || cart === void 0 ? void 0 : cart.total_items) === 0 ? true : false;
    return (react_1.default.createElement(core_1.Button, { fullWidth: true, loading: loading, onClick: handleClick, size: "lg" },
        "Checkout ",
        !cartDisabled && (cart === null || cart === void 0 ? void 0 : cart.display_subtotal)));
};
exports.default = CheckoutButton;
