'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Statistic = void 0;
var react_1 = __importDefault(require("react"));
var core_1 = require("../../core");
var components_1 = require("../../../components");
var frontend_shadcn_1 = require("frontend-shadcn");
var Statistic = function (props) {
    var value = props.value, label = props.label, icon = props.icon;
    return (react_1.default.createElement(frontend_shadcn_1.Card, null,
        react_1.default.createElement("div", { className: "flex flex-row space-x-2 justify-start items-center" },
            react_1.default.createElement("div", { className: "mr-2" },
                react_1.default.createElement(components_1.Icon, { name: icon, size: 24 })),
            react_1.default.createElement("div", { className: "flex flex-col space-y-1" },
                react_1.default.createElement(core_1.Typography, { variant: "subtitle1", className: "font-bold tracking-tight" }, value),
                react_1.default.createElement(core_1.Typography, { variant: "body2", className: "text-muted-foreground" }, label)))));
};
exports.Statistic = Statistic;
exports.default = exports.Statistic;
