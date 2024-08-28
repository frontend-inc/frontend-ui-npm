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
var __1 = require("../..");
var ButtonTabs = function (props) {
    var _a = props.disablePadding, disablePadding = _a === void 0 ? false : _a, _b = props.disableBorder, disableBorder = _b === void 0 ? false : _b, handleChange = props.handleChange, options = props.options, value = props.value, _c = props.iconPosition, iconPosition = _c === void 0 ? 'start' : _c, _d = props.variant, variant = _d === void 0 ? 'fullWidth' : _d, _e = props.size, size = _e === void 0 ? 'large' : _e;
    var handleInputChange = function (ev, value) {
        handleChange(value);
    };
    return (react_1.default.createElement(material_1.Tabs, { variant: variant, sx: __assign(__assign(__assign({}, sx.root), (!disableBorder && sx.rootBorder)), { p: disablePadding ? 0 : '3px', '& .MuiTab-root': {
                height: size == 'small' ? 34 : 36,
                minWidth: size == 'small' ? 44 : 64,
            } }), value: value, onChange: handleInputChange, indicatorColor: "primary", textColor: "inherit" }, options.map(function (tab, i) { return (react_1.default.createElement(material_1.Tab, { key: i, disableRipple: true, iconPosition: iconPosition, onClick: 
        //@ts-ignore
        function () { return handleChange(tab.value); }, label: tab.label, value: tab.value, icon: tab.icon && react_1.default.createElement(__1.Icon, { color: "text.secondary", name: tab.icon }) })); })));
};
exports.default = ButtonTabs;
var sx = {
    root: {
        minHeight: 34,
        borderRadius: 1.5,
        bgcolor: 'background.paper',
        '& svg': {
            mx: 0.5,
        },
        '& .MuiTabs-indicator': {
            height: '100%',
            width: '100px',
            borderRadius: 1,
            borderRight: '1px solid',
            borderBottom: '1px solid',
            borderColor: 'background.default',
            bgcolor: 'secondary.light',
            zIndex: 0,
        },
        '& .MuiButtonBase-root': {
            minHeight: 34,
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
            minHeight: 34,
            borderRadius: 1,
            color: 'text.secondary',
            '&.Mui-selected': {
                borderRadius: 1,
                color: 'common.white',
            },
        },
    },
    rootBorder: {
        border: '1px solid',
        borderColor: 'divider',
    },
};
