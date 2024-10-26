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
var use_debounce_1 = require("use-debounce");
var __1 = require("../..");
var hooks_1 = require("../../../hooks");
var frontend_shadcn_1 = require("frontend-shadcn");
var components_1 = require("../../../components");
var frontend_shadcn_2 = require("frontend-shadcn");
function GeoSearchInput(_a) {
    var _b = _a.name, name = _b === void 0 ? 'keywords' : _b, _c = _a.fullWidth, fullWidth = _c === void 0 ? false : _c, value = _a.value, _d = _a.location, location = _d === void 0 ? '' : _d, _e = _a.placeholder, placeholder = _e === void 0 ? 'Search...' : _e, handleChange = _a.handleChange, handleLocationChange = _a.handleLocationChange, handleSearch = _a.handleSearch, className = _a.className;
    var _f = (0, hooks_1.useGooglePlaces)(), loading = _f.loading, placeOptions = _f.placeOptions, fetchPlaces = _f.fetchPlaces;
    var _g = (0, react_1.useState)(false), open = _g[0], setOpen = _g[1];
    var _h = (0, react_1.useState)(value), text = _h[0], setText = _h[1];
    var debouncedText = (0, use_debounce_1.useDebounce)(text, 500)[0];
    var handleInputChange = function (e) {
        setText(e.target.value);
    };
    var _j = (0, react_1.useState)(location), locationText = _j[0], setLocationText = _j[1];
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
    return (react_1.default.createElement("div", { className: (0, frontend_shadcn_2.cn)('flex items-center border border-input rounded-md overflow-hidden transition-shadow hover:shadow-md', fullWidth ? 'w-full' : 'max-w-md min-w-[320px]', className) },
        react_1.default.createElement(frontend_shadcn_1.Input, { className: "flex-1 border-none focus:ring-0 focus:ring-offset-0", placeholder: placeholder, value: text, onChange: handleInputChange, onKeyDown: function (e) {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    handleSearch(text, locationText);
                }
            } }),
        react_1.default.createElement("div", { className: "w-px h-7 bg-input mx-2" }),
        react_1.default.createElement(frontend_shadcn_1.Input, { className: "flex-1 border-none focus:ring-0 focus:ring-offset-0", placeholder: "Location...", value: locationText, onChange: handleLocationInputChange, onKeyDown: function (e) {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    handleSearch(text, locationText);
                }
            } }),
        react_1.default.createElement(components_1.Button, { onClick: function () { return handleSearch(text, locationText); }, type: "button", variant: "ghost", size: "icon", className: "mr-1" },
            react_1.default.createElement(__1.Icon, { name: "Search", className: "h-4 w-4 text-muted-foreground" }))));
}
exports.default = GeoSearchInput;
