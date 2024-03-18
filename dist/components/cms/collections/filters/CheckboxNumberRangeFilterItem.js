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
var material_1 = require("@mui/material");
var frontend_shopify_1 = require("frontend-shopify");
var CheckboxNumberRangeFilterItem = function (props) {
    var _a = props.values, values = _a === void 0 ? [] : _a, option = props.option, _b = props.enableCurrency, enableCurrency = _b === void 0 ? false : _b, handleClick = props.handleClick;
    var _c = (0, react_1.useState)(false), checked = _c[0], setChecked = _c[1];
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
    return (react_1.default.createElement(material_1.ListItem, { disableGutters: true, disablePadding: true },
        react_1.default.createElement(material_1.ListItemButton, { sx: sx.listItemButton, onClick: handleClick },
            react_1.default.createElement(material_1.ListItemIcon, null,
                react_1.default.createElement(material_1.Checkbox, { checked: checked, color: "primary" })),
            react_1.default.createElement(material_1.ListItemText, { primary: enableCurrency ?
                    react_1.default.createElement(material_1.Typography, { color: 'text.primary', variant: "button" },
                        (0, frontend_shopify_1.formatCurrency)(option === null || option === void 0 ? void 0 : option.min, 0),
                        " - ",
                        (0, frontend_shopify_1.formatCurrency)(option === null || option === void 0 ? void 0 : option.max, 0)) :
                    react_1.default.createElement(material_1.Typography, { color: 'text.primary', variant: "button" }, option === null || option === void 0 ? void 0 :
                        option.min,
                        " - ", option === null || option === void 0 ? void 0 :
                        option.max) }))));
};
exports.default = CheckboxNumberRangeFilterItem;
var sx = {
    listItemButton: {
        p: 0,
    },
};
