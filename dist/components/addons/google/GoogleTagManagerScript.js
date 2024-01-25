"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var head_1 = __importDefault(require("next/head"));
var GoogleTagManager = function (props) {
    var id = (props || {}).id;
    if (!id)
        return null;
    return (react_1.default.createElement(head_1.default, null,
        react_1.default.createElement("script", { async: true, src: "https://www.googletagmanager.com/gtag/js?id=".concat(id) })));
};
exports.default = GoogleTagManager;
