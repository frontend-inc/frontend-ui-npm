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
var core_1 = require("../../../core");
var __1 = require("../../..");
var BrandfetchInputModal = function (props) {
    var _a = props || {}, _b = _a.label, label = _b === void 0 ? 'Logo' : _b, name = _a.name, value = _a.value, handleChange = _a.handleChange;
    var _c = (0, react_1.useState)(false), open = _c[0], setOpen = _c[1];
    var handleBrandChange = function (storage) {
        handleChange({
            target: {
                name: name,
                value: storage === null || storage === void 0 ? void 0 : storage.url,
            },
        });
        setOpen(false);
    };
    var handleDelete = function () {
        handleChange({ target: { name: name, value: '' } });
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: "flex flex-row items-start" },
            react_1.default.createElement(__1.InputLabel, { label: label }),
            react_1.default.createElement("div", { className: "flex flex-col space-y-4" },
                react_1.default.createElement(core_1.Collapse, { in: Boolean(value) },
                    react_1.default.createElement(__1.Image, { src: value, height: 128, width: 128, alt: "logo", objectFit: "contain" })),
                react_1.default.createElement("div", null,
                    react_1.default.createElement(core_1.Button, { onClick: function () { return setOpen(true); }, color: "secondary" }, "Browse")))),
        react_1.default.createElement(__1.Sheet, { open: open, handleClose: function () { return setOpen(false); } },
            react_1.default.createElement(__1.BrandfetchInput, { onComplete: handleBrandChange }))));
};
exports.default = BrandfetchInputModal;
