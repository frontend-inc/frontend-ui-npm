'use client';
"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var __1 = require("../..");
var __2 = require("..");
var ShopifyProductCollectionModal = function (props) {
    var collection = props.collection, _a = props.open, open = _a === void 0 ? false : _a, handleClose = props.handleClose, rest = __rest(props, ["collection", "open", "handleClose"]);
    return (react_1.default.createElement(__1.Modal, { open: open, handleClose: handleClose, maxWidth: "full" },
        react_1.default.createElement("div", { className: "w-full flex flex-col space-y-6" },
            react_1.default.createElement(__1.Heading, { size: "sm", textAlign: "center", title: collection === null || collection === void 0 ? void 0 : collection.title, subtitle: collection === null || collection === void 0 ? void 0 : collection.description }),
            react_1.default.createElement(__2.ShopifyProductCollection, __assign({}, rest, { shopifyCollection: collection === null || collection === void 0 ? void 0 : collection.handle })))));
};
exports.default = ShopifyProductCollectionModal;
