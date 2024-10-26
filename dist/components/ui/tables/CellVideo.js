'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../../../components");
var helpers_1 = require("../../../helpers");
var CellVideo = function (props) {
    var value = props.value, handleClick = props.handleClick, _a = props.size, size = _a === void 0 ? 64 : _a;
    return (react_1.default.createElement(components_1.CellImage, { value: (0, helpers_1.cloudinaryImageFromVideoUrl)(value === null || value === void 0 ? void 0 : value.url), handleClick: handleClick }));
};
exports.default = CellVideo;
