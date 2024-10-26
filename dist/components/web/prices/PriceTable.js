'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var PriceTableCard_1 = __importDefault(require("./PriceTableCard"));
var __1 = require("../..");
var PriceTable = function (props) {
    var items = props.items;
    return (react_1.default.createElement("div", { className: "flex flex-col space-y-2" },
        react_1.default.createElement("div", { className: "flex sm:flex-row flex-col space-y-1 sm:space-y-0 sm:space-x-1" }, items === null || items === void 0 ? void 0 : items.map(function (item, index) { return (react_1.default.createElement(PriceTableCard_1.default, { key: index, label: item.label, title: item.title, price: item.price, description: item.description, features: item.features || [] })); })),
        (items === null || items === void 0 ? void 0 : items.length) === 0 && (react_1.default.createElement(__1.Placeholder, { icon: "CreditCard", title: "No subscription plans", description: "Subscription plans will appear here." }))));
};
exports.default = PriceTable;
