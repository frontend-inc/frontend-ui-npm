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
var components_2 = require("../../../components");
var frontend_shadcn_1 = require("frontend-shadcn");
var frontend_shadcn_2 = require("frontend-shadcn");
var frontend_shadcn_3 = require("frontend-shadcn");
var frontend_shadcn_4 = require("frontend-shadcn");
var lucide_react_1 = require("lucide-react");
var frontend_shadcn_5 = require("frontend-shadcn");
var constants_1 = require("../../../constants");
function ColorInput(_a) {
    var label = _a.label, name = _a.name, value = _a.value, _b = _a.placeholder, placeholder = _b === void 0 ? 'Color' : _b, _c = _a.disableTone, disableTone = _c === void 0 ? false : _c, handleChange = _a.handleChange, info = _a.info;
    var _d = (0, react_1.useState)(500), tone = _d[0], setTone = _d[1];
    var _e = (0, react_1.useState)('slate'), selectedColor = _e[0], setSelectedColor = _e[1];
    var handleToneChange = function (newTone) {
        setTone(newTone[0]);
        if (selectedColor) {
            handleColorChange(selectedColor, newTone[0]);
        }
    };
    var handleColorChange = function (color, shade) {
        if (shade === void 0) { shade = tone; }
        if (!color)
            return;
        var newColor;
        if (color === 'white' || color === 'black') {
            newColor = color === 'white' ? '#FFFFFF' : '#000000';
        }
        else {
            newColor = constants_1.TAILWIND_COLOR_PICKER_MAP[color][shade];
        }
        setSelectedColor(color);
        handleChange({
            target: {
                name: name,
                value: newColor,
            },
        });
    };
    var handleHexColorChange = function (e) {
        var hexColor = e.target.value;
        handleChange({
            target: {
                name: name,
                value: hexColor,
            },
        });
    };
    var handleRemoveColor = function () {
        handleChange({
            target: {
                name: name,
                value: '',
            },
        });
        setSelectedColor('');
    };
    var selectedColorName = (0, react_1.useMemo)(function () {
        if (value === '#FFFFFF')
            return 'white';
        if (value === '#000000')
            return 'black';
        for (var _i = 0, _a = Object.entries(constants_1.TAILWIND_COLOR_MAP); _i < _a.length; _i++) {
            var _b = _a[_i], colorName = _b[0], shades = _b[1];
            if (Object.values(shades).includes(value)) {
                return colorName;
            }
        }
        return '';
    }, [value]);
    return (react_1.default.createElement("div", { className: "w-full space-y-2" },
        react_1.default.createElement(components_1.InputLabel, { label: label, info: info }),
        react_1.default.createElement(frontend_shadcn_3.Popover, null,
            react_1.default.createElement(frontend_shadcn_3.PopoverTrigger, { asChild: true },
                react_1.default.createElement(components_2.Button, { variant: "outline", className: "text-foreground w-full justify-between" },
                    placeholder,
                    react_1.default.createElement("div", { className: "flex items-center space-x-2" },
                        react_1.default.createElement("div", { className: "h-6 w-6 rounded border", style: { backgroundColor: value } }),
                        react_1.default.createElement(lucide_react_1.ChevronDown, { className: "h-4 w-4 opacity-50" })))),
            react_1.default.createElement(frontend_shadcn_3.PopoverContent, { className: "bg-background w-64" },
                react_1.default.createElement("div", { className: "bg-background grid grid-cols-7 gap-3 mb-2" },
                    react_1.default.createElement(frontend_shadcn_4.TooltipProvider, null,
                        react_1.default.createElement(frontend_shadcn_4.Tooltip, null,
                            react_1.default.createElement(frontend_shadcn_4.TooltipTrigger, { asChild: true },
                                react_1.default.createElement("button", { className: (0, frontend_shadcn_5.cn)('relative bg-white h-8 w-8 rounded-md overflow-hidden', value === '' &&
                                        'ring-2 ring-offset-2 ring-offset-background'), onClick: handleRemoveColor },
                                    react_1.default.createElement("span", { className: "sr-only" }, "Remove color"),
                                    react_1.default.createElement("div", { className: "absolute inset-0 flex items-center justify-center" },
                                        react_1.default.createElement("div", { className: "w-[1px] h-[140%] bg-gray-300 rotate-45 transform origin-center" })))),
                            react_1.default.createElement(frontend_shadcn_4.TooltipContent, null,
                                react_1.default.createElement("p", null, "Remove color")))),
                    react_1.default.createElement(frontend_shadcn_4.TooltipProvider, null,
                        react_1.default.createElement(frontend_shadcn_4.Tooltip, null,
                            react_1.default.createElement(frontend_shadcn_4.TooltipTrigger, { asChild: true },
                                react_1.default.createElement("button", { className: (0, frontend_shadcn_5.cn)('h-8 w-8 rounded-md border', selectedColorName === 'white' &&
                                        'ring-2 ring-offset-2 ring-offset-background'), style: { backgroundColor: '#FFFFFF' }, onClick: function () { return handleColorChange('white'); } })),
                            react_1.default.createElement(frontend_shadcn_4.TooltipContent, null,
                                react_1.default.createElement("p", null, "White")))),
                    react_1.default.createElement(frontend_shadcn_4.TooltipProvider, null,
                        react_1.default.createElement(frontend_shadcn_4.Tooltip, null,
                            react_1.default.createElement(frontend_shadcn_4.TooltipTrigger, { asChild: true },
                                react_1.default.createElement("button", { className: (0, frontend_shadcn_5.cn)('h-8 w-8 rounded-md border', selectedColorName === 'black' &&
                                        'ring-2 ring-offset-2 ring-offset-background'), style: { backgroundColor: '#000000' }, onClick: function () { return handleColorChange('black'); } })),
                            react_1.default.createElement(frontend_shadcn_4.TooltipContent, null,
                                react_1.default.createElement("p", null, "Black")))),
                    Object.keys(constants_1.TAILWIND_COLOR_PICKER_MAP).map(function (color) { return (react_1.default.createElement(frontend_shadcn_4.TooltipProvider, { key: color },
                        react_1.default.createElement(frontend_shadcn_4.Tooltip, null,
                            react_1.default.createElement(frontend_shadcn_4.TooltipTrigger, { asChild: true },
                                react_1.default.createElement("button", { className: (0, frontend_shadcn_5.cn)('h-8 w-8 rounded-md border', value === constants_1.TAILWIND_COLOR_PICKER_MAP[color][tone] &&
                                        'ring-2 ring-offset-2 ring-offset-background'), style: {
                                        backgroundColor: constants_1.TAILWIND_COLOR_PICKER_MAP[color][tone],
                                    }, onClick: function () { return handleColorChange(color); } })),
                            react_1.default.createElement(frontend_shadcn_4.TooltipContent, null,
                                react_1.default.createElement("p", null, color))))); })),
                !disableTone && (react_1.default.createElement("div", { className: "space-y-2" },
                    react_1.default.createElement("label", { className: "text-sm font-medium leading-none" }, "Color tone"),
                    react_1.default.createElement(frontend_shadcn_2.Slider, { min: 100, max: 900, step: 100, value: [tone], onValueChange: handleToneChange }))),
                react_1.default.createElement("div", { className: "mt-2" },
                    react_1.default.createElement(frontend_shadcn_1.Input, { placeholder: "#RRGGBB", value: (value === null || value === void 0 ? void 0 : value.startsWith('#')) ? value : '', onChange: handleHexColorChange }))))));
}
exports.default = ColorInput;
