"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var components_1 = require("../../../components");
var ButtonGroup = function (props) {
    var _a = props.disablePadding, disablePadding = _a === void 0 ? false : _a, handleChange = props.handleChange, tabs = props.tabs, value = props.value;
    var handleInputChange = function (ev, newValue) {
        handleChange(newValue);
    };
    return (react_1.default.createElement(material_1.Tabs, { variant: "fullWidth", sx: __assign(__assign({}, sx.root), { p: disablePadding ? 0 : '5px' }), value: value, onChange: handleInputChange, indicatorColor: "primary", textColor: "primary" }, tabs.map(function (tab, i) { return (react_1.default.createElement(material_1.Tab, { key: i, disableRipple: true, iconPosition: 'start', label: tab.label, value: tab.value, icon: tab.icon && react_1.default.createElement(components_1.Icon, { size: 20, name: tab.icon }) })); })));
};
exports.default = ButtonGroup;
var sx = {
    root: {
        minHeight: 36,
        borderRadius: 1,
        bgcolor: 'secondary.dark',
        '& svg': {
            mx: 0.5
        },
        '& .MuiTabs-indicator': {
            height: 34,
            borderRadius: 1,
            bgcolor: 'secondary.light',
            zIndex: 0,
        },
        '& .MuiButtonBase-root': {
            height: 34,
            minWidth: 44,
            px: 1,
            zIndex: 1,
            color: 'common.white',
        },
        '& .MuiTabs-root': {
            minHeight: 34,
            height: 34,
        },
        '& .MuiTab-root': {
            minHeight: 36,
            height: 36,
            borderRadius: 1,
            '&.Mui-selected': {
                borderRadius: 1,
            },
        },
    },
};
