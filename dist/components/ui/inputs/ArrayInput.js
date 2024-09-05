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
exports.sx = void 0;
var react_1 = __importDefault(require("react"));
var hooks_1 = require("../../../hooks");
var material_1 = require("@mui/material");
var components_1 = require("../../../components");
var lucide_react_1 = require("lucide-react");
var CustomPopper = function (props) {
    return react_1.default.createElement(material_1.Popper, __assign({}, props, { sx: exports.sx.popper, placement: "bottom" }));
};
var ArrayInput = function (props) {
    var errors = props.errors, label = props.label, name = props.name, options = props.options, placeholder = props.placeholder, handleChange = props.handleChange, _a = props.direction, direction = _a === void 0 ? 'column' : _a, _b = props.freeSolo, freeSolo = _b === void 0 ? true : _b, info = props.info, value = props.value;
    var _c = (0, hooks_1.useError)({
        errors: errors,
        name: name,
    }), error = _c.error, clearError = _c.clearError;
    var handleInputChange = function (ev, values) {
        if (error)
            clearError();
        var newValues = values.filter(function (value) { return value != null; });
        handleChange({
            target: {
                name: name,
                value: newValues,
            },
        });
    };
    if (!Array.isArray(value))
        return null;
    return (react_1.default.createElement(material_1.Stack, { sx: exports.sx.root, direction: direction, spacing: 0 },
        react_1.default.createElement(components_1.InputLabel, { label: label, info: info }),
        react_1.default.createElement(material_1.Autocomplete, { multiple: true, freeSolo: freeSolo, value: value, onChange: handleInputChange, options: options || [], getOptionLabel: function (option) { return option; }, PopperComponent: CustomPopper, clearIcon: react_1.default.createElement(lucide_react_1.X, null), renderTags: function (tagValue, getTagProps) {
                return Array.isArray(tagValue) &&
                    tagValue.map(function (option, index) { return (react_1.default.createElement(material_1.Chip, __assign({ sx: exports.sx.chip, label: option, color: "secondary", deleteIcon: react_1.default.createElement(lucide_react_1.X, null) }, getTagProps({ index: index })))); });
            }, renderInput: function (params) { return (react_1.default.createElement(material_1.TextField, __assign({}, params, { color: "primary", sx: __assign(__assign({}, exports.sx.textField), ((error && exports.sx.inputError) || {})), placeholder: placeholder, margin: "dense", variant: "outlined" }))); } }),
        react_1.default.createElement(components_1.ErrorText, { error: error })));
};
exports.default = ArrayInput;
exports.sx = {
    root: {
        width: '100%',
    },
    textField: {
        my: 0,
        '& .MuiOutlinedInput-root': {
            minWidth: '230px',
            p: '4px',
            color: 'text.secondary',
            fontSize: function (theme) { return theme.typography.body2.fontSize; },
            fontFamily: function (theme) { return theme.typography.body2.fontFamily; },
            borderRadius: 1,
            bgcolor: 'background.paper',
            border: function (theme) { return "1px solid ".concat(theme.palette.divider); },
            //boxShadow: `rgb(0 0 0 / 5%) 0px 2px 4px !important`,
            width: '100%',
            '& fieldset': {
                border: "1px solid transparent",
            },
            '&:hover fieldset': {
                border: "1px solid transparent",
            },
            '&.Mui-focused fieldset': {
                border: function (theme) { return "0px solid ".concat(theme.palette.primary.light); },
            },
        },
        root: {
            width: '100%',
            height: 26,
        },
    },
    inputError: {
        '& .MuiOutlinedInput-root': {
            border: '2px solid',
            borderColor: 'error.main',
        },
    },
    icon: {
        height: 20,
        width: 20,
        color: 'text.primary',
    },
    popper: {
        fontWeight: function (theme) { return theme.typography.body2.fontWeight; },
        fontFamily: function (theme) { return theme.typography.body2.fontFamily; },
    },
    chip: {
        borderRadius: '4px',
    },
    label: {
        width: '100px',
        minWidth: '100px',
    },
};
