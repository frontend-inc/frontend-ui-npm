'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../../../components");
var PayWall = function () {
    return (react_1.default.createElement("div", { className: "flex flex-col space-y-4" },
        react_1.default.createElement(components_1.Heading, { title: "Subscription required", description: "Please subscribe below to continue", textAlign: "center" }),
        react_1.default.createElement("div", { className: "w-full" },
            react_1.default.createElement(components_1.SubscriptionTable, null))));
};
exports.default = PayWall;
