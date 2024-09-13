"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../../../components");
var hooks_1 = require("../../../hooks");
var StripeCustomerPortal = function () {
    var app = (0, hooks_1.useApp)().app;
    var showAlertError = (0, hooks_1.useAlerts)().showAlertError;
    var handleClick = function () {
        if (app === null || app === void 0 ? void 0 : app.stripe_customer_portal_url) {
            window.open(app.stripe_customer_portal_url, '_blank');
        }
        else {
            showAlertError('Stripe Customer Portal not enabled.');
        }
    };
    return (react_1.default.createElement(components_1.Placeholder, { icon: "CreditCard", title: "Stripe Customer Portal", description: "Manage your subscription and order history.", buttons: react_1.default.createElement(components_1.PrimaryButton, { onClick: handleClick, icon: 'ExternalLink' }, "Open Customer Portal") }));
};
exports.default = StripeCustomerPortal;
