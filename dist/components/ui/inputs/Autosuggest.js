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
var lucide_react_1 = require("lucide-react");
var frontend_shadcn_1 = require("frontend-shadcn");
var components_2 = require("../../../components");
var frontend_shadcn_2 = require("frontend-shadcn");
var frontend_shadcn_3 = require("frontend-shadcn");
var Autosuggest = function (props) {
    var label = props.label, info = props.info, name = props.name, value = props.value, _a = props.placeholder, placeholder = _a === void 0 ? 'Search...' : _a, handleChange = props.handleChange, handleInputChange = props.handleInputChange, _b = props.options, options = _b === void 0 ? [] : _b;
    var _c = (0, react_1.useState)(null), selectedOption = _c[0], setSelectedOption = _c[1];
    var _d = (0, react_1.useState)(false), open = _d[0], setOpen = _d[1];
    var handleCommandChange = function (ev) {
        if (handleInputChange) {
            handleInputChange(ev);
        }
    };
    var handleSelect = function (currentValue) {
        var selectedOption = options.find(function (option) { return option.label === currentValue; });
        var value = (selectedOption === null || selectedOption === void 0 ? void 0 : selectedOption.value) || null;
        if (value) {
            handleChange({
                target: {
                    name: name,
                    value: value,
                },
            });
        }
        setOpen(false);
    };
    (0, react_1.useEffect)(function () {
        if (value && (options === null || options === void 0 ? void 0 : options.length) > 0) {
            var selectedOption_1 = options.find(function (option) { return option.value === value; });
            setSelectedOption(selectedOption_1 || null);
        }
    }, [value, options]);
    return (react_1.default.createElement(frontend_shadcn_3.Popover, { open: open, onOpenChange: setOpen },
        react_1.default.createElement("div", { className: "flex flex-col space-y-2 w-full" },
            react_1.default.createElement(components_1.InputLabel, { label: label, info: info }),
            react_1.default.createElement(frontend_shadcn_3.PopoverTrigger, { asChild: true },
                react_1.default.createElement(components_2.Button, { variant: "secondary", role: "combobox", "aria-expanded": open, className: (0, frontend_shadcn_1.cn)('min-w-[220px] bg-input hover:bg-input/50 hover:shadow-sm w-full text-foreground justify-between font-normal') },
                    (selectedOption === null || selectedOption === void 0 ? void 0 : selectedOption.label) || 'Select...',
                    react_1.default.createElement(lucide_react_1.ChevronsUpDown, { className: "ml-2 h-4 w-4 shrink-0 opacity-50" })))),
        react_1.default.createElement(frontend_shadcn_3.PopoverContent, { className: "bg-input w-[240px] p-0" },
            react_1.default.createElement(frontend_shadcn_2.Command, null,
                react_1.default.createElement(frontend_shadcn_2.CommandInput, { onValueChange: handleCommandChange, placeholder: placeholder }),
                react_1.default.createElement(frontend_shadcn_2.CommandList, null,
                    react_1.default.createElement(frontend_shadcn_2.CommandEmpty, null, "No option found."),
                    react_1.default.createElement(frontend_shadcn_2.CommandGroup, null, options.map(function (option) { return (react_1.default.createElement(frontend_shadcn_2.CommandItem, { key: option.value, value: option.label, onSelect: handleSelect },
                        react_1.default.createElement(lucide_react_1.Check, { className: (0, frontend_shadcn_1.cn)('mr-2 h-4 w-4', value === option.value ? 'opacity-100' : 'opacity-0') }),
                        option.label)); })))))));
};
exports.default = Autosuggest;
