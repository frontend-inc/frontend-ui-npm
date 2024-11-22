'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../../../components");
var __1 = require("../..");
var moment_1 = __importDefault(require("moment"));
function ProductReviewItem(_a) {
    var _b;
    var resource = _a.resource;
    return (react_1.default.createElement("div", { className: "w-full flex items-start py-4 border-b border-divider hover:bg-muted/50" },
        react_1.default.createElement("div", { className: "mr-4 mt-1" },
            react_1.default.createElement(__1.UserAvatar, { user: resource === null || resource === void 0 ? void 0 : resource.user })),
        react_1.default.createElement("div", { className: "flex-grow" },
            react_1.default.createElement(components_1.Rating, { readOnly: true, value: resource.rating, className: "text-primary mb-2" }),
            react_1.default.createElement("div", { className: "space-y-3" },
                react_1.default.createElement(components_1.Typography, { variant: "body1" }, resource === null || resource === void 0 ? void 0 : resource.title),
                react_1.default.createElement(components_1.Typography, { variant: "body1" }, resource.body),
                react_1.default.createElement(components_1.Typography, { variant: "body2", className: "text-muted-foreground text-sm" }, "@".concat((_b = resource === null || resource === void 0 ? void 0 : resource.user) === null || _b === void 0 ? void 0 : _b.username),
                    " reviewed",
                    ' ',
                    (0, moment_1.default)(resource === null || resource === void 0 ? void 0 : resource.created_at).fromNow())))));
}
exports.default = ProductReviewItem;
