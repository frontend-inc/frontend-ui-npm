'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../../../components");
var frontend_shadcn_1 = require("frontend-shadcn");
var frontend_shadcn_2 = require("frontend-shadcn");
var hooks_1 = require("../../../hooks");
var lucide_react_1 = require("lucide-react");
var ShopifyProductFiltersList_1 = __importDefault(require("./ShopifyProductFiltersList"));
var ShopifyProductFilterButton = function (props) {
    var _a = (0, hooks_1.useMenu)(), open = _a.open, toggleMenu = _a.toggleMenu, closeMenu = _a.closeMenu;
    var _b = props.filters, filters = _b === void 0 ? [] : _b, _c = props.options, options = _c === void 0 ? [] : _c, _d = props.priceOptions, priceOptions = _d === void 0 ? [] : _d, handleFilter = props.handleFilter, handleFilterArray = props.handleFilterArray;
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: "hidden sm:block" },
            react_1.default.createElement(frontend_shadcn_1.Popover, { open: open, onOpenChange: toggleMenu },
                react_1.default.createElement(frontend_shadcn_1.PopoverTrigger, { asChild: true },
                    react_1.default.createElement(components_1.Button, { variant: "default", className: "w-full sm:w-auto", onClick: toggleMenu },
                        react_1.default.createElement(lucide_react_1.ListFilter, { className: "mr-2 h-4 w-4" }),
                        "Filter")),
                react_1.default.createElement(frontend_shadcn_1.PopoverContent, { className: "w-80" },
                    react_1.default.createElement(ShopifyProductFiltersList_1.default, { filters: filters, options: options, priceOptions: priceOptions, handleFilter: handleFilter, handleFilterArray: handleFilterArray })))),
        react_1.default.createElement("div", { className: "sm:hidden" },
            react_1.default.createElement(frontend_shadcn_2.Sheet, { open: open, onOpenChange: toggleMenu },
                react_1.default.createElement(frontend_shadcn_2.SheetTrigger, { asChild: true },
                    react_1.default.createElement(components_1.Button, { variant: "default", className: "w-full", onClick: toggleMenu },
                        react_1.default.createElement(lucide_react_1.ListFilter, { className: "mr-2 h-4 w-4" }),
                        "Filter")),
                react_1.default.createElement(frontend_shadcn_2.SheetContent, null,
                    react_1.default.createElement(ShopifyProductFiltersList_1.default, { filters: filters, options: options, priceOptions: priceOptions, handleFilter: handleFilter, handleFilterArray: handleFilterArray }))))));
};
exports.default = ShopifyProductFilterButton;
