'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var stripe_js_1 = require("@stripe/stripe-js");
var react_stripe_js_1 = require("@stripe/react-stripe-js");
var StripeCreditCardElement_1 = __importDefault(require("./StripeCreditCardElement"));
var StripeCreditCard = function (props) {
    var _a = props || {}, publishableKey = _a.publishableKey, handleSubmit = _a.handleSubmit, handleCancel = _a.handleCancel;
    var stripePromise = (0, stripe_js_1.loadStripe)(publishableKey);
    return (react_1.default.createElement(react_stripe_js_1.Elements, { stripe: stripePromise },
        react_1.default.createElement(StripeCreditCardElement_1.default, { handleSubmit: handleSubmit, handleCancel: handleCancel })));
};
exports.default = StripeCreditCard;
