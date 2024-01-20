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
var shopify_1 = require("../../../../components/shopify");
var webstudio_shopify_1 = require("webstudio-shopify");
var SizeFilters = function (props) {
    var filters = props.filters, options = props.options, handleClick = props.handleClick;
    var _a = (0, react_1.useState)([]), values = _a[0], setValues = _a[1];
    (0, react_1.useEffect)(function () {
        if (filters) {
            setValues((0, webstudio_shopify_1.findSizeFilters)(filters));
        }
    }, [filters]);
    return (react_1.default.createElement(shopify_1.CheckboxFilterList, { options: options, values: values, handleClick: handleClick }));
};
exports.default = SizeFilters;
