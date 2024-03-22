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
var material_1 = require("@mui/material");
var hooks_1 = require("../../hooks");
var components_1 = require("../../components");
var Autocomplete_1 = __importDefault(require("@mui/material/Autocomplete"));
var image_1 = __importDefault(require("next/image"));
var AutocompleteOption = function (props) {
    var option = props.option;
    return (react_1.default.createElement(material_1.ListItem, __assign({ sx: { mr: 2, flexShrink: 0 } }, props),
        (option === null || option === void 0 ? void 0 : option.icon) && (react_1.default.createElement(material_1.ListItemIcon, { sx: sx.listItemIcon },
            react_1.default.createElement(components_1.Icon, { name: option.icon, size: 20 }))),
        (option === null || option === void 0 ? void 0 : option.image) && (react_1.default.createElement(material_1.ListItemIcon, null,
            react_1.default.createElement(image_1.default, { src: option === null || option === void 0 ? void 0 : option.image, alt: option === null || option === void 0 ? void 0 : option.label, width: 32, height: 32, 
                //@ts-ignore
                style: styles.image }))),
        react_1.default.createElement(material_1.Typography, { variant: "body1" }, option.label)));
};
var AutocompletePaper = function (props) {
    return react_1.default.createElement(material_1.Paper, __assign({}, props, { elevation: 10, sx: sx.paper }));
};
var Autosuggest = function (props) {
    var errors = props.errors, value = props.value, _a = props.direction, direction = _a === void 0 ? 'column' : _a, options = props.options, label = props.label, name = props.name, _b = props.placeholder, placeholder = _b === void 0 ? 'Select' : _b, _c = props.multiselect, multiselect = _c === void 0 ? false : _c, handleChange = props.handleChange, handleInputChange = props.handleInputChange, _d = props.freeSolo, freeSolo = _d === void 0 ? false : _d;
    var _e = (0, react_1.useState)({
        label: '',
        value: null,
    }), selected = _e[0], setSelected = _e[1];
    var _f = (0, hooks_1.useError)({
        errors: errors,
        name: name,
    }), error = _f.error, clearError = _f.clearError;
    var handleOnChange = function (ev, newValue) {
        if (error)
            clearError();
        setSelected(newValue);
        handleChange({
            target: {
                name: name,
                value: newValue === null || newValue === void 0 ? void 0 : newValue.value,
            },
        });
    };
    (0, react_1.useEffect)(function () {
        if (typeof value != 'object') {
            setSelected(options.find(function (o) { return o.value == value; }));
        }
        else {
            setSelected(value);
        }
    }, [value, options]);
    return (react_1.default.createElement(material_1.Stack, { sx: __assign(__assign({}, sx.stack), (direction == 'row' && sx.stackVertical)), direction: direction, spacing: 1 },
        label && (react_1.default.createElement(material_1.Typography, { variant: "caption", color: "text.secondary", sx: sx.label }, label)),
        react_1.default.createElement(Autocomplete_1.default, { freeSolo: freeSolo, multiple: multiselect, disableCloseOnSelect: multiselect, sx: __assign(__assign({}, sx.autocomplete), { paper: sx.paper, option: sx.option, popperDisablePortal: sx.popperDisablePortal }), value: selected, onChange: function (event, newValue) {
                handleOnChange(event, newValue);
            }, onInputChange: function (event, newInputValue) {
                handleInputChange && handleInputChange(newInputValue);
            }, noOptionsText: "No options", clearOnBlur: true, handleHomeEndKeys: true, options: options, 
            //@ts-ignore
            getOptionLabel: function (option) { return (option === null || option === void 0 ? void 0 : option.label) || ''; }, 
            //@ts-ignore
            getOptionSelected: function (option, value) { return (option === null || option === void 0 ? void 0 : option.value) == (value === null || value === void 0 ? void 0 : value.value); }, renderOption: function (props, option) { return (react_1.default.createElement(AutocompleteOption, __assign({}, props, { option: option }))); }, PaperComponent: AutocompletePaper, renderInput: function (params) { return (react_1.default.createElement(material_1.InputBase, { placeholder: placeholder, ref: params.InputProps.ref, inputProps: __assign(__assign({}, params.inputProps), { autoComplete: 'off' }), sx: __assign(__assign({}, sx.inputBase), (error && sx.inputError)) })); } }),
        react_1.default.createElement(components_1.ErrorText, { error: error })));
};
exports.default = Autosuggest;
var sx = {
    autocomplete: {
        width: '100%',
    },
    inputBase: {
        width: '100%',
        '& input': {
            '-webkit-appearance': 'none',
            '-moz-appearance': 'none',
            appearance: 'none',
            p: 1,
            height: 20,
            color: 'text.secondary',
            borderRadius: function (theme) { return "".concat(theme.shape.borderRadius, "px"); },
            fontSize: function (theme) { return theme.typography.body2.fontSize; },
            fontFamily: function (theme) { return theme.typography.body2.fontFamily; },
            bgcolor: 'background.paper',
            border: function (theme) { return "1px solid ".concat(theme.palette.divider); },
            '&:focus': {
                border: function (theme) { return "2px solid ".concat(theme.palette.primary.light); },
            },
        },
    },
    inputError: {
        '& input': {
            border: '2px solid',
            borderColor: 'error.main',
            p: 1,
            height: 20,
            borderRadius: function (theme) { return theme.shape.borderRadius; },
        },
    },
    paper: {
        bgcolor: 'background.paper',
        color: 'text.primary',
        p: 0,
        my: 0,
    },
    popperDisablePortal: {
        position: 'relative',
    },
    listItemIcon: {
        minWidth: '32px',
    },
    label: {
        mb: 0,
        minWidth: '100px',
    },
    icon: {
        marginRight: '10px',
    },
    stack: {
        alignItems: 'flex-start',
    },
    stackVertical: {
        alignItems: 'center',
    },
};
var styles = {
    image: {
        borderRadius: 8,
        objectFit: 'cover',
        marginRight: '0px',
    },
};
