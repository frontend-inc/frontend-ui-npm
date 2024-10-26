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
var core_1 = require("../../core");
var frontend_shadcn_1 = require("frontend-shadcn");
var CheckboxNumberRangeFilterItem = function (props) {
    var _a = props.values, values = _a === void 0 ? [] : _a, option = props.option, handleClick = props.handleClick;
    var _b = (0, react_1.useState)(false), checked = _b[0], setChecked = _b[1];
    // Compare an array of min / max values to see if they are equal
    // to the option min / max pair
    var compareValues = function (values, option) {
        var isEqual = false;
        values.forEach(function (value) {
            if (value.sort().join(',') === option.sort().join(',')) {
                isEqual = true;
            }
        });
        return isEqual;
    };
    (0, react_1.useEffect)(function () {
        if (!option)
            return;
        if (compareValues(values, [option.min, option.max])) {
            setChecked(true);
        }
        else {
            setChecked(false);
        }
    }, [values, option]);
    return (react_1.default.createElement("li", { className: "list-none" },
        react_1.default.createElement("button", { className: "flex items-center w-full px-0 py-2 hover:bg-accent hover:text-accent-foreground", onClick: handleClick },
            react_1.default.createElement("div", { className: "mr-2" },
                react_1.default.createElement(frontend_shadcn_1.Checkbox, { checked: checked, onCheckedChange: handleClick })),
            react_1.default.createElement(core_1.Typography, { variant: "button" }, option.label))));
};
exports.default = CheckboxNumberRangeFilterItem;
