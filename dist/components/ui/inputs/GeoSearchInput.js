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
var __1 = require("../..");
var InputBase_1 = __importDefault(require("@mui/material/InputBase"));
var Divider_1 = __importDefault(require("@mui/material/Divider"));
var IconButton_1 = __importDefault(require("@mui/material/IconButton"));
var hooks_1 = require("../../../hooks");
var LocationOptionsList_1 = __importDefault(require("./addons/LocationOptionsList"));
var GeoSearchInput = function (props) {
    var _a = props.name, name = _a === void 0 ? 'keywords' : _a, _b = props.fullWidth, fullWidth = _b === void 0 ? false : _b, value = props.value, _c = props.location, location = _c === void 0 ? '' : _c, _d = props.placeholder, placeholder = _d === void 0 ? 'Search...' : _d, handleChange = props.handleChange, handleLocationChange = props.handleLocationChange, handleSearch = props.handleSearch;
    var _e = (0, hooks_1.useGooglePlaces)(), loading = _e.loading, placeOptions = _e.placeOptions, fetchPlaces = _e.fetchPlaces;
    var _f = (0, react_1.useState)(false), open = _f[0], setOpen = _f[1];
    var _g = (0, react_1.useState)(value), text = _g[0], setText = _g[1];
    var debouncedText = (0, use_debounce_1.useDebounce)(text, 500)[0];
    var handleInputChange = function (e) {
        setText(e.target.value);
    };
    var _h = (0, react_1.useState)(location), locationText = _h[0], setLocationText = _h[1];
    var debouncedLocationText = (0, use_debounce_1.useDebounce)(locationText, 150)[0];
    var handleLocationInputChange = function (e) {
        var value = e.target.value;
        setLocationText(value);
        if (value.length == 0) {
            setOpen(false);
            return;
        }
        if ((placeOptions === null || placeOptions === void 0 ? void 0 : placeOptions.length) > 0) {
            setOpen(true);
        }
    };
    var handleClick = function (option) {
        setOpen(false);
        setLocationText(option === null || option === void 0 ? void 0 : option.value);
    };
    (0, react_1.useEffect)(function () {
        if (debouncedText !== value) {
            handleChange({
                target: {
                    name: name,
                    value: debouncedText,
                },
            });
        }
    }, [debouncedText]);
    (0, react_1.useEffect)(function () {
        if (debouncedLocationText !== location) {
            fetchPlaces(debouncedLocationText);
            handleLocationChange({
                target: {
                    name: name,
                    value: debouncedLocationText,
                },
            });
        }
    }, [debouncedLocationText]);
    (0, react_1.useEffect)(function () {
        if (value !== text) {
            setText(value);
        }
    }, [value]);
    return (react_1.default.createElement(material_1.Box, null,
        react_1.default.createElement(material_1.Paper, { component: "form", elevation: 0, sx: __assign(__assign({}, sx.root), (fullWidth && sx.fullWidth)) },
            react_1.default.createElement(InputBase_1.default, { sx: sx.inputBase, placeholder: placeholder, value: text, onChange: handleInputChange, onKeyDown: function (e) {
                    if (e.key === 'Enter') {
                        e.preventDefault();
                        handleSearch(text, locationText);
                    }
                } }),
            react_1.default.createElement(Divider_1.default, { sx: sx.divider, orientation: "vertical" }),
            react_1.default.createElement(InputBase_1.default, { sx: sx.inputBase, placeholder: 'Location...', value: locationText, onChange: handleLocationInputChange, onKeyDown: function (e) {
                    if (e.key === 'Enter') {
                        e.preventDefault();
                        handleSearch(text, locationText);
                    }
                } }),
            react_1.default.createElement(Divider_1.default, { sx: sx.divider, orientation: "vertical" }),
            react_1.default.createElement(IconButton_1.default, { onClick: function () { return handleSearch(text, locationText); }, type: "button", sx: sx.iconButton, "aria-label": "search" },
                react_1.default.createElement(__1.Icon, { name: "Search", size: 20, color: 'text.secondary' }))),
        react_1.default.createElement(LocationOptionsList_1.default, { open: open, options: placeOptions, handleClick: handleClick })));
};
exports.default = GeoSearchInput;
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
    inputBase: {
        ml: 2,
        flex: 1
    },
    divider: {
        height: 28,
        my: 0.5
    },
    iconButton: {
        p: '10px'
    },
    fullWidth: {
        width: '100%',
        minWidth: '100%'
    },
    locationContainer: {
        position: 'relative',
        width: "100%"
    }
};
