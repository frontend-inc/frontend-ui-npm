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
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var frontend_js_1 = require("frontend-js");
var context_1 = require("../../../context");
var material_1 = require("@mui/material");
var __1 = require("../..");
var StripePaymentLink = function (props) {
    var _a = props || {}, resource = _a.resource, _b = _a.justifyContent, justifyContent = _b === void 0 ? 'flex-start' : _b, _c = _a.buttonText, buttonText = _c === void 0 ? 'Checkout' : _c;
    var stripe_payment_link = (resource || {}).stripe_payment_link;
    var currentUser = (0, frontend_js_1.useAuth)().currentUser;
    var setAuthOpen = (0, react_1.useContext)(context_1.AppContext).setAuthOpen;
    var handleClick = function () {
        if (!(currentUser === null || currentUser === void 0 ? void 0 : currentUser.id))
            return setAuthOpen(true);
        var url = stripe_payment_link;
        url += "?client_reference_id=".concat(currentUser === null || currentUser === void 0 ? void 0 : currentUser.id, "&email=").concat(currentUser === null || currentUser === void 0 ? void 0 : currentUser.email);
        window.open(url, '_blank');
    };
    if (!(resource === null || resource === void 0 ? void 0 : resource.stripe_payment_link))
        return null;
    return (react_1.default.createElement(material_1.Stack, { sx: sx.root, direction: "row", justifyContent: justifyContent, spacing: 1 },
        react_1.default.createElement(material_1.Button, { sx: sx.button, size: "large", variant: "contained", color: "primary", onClick: handleClick, disabled: !stripe_payment_link, startIcon: react_1.default.createElement(__1.Icon, { name: "CreditCard", color: "primary.contrastText" }) }, buttonText)));
};
exports.default = StripePaymentLink;
var sx = {
    root: {
        width: '100%',
        alignItems: 'center',
    },
    button: {
        textTransform: 'none',
        width: {
            sm: 240,
            xs: '100%',
        },
    },
    caption: {
        width: '100%',
    },
};
