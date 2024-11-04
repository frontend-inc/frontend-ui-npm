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
var hooks_1 = require("../../../../hooks");
var __1 = require("../../..");
var use_debounce_1 = require("use-debounce");
var frontend_shadcn_1 = require("frontend-shadcn");
var use_click_outside_1 = require("@raddix/use-click-outside");
function LocationInput(_a) {
    var _b = _a.name, name = _b === void 0 ? 'location' : _b, _c = _a.value, value = _c === void 0 ? '' : _c, label = _a.label, _d = _a.placeholder, placeholder = _d === void 0 ? 'Search location' : _d, handleChange = _a.handleChange, _e = _a.direction, direction = _e === void 0 ? 'column' : _e, _f = _a.height, height = _f === void 0 ? 240 : _f, _g = _a.width, width = _g === void 0 ? 320 : _g, _h = _a.zoom, zoom = _h === void 0 ? 15 : _h, _j = _a.darkTheme, darkTheme = _j === void 0 ? false : _j, _k = _a.enablePosition, enablePosition = _k === void 0 ? false : _k, lat = _a.lat, lng = _a.lng;
    var _l = (0, hooks_1.useGooglePlaces)(), placeOptions = _l.placeOptions, fetchPlaces = _l.fetchPlaces;
    var _m = (0, react_1.useState)(value), keywords = _m[0], setKeywords = _m[1];
    var debouncedText = (0, use_debounce_1.useDebounce)(keywords, 150)[0];
    var _o = (0, react_1.useState)(false), open = _o[0], setOpen = _o[1];
    var wrapperRef = (0, react_1.useRef)(null);
    var handleKeywordChange = function (ev) {
        var value = ev.target.value;
        setKeywords(value);
        if (value.length > 0)
            setOpen(true);
        else
            setOpen(false);
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
        else
            setOpen(false);
    }, [debouncedText]);
    (0, use_click_outside_1.useClickOutside)(wrapperRef, function () { return setOpen(false); });
    return (react_1.default.createElement("div", { className: (0, frontend_shadcn_1.cn)('w-full', direction === 'column' ? 'space-y-4' : 'space-x-4 flex') },
        enablePosition && lat && lng && (react_1.default.createElement("div", { className: "overflow-hidden", style: { height: height, width: width } },
            react_1.default.createElement(__1.GoogleMaps, { enableBorder: true, darkTheme: darkTheme, height: height, width: width, zoom: zoom, resources: [{ lat: lat, lng: lng }] }))),
        react_1.default.createElement("div", { className: "flex-grow relative", ref: wrapperRef },
            react_1.default.createElement(__1.TextInput, { name: name, label: label, value: keywords, handleChange: handleKeywordChange, direction: direction, placeholder: placeholder }),
            open && (react_1.default.createElement("div", { className: "absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg" }, placeOptions.length > 0 ? (react_1.default.createElement("ul", { className: "max-h-[300px] overflow-auto" }, placeOptions.map(function (option, index) { return (react_1.default.createElement("li", { key: index, className: "px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center", onClick: function () { return handleClick(option); } },
                react_1.default.createElement(__1.Icon, { name: "map-pin", className: "mr-2 h-4 w-4" }),
                react_1.default.createElement("span", null, option.value))); }))) : (react_1.default.createElement("p", { className: "p-4 text-sm text-gray-500" }, "No results found")))))));
}
exports.default = LocationInput;
