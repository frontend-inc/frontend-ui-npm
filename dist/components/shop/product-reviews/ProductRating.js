'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../../../components");
var ProductRating = function (props) {
    var _a = props || {}, rating = _a.rating, numReviews = _a.numReviews, _b = _a.enableTotal, enableTotal = _b === void 0 ? false : _b;
    return (react_1.default.createElement("div", { className: "flex flex-row space-x-2 items-center w-full" },
        rating > 0 ? (react_1.default.createElement(components_1.Rating, { value: rating, readOnly: true })) : (react_1.default.createElement(components_1.Typography, { variant: "body2" }, "No reviews yet")),
        rating > 0 && react_1.default.createElement(components_1.Typography, { variant: "caption" },
            "(",
            rating,
            ")"),
        rating > 0 && enableTotal && (react_1.default.createElement(components_1.Typography, { variant: "caption" },
            numReviews,
            " reviews"))));
};
exports.default = ProductRating;
