'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../../../components");
var constants_1 = require("../../../constants");
var frontend_shadcn_1 = require("frontend-shadcn");
var FieldIcon = function (_a) {
    var variant = _a.variant, _b = _a.size, size = _b === void 0 ? 36 : _b;
    var field = constants_1.FIELD_VARIANTS.find(function (f) { return f.variant === variant; });
    return (react_1.default.createElement("div", { className: (0, frontend_shadcn_1.cn)(field === null || field === void 0 ? void 0 : field.color, 'p-[5px] mr-1 rounded-lg flex items-center justify-center'), style: {
            width: "".concat(size, "px"),
            height: "".concat(size, "px"),
        } },
        react_1.default.createElement(components_1.Icon, { name: field === null || field === void 0 ? void 0 : field.icon })));
};
exports.default = FieldIcon;
