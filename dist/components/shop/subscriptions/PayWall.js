'use client';
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
var components_1 = require("../../../components");
var components_2 = require("../../../components");
var hooks_1 = require("../../../hooks");
var PayWall = function () {
    var _a = (0, react_1.useState)(false), open = _a[0], setOpen = _a[1];
    var subscriptionPrice = (0, hooks_1.useShop)().subscriptionPrice;
    return (react_1.default.createElement("div", { className: "flex flex-col space-y-4" },
        react_1.default.createElement(components_2.Heading, { title: "Subscription required", description: "Please subscribe below to continue" }),
        react_1.default.createElement(components_1.Button, { onClick: function () { return setOpen(true); } },
            "Subscribe ",
            subscriptionPrice),
        react_1.default.createElement(components_1.Drawer, { title: "Subscribe", open: open, handleClose: function () { return setOpen(false); } },
            react_1.default.createElement("div", { className: "w-full flex items-center justify-center" },
                react_1.default.createElement(components_2.SubscribeCard, null)))));
};
exports.default = PayWall;
