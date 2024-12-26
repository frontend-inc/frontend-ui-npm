'use client';
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var components_1 = require("../../../components");
var components_2 = require("../../../components");
var CellArray = function (props) {
    var value = props.value;
    var values = (value === null || value === void 0 ? void 0 : value.length) > 0 ? value : null;
    var MAX_TAGS = 2;
    var _a = (0, react_1.useState)(false), open = _a[0], setOpen = _a[1];
    var _b = (0, react_1.useState)([]), visibleTags = _b[0], setVisibleTags = _b[1];
    var handleToggleSeeAll = function () {
        if (open) {
            setOpen(false);
            if (values) {
                setVisibleTags(values.slice(0, MAX_TAGS));
            }
        }
        else {
            setOpen(true);
            setVisibleTags(values);
        }
    };
    (0, react_1.useEffect)(function () {
        if (values) {
            setVisibleTags(values.slice(0, MAX_TAGS));
        }
    }, [values]);
    return (react_1.default.createElement("div", { className: "flex flex-row gap-2" }, visibleTags === null || visibleTags === void 0 ? void 0 :
        visibleTags.map(function (value, index) { return (react_1.default.createElement(components_2.Label, { key: index }, value)); }),
        !open && visibleTags && (visibleTags === null || visibleTags === void 0 ? void 0 : visibleTags.length) > MAX_TAGS && (react_1.default.createElement(components_1.Button, { onClick: handleToggleSeeAll },
            react_1.default.createElement(components_2.Label, null, "...")))));
};
exports.default = CellArray;
