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
exports.Tabs = exports.Tab = void 0;
var react_1 = __importStar(require("react"));
var frontend_shadcn_1 = require("frontend-shadcn");
var react_2 = require("@nextui-org/react");
var Tab = function (_a) {
    var label = _a.label, value = _a.value, children = _a.children, disabled = _a.disabled;
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(frontend_shadcn_1.TabsTrigger, { value: value, disabled: disabled }, label),
        react_1.default.createElement(frontend_shadcn_1.TabsContent, { value: value }, children)));
};
exports.Tab = Tab;
var Tabs = function (_a) {
    var children = _a.children, defaultValue = _a.defaultValue, className = _a.className, onChange = _a.onChange;
    var _b = (0, react_1.useState)(defaultValue || children[0].props.value), activeTab = _b[0], setActiveTab = _b[1];
    var handleTabChange = function (value) {
        setActiveTab(value);
        if (onChange) {
            onChange(value);
        }
    };
    return (react_1.default.createElement(frontend_shadcn_1.Tabs, { value: activeTab, onValueChange: handleTabChange, className: (0, react_2.cn)('w-full', className) },
        react_1.default.createElement(frontend_shadcn_1.TabsList, { className: "grid w-full grid-cols-2 lg:grid-cols-4" }, react_1.default.Children.map(children, function (child) {
            return react_1.default.cloneElement(child, { key: child.props.value });
        })),
        react_1.default.Children.map(children, function (child) {
            return react_1.default.cloneElement(child, { key: child.props.value });
        })));
};
exports.Tabs = Tabs;
