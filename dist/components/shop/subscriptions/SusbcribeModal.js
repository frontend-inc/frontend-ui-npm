'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var __1 = require("../..");
var __2 = require("../..");
var hooks_1 = require("../../../hooks");
var SubcribeModal = function (props) {
    var _a = (0, hooks_1.useShop)(), subscribeOpen = _a.subscribeOpen, setSubscribeOpen = _a.setSubscribeOpen;
    return (react_1.default.createElement(__1.Drawer, { title: "Subscribe to continue", open: subscribeOpen, handleClose: function () { return setSubscribeOpen(false); } },
        react_1.default.createElement("div", { className: "w-full" },
            react_1.default.createElement(__2.SubscribeCard, null))));
};
exports.default = SubcribeModal;
