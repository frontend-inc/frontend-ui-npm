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
exports.Autocomplete = void 0;
var React = __importStar(require("react"));
var lucide_react_1 = require("lucide-react");
var frontend_shadcn_1 = require("frontend-shadcn");
var components_1 = require("../../components");
var frontend_shadcn_2 = require("frontend-shadcn");
var frontend_shadcn_3 = require("frontend-shadcn");
function Autocomplete(_a) {
    var name = _a.name, value = _a.value, onChange = _a.onChange, options = _a.options, _b = _a.placeholder, placeholder = _b === void 0 ? 'Select an option...' : _b, _c = _a.emptyMessage, emptyMessage = _c === void 0 ? 'No results found.' : _c;
    var _d = React.useState(false), open = _d[0], setOpen = _d[1];
    var selectedOption = options.find(function (option) { return option.value === value; });
    return (React.createElement(frontend_shadcn_3.Popover, { open: open, onOpenChange: setOpen },
        React.createElement(frontend_shadcn_3.PopoverTrigger, { asChild: true },
            React.createElement(components_1.Button, { variant: "outline", role: "combobox", "aria-expanded": open, className: "w-full justify-between" },
                selectedOption ? selectedOption.label : placeholder,
                React.createElement(lucide_react_1.ChevronsUpDown, { className: "ml-2 h-4 w-4 shrink-0 opacity-50" }))),
        React.createElement(frontend_shadcn_3.PopoverContent, { className: "w-full p-0" },
            React.createElement(frontend_shadcn_2.Command, null,
                React.createElement(frontend_shadcn_2.CommandInput, { placeholder: placeholder }),
                React.createElement(frontend_shadcn_2.CommandEmpty, null, emptyMessage),
                React.createElement(frontend_shadcn_2.CommandGroup, null, options.map(function (option) { return (React.createElement(frontend_shadcn_2.CommandItem, { key: option.value, onSelect: function () {
                        onChange(option.value);
                        setOpen(false);
                    } },
                    React.createElement(lucide_react_1.Check, { className: (0, frontend_shadcn_1.cn)('mr-2 h-4 w-4', value === option.value ? 'opacity-100' : 'opacity-0') }),
                    option.label)); }))))));
}
exports.Autocomplete = Autocomplete;
