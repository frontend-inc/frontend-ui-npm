'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
// Script tag included in html head
// <script async src="https://js.stripe.com/v3/pricing-table.js"></script>
var StripePricingTable = function (props) {
    var pricingTableId = props.pricingTableId, publishableKey = props.publishableKey;
    if (!pricingTableId || !publishableKey)
        return null;
    return (react_1.default.createElement("div", { className: "flex flex-row justify-center items-center" },
        react_1.default.createElement("stripe-pricing-table", { "pricing-table-id": pricingTableId, "publishable-key": publishableKey })));
};
exports.default = StripePricingTable;
