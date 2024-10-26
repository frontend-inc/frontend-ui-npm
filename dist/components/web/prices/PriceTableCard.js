'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var core_1 = require("../../core");
var navigation_1 = require("next/navigation");
var __1 = require("../..");
var frontend_shadcn_1 = require("frontend-shadcn");
var PriceCard = function (props) {
    var router = (0, navigation_1.useRouter)();
    var label = props.label, title = props.title, features = props.features, buttonText = props.buttonText, price = props.price, url = props.url;
    var handleClick = function () {
        if (url) {
            router.push(url);
        }
    };
    return (react_1.default.createElement("div", { className: "w-full border border-divider rounded p-2 flex flex-col justify-between" },
        react_1.default.createElement("div", { className: "flex flex-col space-y-3 min-h-[300px]" },
            label && (react_1.default.createElement("div", null,
                react_1.default.createElement(__1.Label, { label: label }))),
            react_1.default.createElement(core_1.Typography, { variant: "body1" }, title),
            react_1.default.createElement(core_1.Typography, { variant: "h5" }, price),
            react_1.default.createElement(frontend_shadcn_1.Separator, null),
            react_1.default.createElement("ul", null, features === null || features === void 0 ? void 0 : features.map(function (feature, i) { return (react_1.default.createElement("li", { key: i },
                react_1.default.createElement(core_1.Typography, { variant: "body1" }, feature))); }))),
        buttonText && react_1.default.createElement(core_1.Button, { onClick: handleClick }, buttonText)));
};
exports.default = PriceCard;
