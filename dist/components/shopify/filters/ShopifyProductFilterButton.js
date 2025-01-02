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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var react_2 = require("@nextui-org/react");
var frontend_shadcn_1 = require("frontend-shadcn");
var frontend_shadcn_2 = require("frontend-shadcn");
var lucide_react_1 = require("lucide-react");
var ShopifyProductFiltersList_1 = __importDefault(require("./ShopifyProductFiltersList"));
var ShopifyProductFilterButton = function (props) {
    var _a = (0, react_1.useState)(false), open = _a[0], setOpen = _a[1];
    var toggleMenu = function () { return setOpen(!open); };
    var _b = props.filters, filters = _b === void 0 ? [] : _b, _c = props.options, options = _c === void 0 ? [] : _c, _d = props.priceOptions, priceOptions = _d === void 0 ? [] : _d, handleFilter = props.handleFilter, handleFilterArray = props.handleFilterArray;
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: "hidden sm:block" },
            react_1.default.createElement(frontend_shadcn_1.Popover, { open: open, onOpenChange: toggleMenu },
                react_1.default.createElement(frontend_shadcn_1.PopoverTrigger, { asChild: true },
                    react_1.default.createElement(react_2.Button, { variant: "solid", color: "primary", className: "w-full sm:w-auto", onPress: toggleMenu, startContent: react_1.default.createElement(lucide_react_1.ListFilter, { className: "h-4 w-4" }) }, "Filter")),
                react_1.default.createElement(frontend_shadcn_1.PopoverContent, { className: "w-80" },
                    react_1.default.createElement(ShopifyProductFiltersList_1.default, { filters: filters, options: options, priceOptions: priceOptions, handleFilter: handleFilter, handleFilterArray: handleFilterArray })))),
        react_1.default.createElement("div", { className: "sm:hidden" },
            react_1.default.createElement(frontend_shadcn_2.Sheet, { open: open, onOpenChange: toggleMenu },
                react_1.default.createElement(frontend_shadcn_2.SheetTrigger, { asChild: true },
                    react_1.default.createElement(react_2.Button, { variant: "ghost", className: "w-full", onPress: toggleMenu, startContent: react_1.default.createElement(lucide_react_1.ListFilter, { className: "h-4 w-4" }) }, "Filter")),
                react_1.default.createElement(frontend_shadcn_2.SheetContent, null,
                    react_1.default.createElement(ShopifyProductFiltersList_1.default, { filters: filters, options: options, priceOptions: priceOptions, handleFilter: handleFilter, handleFilterArray: handleFilterArray }))))));
};
exports.default = ShopifyProductFilterButton;
