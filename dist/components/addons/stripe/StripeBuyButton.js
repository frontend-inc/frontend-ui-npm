"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
// Script tag included in html head
//<script async src="https://js.stripe.com/v3/buy-button.js"></script>
var StripeBuyButton = function (props) {
    var buyButtonId = props.buyButtonId, publishableKey = props.publishableKey;
    if (!buyButtonId || !publishableKey)
        return null;
    return (react_1.default.createElement(material_1.Box, { sx: sx.root },
        react_1.default.createElement("stripe-buy-button", { "buy-button-id": buyButtonId, "publishable-key": publishableKey })));
};
exports.default = StripeBuyButton;
var sx = {
    root: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
};
