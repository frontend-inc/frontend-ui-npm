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
var moment_1 = __importDefault(require("moment"));
var frontend_shadcn_1 = require("frontend-shadcn");
var frontend_shadcn_2 = require("frontend-shadcn");
var components_1 = require("../../../components");
var frontend_shadcn_3 = require("frontend-shadcn");
var lucide_react_1 = require("lucide-react");
var components_2 = require("../../../components");
function DateInput(_a) {
    var errors = _a.errors, _b = _a.direction, direction = _b === void 0 ? 'column' : _b, required = _a.required, label = _a.label, info = _a.info, name = _a.name, value = _a.value, handleChange = _a.handleChange, placeholder = _a.placeholder;
    var _c = (0, react_1.useState)(undefined), date = _c[0], setDate = _c[1];
    var _d = (0, react_1.useState)(false), error = _d[0], setError = _d[1];
    (0, react_1.useEffect)(function () {
        if (value) {
            var parsedDate = (0, moment_1.default)(value);
            if (parsedDate.isValid()) {
                setDate(parsedDate.toDate());
            }
            else {
                setDate(undefined);
                console.error('Invalid date provided:', value);
            }
        }
        else {
            setDate(undefined);
        }
    }, [value]);
    var handleDateSelect = function (selectedDate) {
        setDate(selectedDate);
        handleChange({
            target: {
                name: name,
                value: selectedDate,
            },
        });
    };
    return (react_1.default.createElement("div", { className: (0, frontend_shadcn_3.cn)('flex', direction === 'column'
            ? 'flex-col space-y-2'
            : 'flex-row items-center space-x-2') },
        react_1.default.createElement(components_2.InputLabel, { label: label, info: info }),
        react_1.default.createElement(frontend_shadcn_2.Popover, null,
            react_1.default.createElement(frontend_shadcn_2.PopoverTrigger, { asChild: true },
                react_1.default.createElement(components_1.Button, { variant: "outline", className: (0, frontend_shadcn_3.cn)('min-w-[200px] text-foreground w-full justify-start text-left font-normal', !date && 'text-muted-foreground', error && 'border-red-500') },
                    react_1.default.createElement(lucide_react_1.CalendarIcon, { className: "mr-2 h-4 w-4" }),
                    date ? ((0, moment_1.default)(date).format('MMMM D, YYYY')) : (react_1.default.createElement("span", null, placeholder || 'Pick a date')))),
            react_1.default.createElement(frontend_shadcn_2.PopoverContent, { className: "w-auto p-0" },
                react_1.default.createElement(frontend_shadcn_1.Calendar, { mode: "single", selected: date, onSelect: handleDateSelect }))),
        error && react_1.default.createElement("p", { className: "text-sm text-red-500" }, "This field is required")));
}
exports.default = DateInput;
