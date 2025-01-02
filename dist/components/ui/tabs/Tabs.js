"use client";
"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TabsContent = exports.TabsTrigger = exports.TabsList = exports.Tabs = void 0;
var React = __importStar(require("react"));
var TabsPrimitive = __importStar(require("@radix-ui/react-tabs"));
var frontend_shadcn_1 = require("frontend-shadcn");
var Tabs = TabsPrimitive.Root;
exports.Tabs = Tabs;
var TabsList = React.forwardRef(function (_a, ref) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return (React.createElement(TabsPrimitive.List, __assign({ ref: ref, className: (0, frontend_shadcn_1.cn)("flex justify-center w-full border-b border-divider", "inline-flex h-10 items-center justify-center p-1 text-foreground/70", className) }, props)));
});
exports.TabsList = TabsList;
TabsList.displayName = TabsPrimitive.List.displayName;
var TabsTrigger = React.forwardRef(function (_a, ref) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return (React.createElement(TabsPrimitive.Trigger, __assign({ ref: ref, className: (0, frontend_shadcn_1.cn)("px-4 py-2 font-medium text-sm text-foreground/70 hover:text-foreground focus:outline-none focus:text-foreground data-[state=active]:text-primary data-[state=active]:border-b-2 data-[state=active]:border-primary", "inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:text-foreground", className) }, props)));
});
exports.TabsTrigger = TabsTrigger;
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;
var TabsContent = React.forwardRef(function (_a, ref) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return (React.createElement(TabsPrimitive.Content, __assign({ ref: ref, className: (0, frontend_shadcn_1.cn)("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2", className) }, props)));
});
exports.TabsContent = TabsContent;
TabsContent.displayName = TabsPrimitive.Content.displayName;
