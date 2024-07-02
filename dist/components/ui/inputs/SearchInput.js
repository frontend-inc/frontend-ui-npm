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
var use_debounce_1 = require("use-debounce");
var components_1 = require("../../../components");
var InputBase_1 = __importDefault(require("@mui/material/InputBase"));
var IconButton_1 = __importDefault(require("@mui/material/IconButton"));
var SearchInput = function (props) {
    var _a = props.name, name = _a === void 0 ? 'keywords' : _a, _b = props.fullWidth, fullWidth = _b === void 0 ? false : _b, value = props.value, _c = props.placeholder, placeholder = _c === void 0 ? 'Search...' : _c, handleChange = props.handleChange, handleSearch = props.handleSearch, _d = props.styles, styles = _d === void 0 ? {} : _d;
    var _e = (0, react_1.useState)(value), text = _e[0], setText = _e[1];
    var debouncedValue = (0, use_debounce_1.useDebounce)(text, 500)[0];
    var handleInputChange = function (e) {
        setText(e.target.value);
    };
    (0, react_1.useEffect)(function () {
        if (debouncedValue !== value) {
            handleChange({
                target: {
                    name: name,
                    value: debouncedValue,
                },
            });
        }
    }, [debouncedValue]);
    (0, react_1.useEffect)(function () {
        if (value !== text) {
            setText(value);
        }
    }, [value]);
    return (react_1.default.createElement(material_1.Paper, { component: "form", elevation: 0, sx: __assign(__assign({}, sx.root), (fullWidth && sx.fullWidth)) },
        react_1.default.createElement(InputBase_1.default, { sx: { ml: 2, flex: 1 }, placeholder: placeholder, value: text, onChange: handleInputChange, onKeyDown: function (e) {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    handleSearch(text);
                }
            } }),
        react_1.default.createElement(IconButton_1.default, { onClick: function () { return handleSearch(debouncedValue); }, type: "button", sx: { p: '10px' }, "aria-label": "search" },
            react_1.default.createElement(components_1.Icon, { name: "Search", size: 20, color: 'text.secondary' }))));
};
exports.default = SearchInput;
var sx = {
    root: {
        p: 0,
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        border: '1px solid',
        borderColor: 'divider',
        maxWidth: 400,
        minWidth: {
            sm: 320,
            xs: "100%"
        },
        transition: 'box-shadow 0.3s',
        '&:hover': {
            boxShadow: 1
        }
    },
    fullWidth: {
        width: '100%',
        minWidth: '100%'
    }
};
