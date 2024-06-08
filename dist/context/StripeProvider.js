"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var StripeContext_1 = __importDefault(require("./StripeContext"));
var StripeProvider = function (props) {
    var _a = props || {}, children = _a.children, publishableKey = _a.publishableKey, customerPortalUrl = _a.customerPortalUrl;
    var value = {
        stripeCustomerPortalUrl: customerPortalUrl,
        stripePublishableKey: publishableKey,
    };
    return (react_1.default.createElement(StripeContext_1.default.Provider, { value: value }, children));
};
exports.default = StripeProvider;
