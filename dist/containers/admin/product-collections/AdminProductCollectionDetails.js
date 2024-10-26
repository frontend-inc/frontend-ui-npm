'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../../../components");
var core_1 = require("../../../components/core");
var components_2 = require("../../../components");
var AdminProductCollectionDetails = function (props) {
    var _a;
    var _b = props || {}, productCollection = _b.productCollection, handleEdit = _b.handleEdit;
    return (react_1.default.createElement("div", { className: "bg-white/5 p-4 rounded-lg shadow" },
        react_1.default.createElement("div", { className: "flex flex-row justify-between items-start w-full" },
            react_1.default.createElement("div", { className: "flex flex-row space-x-4" },
                react_1.default.createElement("div", { className: "w-24 h-24" },
                    react_1.default.createElement(components_1.Image, { aspectRatio: 1.0, src: (_a = productCollection === null || productCollection === void 0 ? void 0 : productCollection.image) === null || _a === void 0 ? void 0 : _a.url, alt: productCollection === null || productCollection === void 0 ? void 0 : productCollection.title, width: 96, height: 96 })),
                react_1.default.createElement("div", { className: "flex flex-col" },
                    react_1.default.createElement(core_1.Typography, { variant: "subtitle1" }, productCollection === null || productCollection === void 0 ? void 0 : productCollection.title),
                    react_1.default.createElement(core_1.Typography, { variant: "body2", className: "text-muted-foreground" }, productCollection === null || productCollection === void 0 ? void 0 : productCollection.description))),
            react_1.default.createElement("div", null,
                react_1.default.createElement(components_2.Button, { onClick: handleEdit }, "Edit")))));
};
exports.default = AdminProductCollectionDetails;
