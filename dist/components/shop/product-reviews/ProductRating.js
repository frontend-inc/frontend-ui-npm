'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var core_1 = require("../../core");
var ProductRating = function (props) {
    var _a = props || {}, resource = _a.resource, _b = _a.justifyContent, justifyContent = _b === void 0 ? 'flex-start' : _b, _c = _a.enableTotal, enableTotal = _c === void 0 ? false : _c;
    var _d = resource || {}, rating = _d.avg_rating, numReviews = _d.num_reviews;
    return (react_1.default.createElement("div", { className: "flex flex-row space-x-2 items-center w-full" },
        rating > 0 ? (react_1.default.createElement(core_1.Rating, { value: rating, readOnly: true })) : (react_1.default.createElement(core_1.Typography, { variant: "body2" }, "No reviews yet")),
        rating > 0 && react_1.default.createElement(core_1.Typography, { variant: "caption" },
            "(",
            rating,
            ")"),
        rating > 0 && enableTotal && (react_1.default.createElement(core_1.Typography, { variant: "caption" },
            numReviews,
            " reviews"))));
};
exports.default = ProductRating;
