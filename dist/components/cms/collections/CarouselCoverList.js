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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var __1 = require("../..");
var CarouselCoverListItems_1 = __importDefault(require("./CarouselCoverListItems"));
var CarouselCoverList = function (props) {
    var _a = props || {}, enableAutoPlay = _a.enableAutoPlay, enableArrows = _a.enableArrows, buttonText = _a.buttonText;
    var slots = {
        list: {
            enableAutoPlay: enableAutoPlay,
            enableArrows: enableArrows,
            buttonText: buttonText,
        },
    };
    return (react_1.default.createElement(__1.CollectionList, __assign({}, props, { slots: slots, list: CarouselCoverListItems_1.default })));
};
exports.default = CarouselCoverList;
