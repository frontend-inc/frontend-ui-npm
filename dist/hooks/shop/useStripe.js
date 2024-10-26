'use client';
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var context_1 = require("../../context");
var useStripe = function () {
    var _a = (0, react_1.useContext)(context_1.StripeContext), publishableKey = _a.publishableKey, stripeCustomerPortal = _a.stripeCustomerPortal;
    return {
        publishableKey: publishableKey,
        stripeCustomerPortal: stripeCustomerPortal,
    };
};
exports.default = useStripe;
