'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var __1 = require("../..");
var hooks_1 = require("../../../hooks");
var SubscribeButton = function () {
    var _a = (0, hooks_1.useShop)(), subscribeOpen = _a.subscribeOpen, setSubscribeOpen = _a.setSubscribeOpen, subscriptionPrice = _a.subscriptionPrice;
    var handleClick = function () {
        setSubscribeOpen(!subscribeOpen);
    };
    return (react_1.default.createElement(__1.Button, { onClick: handleClick },
        "Subscribe ",
        subscriptionPrice));
};
exports.default = SubscribeButton;
