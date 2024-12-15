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
var hooks_1 = require("../../../hooks");
var CollectionDocumentsCarousel = function (props) {
    var apiUrl = (0, hooks_1.useApp)().apiUrl;
    var collectionId = props.collectionId, enableAutoplay = props.enableAutoplay, rest = __rest(props, ["collectionId", "enableAutoplay"]);
    var slots = {
        list: {
            enableAutoplay: enableAutoplay,
        },
    };
    var url = "".concat(apiUrl, "/cms/collections/").concat(collectionId, "/documents");
    return (react_1.default.createElement(__1.DocumentList, __assign({}, rest, { url: url, list: __1.DocumentCarouselListItems, slots: slots })));
};
exports.default = CollectionDocumentsCarousel;
