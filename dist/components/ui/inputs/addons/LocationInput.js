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
var hooks_1 = require("../../../../hooks");
var __1 = require("../../..");
var use_debounce_1 = require("use-debounce");
var material_1 = require("@mui/material");
var LocationOptionsList_1 = __importDefault(require("./LocationOptionsList"));
var LocationInput = function (props) {
    var _a = props || {}, _b = _a.name, name = _b === void 0 ? 'location' : _b, _c = _a.value, value = _c === void 0 ? '' : _c, label = _a.label, _d = _a.placeholder, placeholder = _d === void 0 ? 'Search location' : _d, handleChange = _a.handleChange, _e = _a.direction, direction = _e === void 0 ? 'column' : _e, _f = _a.height, height = _f === void 0 ? 240 : _f, _g = _a.width, width = _g === void 0 ? 320 : _g, _h = _a.zoom, zoom = _h === void 0 ? 15 : _h, _j = _a.darkTheme, darkTheme = _j === void 0 ? false : _j, _k = _a.enablePosition, enablePosition = _k === void 0 ? false : _k, lat = _a.lat, lng = _a.lng;
    var _l = (0, hooks_1.useGooglePlaces)(), placeOptions = _l.placeOptions, fetchPlaces = _l.fetchPlaces;
    var _m = (0, react_1.useState)(value), keywords = _m[0], setKeywords = _m[1];
    var debouncedText = (0, use_debounce_1.useDebounce)(keywords, 150)[0];
    var handleKeywordChange = function (ev) {
        var value = ev.target.value;
        setKeywords(value);
        if ((placeOptions === null || placeOptions === void 0 ? void 0 : placeOptions.length) > 0)
            setOpen(true);
    };
    var handleClick = function (option) {
        setOpen(false);
        setKeywords(option === null || option === void 0 ? void 0 : option.value);
        handleChange({
            target: {
                name: name,
                value: option === null || option === void 0 ? void 0 : option.value,
            },
        });
    };
    (0, react_1.useEffect)(function () {
        if ((debouncedText === null || debouncedText === void 0 ? void 0 : debouncedText.length) > 0)
            fetchPlaces(debouncedText);
    }, [debouncedText]);
    var _o = (0, react_1.useState)(false), open = _o[0], setOpen = _o[1];
    return (react_1.default.createElement(material_1.Stack, { width: '100%', direction: "column", spacing: 1 },
        enablePosition && lat && lng && (react_1.default.createElement(material_1.Box, { sx: __assign(__assign({}, sx.mapContainer), { height: height, width: width }) },
            react_1.default.createElement(__1.GoogleMap, { enableBorder: true, darkTheme: darkTheme, height: height, width: width, zoom: zoom, resources: [{ lat: lat, lng: lng }] }))),
        react_1.default.createElement(__1.TextInput, { name: name, label: label, value: keywords, options: placeOptions, handleChange: handleKeywordChange, direction: direction, placeholder: placeholder }),
        react_1.default.createElement(LocationOptionsList_1.default, { open: open, options: placeOptions, handleClick: handleClick })));
};
exports.default = LocationInput;
var sx = {
    mapContainer: {
        overflow: 'hidden',
    },
};
