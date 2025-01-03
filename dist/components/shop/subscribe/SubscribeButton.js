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
var react_2 = require("@nextui-org/react");
var hooks_1 = require("../../../hooks");
var sonner_1 = require("sonner");
var SusbcribeButton = function (props) {
    var productId = props.productId, _a = props.buttonText, buttonText = _a === void 0 ? 'Subscribe' : _a, _b = props.size, size = _b === void 0 ? 'md' : _b, fullWidth = props.fullWidth, availableForSale = props.availableForSale;
    var _c = (0, hooks_1.useSubscribe)(), loading = _c.loading, subscribe = _c.subscribe;
    var handleClick = function () { return __awaiter(void 0, void 0, void 0, function () {
        var currentUrl, stripe;
        var _a, _b, _c;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    currentUrl = window.location.href;
                    return [4 /*yield*/, subscribe(productId, {
                            success_url: currentUrl,
                            cancel_url: currentUrl,
                        })];
                case 1:
                    stripe = (_d.sent());
                    if (stripe === null || stripe === void 0 ? void 0 : stripe.error) {
                        sonner_1.toast.error(stripe === null || stripe === void 0 ? void 0 : stripe.error);
                    }
                    else if ((_a = stripe === null || stripe === void 0 ? void 0 : stripe.data) === null || _a === void 0 ? void 0 : _a.url) {
                        if (window.parent === window) {
                            window.open((_b = stripe === null || stripe === void 0 ? void 0 : stripe.data) === null || _b === void 0 ? void 0 : _b.url, '_blank');
                        }
                        else {
                            window.parent.open((_c = stripe === null || stripe === void 0 ? void 0 : stripe.data) === null || _c === void 0 ? void 0 : _c.url, '_self');
                        }
                    }
                    return [2 /*return*/];
            }
        });
    }); };
    return (react_1.default.createElement(react_2.Button, { fullWidth: fullWidth, isLoading: loading, onPress: handleClick, disabled: !availableForSale, size: size, className: 'min-w-[160px]' }, buttonText));
};
exports.default = SusbcribeButton;
