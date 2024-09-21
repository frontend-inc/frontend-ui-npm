"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../../../components");
var StripeCustomerPortal = function () {
    return (react_1.default.createElement(components_1.Placeholder, { icon: "CreditCard", title: "Stripe Customer Portal", description: "Manage your subscription and order history.", buttons: react_1.default.createElement(components_1.StripeCustomerPortalButton, null) }));
};
exports.default = StripeCustomerPortal;
