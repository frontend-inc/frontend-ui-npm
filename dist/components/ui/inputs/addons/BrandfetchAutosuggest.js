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
var __1 = require("../../..");
var hooks_1 = require("../../../../hooks");
var BrandfetchAutosuggest = function (props) {
    var value = props.value, label = props.label, _a = props.direction, direction = _a === void 0 ? 'column' : _a, placeholder = props.placeholder, _b = props.name, name = _b === void 0 ? 'domain' : _b, handleChange = props.handleChange;
    var _c = (0, hooks_1.useBrandfetch)(), loading = _c.loading, brands = _c.brands, fetchBrands = _c.fetchBrands;
    var _d = (0, react_1.useState)([]), options = _d[0], setOptions = _d[1];
    var handleInputChange = function (newValue) {
        fetchBrands(newValue);
    };
    (0, react_1.useEffect)(function () {
        if (brands) {
            setOptions(brands === null || brands === void 0 ? void 0 : brands.map(function (brand) { return ({
                label: brand.domain,
                value: brand.domain,
                image: brand.icon,
            }); }));
        }
    }, [brands]);
    var handleAutocompleteChange = function (e) {
        handleChange({
            target: {
                name: name,
                value: e.target.value,
            },
        });
    };
    return (react_1.default.createElement("div", { className: "w-full max-w-[380px]" },
        react_1.default.createElement(__1.AutocompleteInput, { name: name, label: label, value: value, options: options, handleChange: handleAutocompleteChange, handleInputChange: handleInputChange, direction: direction, placeholder: placeholder })));
};
exports.default = BrandfetchAutosuggest;
