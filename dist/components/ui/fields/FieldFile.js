'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../../../components");
var components_2 = require("../../../components");
var react_2 = require("@nextui-org/react");
var helpers_1 = require("../../../helpers");
var react_3 = require("@nextui-org/react");
var FieldFile = function (props) {
    var value = props.value, label = props.label, className = props.className;
    var handleClick = function () {
        if (value === null || value === void 0 ? void 0 : value.url) {
            var downloadUrl = (0, helpers_1.cloudinaryDownloadUrl)(value.url, value.filename);
            (0, helpers_1.downloadFile)(downloadUrl);
        }
    };
    return (react_1.default.createElement(components_1.FieldWrapper, { label: label },
        react_1.default.createElement("div", { className: (0, react_3.cn)('w-full flex justify-center', className) },
            react_1.default.createElement(react_2.Button, { size: "lg", variant: "ghost", className: "max-w-[240px]", onPress: handleClick, startContent: react_1.default.createElement(components_2.RemixIcon, { name: "ri-download-2-fill" }) }, value === null || value === void 0 ? void 0 : value.filename))));
};
exports.default = FieldFile;
