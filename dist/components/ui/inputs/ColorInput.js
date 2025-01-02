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
var react_2 = require("@nextui-org/react");
var react_3 = require("@nextui-org/react");
var lucide_react_1 = require("lucide-react");
var react_4 = require("@nextui-org/react");
var constants_1 = require("../../../constants");
function ColorInput(props) {
    var _a = props || {}, label = _a.label, name = _a.name, value = _a.value, _b = _a.placeholder, placeholder = _b === void 0 ? 'Color' : _b, _c = _a.disableTone, disableTone = _c === void 0 ? false : _c, handleChange = _a.handleChange, info = _a.info;
    var _d = (0, react_1.useState)(500), tone = _d[0], setTone = _d[1];
    var _e = (0, react_1.useState)('slate'), selectedColor = _e[0], setSelectedColor = _e[1];
    var handleToneChange = function (newTone) {
        setTone(newTone);
        if (selectedColor) {
            handleColorChange(selectedColor, newTone);
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
        react_1.default.createElement(react_3.Popover, null,
            react_1.default.createElement(react_3.PopoverTrigger, null,
                react_1.default.createElement(react_2.Button, { fullWidth: true, variant: "ghost", className: "justify-between" },
                    placeholder,
                    react_1.default.createElement("div", { className: "flex items-center space-x-2" },
                        react_1.default.createElement("div", { className: "h-6 w-6 rounded border", style: { backgroundColor: value } }),
                        react_1.default.createElement(lucide_react_1.ChevronDown, { className: "h-4 w-4 opacity-50" })))),
            react_1.default.createElement(react_3.PopoverContent, { className: "bg-content1 p-2 w-64" },
                react_1.default.createElement("div", { className: "grid grid-cols-6 gap-1 mb-2" },
                    react_1.default.createElement(react_3.Tooltip, { content: "Remove color" },
                        react_1.default.createElement(react_2.Button, { isIconOnly: true, radius: "md", className: (0, react_4.cn)('relative bg-white h-8 w-8 min-w-8 overflow-hidden', value === '' &&
                                'ring-2 ring-offset-2 ring-offset-background'), onPress: handleRemoveColor },
                            react_1.default.createElement("span", { className: "sr-only" }, "Remove color"),
                            react_1.default.createElement("div", { className: "absolute inset-0 flex items-center justify-center" },
                                react_1.default.createElement("div", { className: "w-[1px] h-[140%] bg-gray-300 rotate-45 transform origin-center" })))),
                    react_1.default.createElement(react_3.Tooltip, { content: "White" },
                        react_1.default.createElement(react_2.Button, { isIconOnly: true, className: (0, react_4.cn)('h-8 w-8 min-w-8', selectedColorName === 'white' &&
                                'ring-2 ring-offset-2 ring-offset-background'), style: { backgroundColor: '#FFFFFF' }, onPress: function () { return handleColorChange('white'); } })),
                    react_1.default.createElement(react_3.Tooltip, { content: "Black" },
                        react_1.default.createElement(react_2.Button, { isIconOnly: true, className: (0, react_4.cn)('h-8 w-8 min-w-8', selectedColorName === 'black' &&
                                'ring-2 ring-offset-2 ring-offset-background'), style: { backgroundColor: '#000000' }, onPress: function () { return handleColorChange('black'); } })),
                    Object.keys(constants_1.TAILWIND_COLOR_PICKER_MAP).map(function (color) { return (react_1.default.createElement(react_3.Tooltip, { content: color, key: color },
                        react_1.default.createElement(react_2.Button, { radius: "md", className: (0, react_4.cn)('h-8 w-8 min-w-8', value === constants_1.TAILWIND_COLOR_PICKER_MAP[color][tone] &&
                                'ring-2 ring-offset-2 ring-offset-background'), style: {
                                backgroundColor: constants_1.TAILWIND_COLOR_PICKER_MAP[color][tone],
                            }, onPress: function () { return handleColorChange(color); } }))); })),
                react_1.default.createElement("div", { className: "w-full space-y-4" },
                    !disableTone && (react_1.default.createElement(react_3.Slider, { minValue: 100, maxValue: 900, step: 100, value: tone, onChange: handleToneChange })),
                    react_1.default.createElement(react_3.Input, { fullWidth: true, label: 'Color', placeholder: "#RRGGBB", value: (value === null || value === void 0 ? void 0 : value.startsWith('#')) ? value : '', onChange: handleHexColorChange }))))));
}
exports.default = ColorInput;
