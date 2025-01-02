'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_2 = require("@nextui-org/react");
var react_3 = require("@nextui-org/react");
var lucide_react_1 = require("lucide-react");
var react_4 = require("@nextui-org/react");
var constants_1 = require("../../../constants");
function ThemePicker(props) {
    var _a = props || {}, name = _a.name, value = _a.value, handleChange = _a.handleChange, _b = _a.placeholder, placeholder = _b === void 0 ? 'Select a theme' : _b;
    var handleColorChange = function (color) {
        handleChange({
            target: {
                name: name,
                value: color,
            },
        });
    };
    return (react_1.default.createElement(react_3.Popover, null,
        react_1.default.createElement(react_3.PopoverTrigger, null,
            react_1.default.createElement(react_2.Button, { fullWidth: true, variant: "ghost", className: "text-foreground justify-between", startContent: value && (react_1.default.createElement("div", { className: "h-5 w-5", style: {
                        backgroundColor: constants_1.TAILWIND_COLOR_MAP[value],
                    } })), endContent: react_1.default.createElement(lucide_react_1.ChevronDown, { className: "h-4 w-4" }) }, value || placeholder)),
        react_1.default.createElement(react_3.PopoverContent, { className: "bg-background z-50 w-[200px] p-0" },
            react_1.default.createElement("div", { className: "grid grid-cols-5 gap-1 p-2" }, constants_1.TAILWIND_COLORS.map(function (color) { return (react_1.default.createElement(react_2.Button, { isIconOnly: true, key: color, className: (0, react_4.cn)('h-8 w-8 min-w-8 rounded-lg', value === color &&
                    'ring-2 ring-offset-2 ring-primary'), style: {
                    backgroundColor: constants_1.TAILWIND_COLOR_MAP[color],
                }, onPress: function () { return handleColorChange(color); } })); })))));
}
exports.default = ThemePicker;
