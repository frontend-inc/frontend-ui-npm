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
var lucide_react_1 = require("lucide-react");
var frontend_shadcn_3 = require("frontend-shadcn");
var constants_1 = require("../../../constants");
function ThemePicker(_a) {
    var name = _a.name, value = _a.value, handleChange = _a.handleChange, _b = _a.placeholder, placeholder = _b === void 0 ? 'Select a theme' : _b;
    var handleColorChange = function (color) {
        handleChange({
            target: {
                name: name,
                value: color,
            },
        });
    };
    return (react_1.default.createElement(frontend_shadcn_1.Popover, null,
        react_1.default.createElement(frontend_shadcn_1.PopoverTrigger, { asChild: true },
            react_1.default.createElement(components_1.Button, { variant: "outline", className: "w-[200px] text-foreground justify-between" },
                value ? (react_1.default.createElement("div", { className: "flex items-center gap-2" },
                    react_1.default.createElement("div", { className: "h-4 w-4 rounded-full", style: {
                            backgroundColor: constants_1.TAILWIND_COLOR_MAP[value],
                        } }),
                    value)) : (placeholder),
                react_1.default.createElement(lucide_react_1.ChevronDown, { className: "h-4 w-4 opacity-50" }))),
        react_1.default.createElement(frontend_shadcn_1.PopoverContent, { className: "bg-background z-50 w-[200px] p-0" },
            react_1.default.createElement("div", { className: "grid grid-cols-5 gap-1 p-2" }, constants_1.TAILWIND_COLORS.map(function (color) { return (react_1.default.createElement(frontend_shadcn_2.TooltipProvider, { key: color },
                react_1.default.createElement(frontend_shadcn_2.Tooltip, null,
                    react_1.default.createElement(frontend_shadcn_2.TooltipTrigger, { asChild: true },
                        react_1.default.createElement("button", { className: (0, frontend_shadcn_3.cn)('h-8 w-8 rounded-md border', value === color &&
                                'ring-2 ring-offset-2 ring-offset-background'), style: {
                                backgroundColor: constants_1.TAILWIND_COLOR_MAP[color],
                            }, onClick: function () { return handleColorChange(color); } })),
                    react_1.default.createElement(frontend_shadcn_2.TooltipContent, null,
                        react_1.default.createElement("p", null, color))))); })))));
}
exports.default = ThemePicker;
