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
var react_stripe_js_1 = require("@stripe/react-stripe-js");
var sonner_1 = require("sonner");
var __1 = require("../..");
var StripeCreditCardElement = function (props) {
    var _a = props || {}, handleSubmit = _a.handleSubmit, handleCancel = _a.handleCancel;
    var stripe = (0, react_stripe_js_1.useStripe)();
    var elements = (0, react_stripe_js_1.useElements)();
    var handleClick = function (e) { return __awaiter(void 0, void 0, void 0, function () {
        var cardElement, res, stripeToken, last4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    e.preventDefault();
                    if (!stripe || !elements) {
                        return [2 /*return*/];
                    }
                    cardElement = elements.getElement(react_stripe_js_1.CardElement);
                    if (!cardElement) return [3 /*break*/, 2];
                    return [4 /*yield*/, stripe.createToken(cardElement)];
                case 1:
                    res = _a.sent();
                    if (res === null || res === void 0 ? void 0 : res.token) {
                        stripeToken = res.token.id;
                        last4 = res.token.card.last4;
                        handleSubmit(stripeToken, last4);
                    }
                    else {
                        sonner_1.toast.error('Please check your payment details');
                    }
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); };
    return (react_1.default.createElement("div", { className: "flex flex-col space-y-4" },
        react_1.default.createElement("div", { className: "px-4 py-2 shadow rounded" },
            react_1.default.createElement(react_stripe_js_1.CardElement, { className: "text-2xl" })),
        react_1.default.createElement("div", { className: "flex flex-col space-y-2" },
            react_1.default.createElement(react_2.Button, { variant: "solid", color: "primary", onPress: handleClick, startContent: react_1.default.createElement(__1.LucideIcon, { name: "CreditCard", className: "h-4 w-4" }) }, "Add Credit Card"),
            react_1.default.createElement(react_2.Button, { variant: "ghost", onPress: handleCancel }, "Cancel")),
        react_1.default.createElement("p", { className: "text-center text-sm text-foreground/70" },
            "We support all major credit cards.",
            react_1.default.createElement("br", null),
            "Secure SSL connection.")));
};
exports.default = StripeCreditCardElement;
