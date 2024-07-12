"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var AvgRating = function (props) {
    var _a = props || {}, resource = _a.resource, _b = _a.justifyContent, justifyContent = _b === void 0 ? 'flex-start' : _b, _c = _a.size, size = _c === void 0 ? 'medium' : _c, _d = _a.enableTotal, enableTotal = _d === void 0 ? false : _d;
    var _e = resource || {}, rating = _e.avg_rating, numReviews = _e.num_reviews;
    return (react_1.default.createElement(material_1.Stack, { alignItems: "center", justifyContent: justifyContent, direction: "row", spacing: 1 },
        react_1.default.createElement(material_1.Rating, { size: size, value: rating, readOnly: true, sx: {
                color: 'primary.main',
                '& .MuiRating-iconEmpty': {
                    color: 'text.secondary',
                },
            } }),
        rating > 0 && (react_1.default.createElement(material_1.Typography, { color: 'text.secondary', variant: "caption" },
            "(",
            rating,
            ")")),
        rating > 0 && enableTotal && (react_1.default.createElement(material_1.Typography, { color: 'text.secondary', variant: "caption" },
            numReviews,
            " reviews"))));
};
exports.default = AvgRating;
