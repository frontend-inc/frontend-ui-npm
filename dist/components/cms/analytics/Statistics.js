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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var material_1 = require("@mui/material");
var hooks_1 = require("../../../hooks");
var Statistic_1 = __importDefault(require("./Statistic"));
var Statistics = function (props) {
    var _a = props || {}, enableBorder = _a.enableBorder, url = _a.url, _b = _a.metaFields, metaFields = _b === void 0 ? [] : _b, direction = _a.direction, _c = _a.query, defaultQuery = _c === void 0 ? {} : _c;
    var _d = (0, hooks_1.useStatistics)({
        url: url,
    }), loading = _d.loading, data = _d.data, fetchData = _d.fetchData;
    (0, react_1.useEffect)(function () {
        if (url && defaultQuery) {
            fetchData(defaultQuery);
        }
    }, [url]);
    return (react_1.default.createElement(material_1.Stack, { direction: {
            sm: 'row',
            xs: 'column',
        }, spacing: 2 }, metaFields === null || metaFields === void 0 ? void 0 : metaFields.map(function (metaField, i) { return (react_1.default.createElement(Statistic_1.default, { key: i, direction: direction, icon: metaField === null || metaField === void 0 ? void 0 : metaField.icon, label: metaField === null || metaField === void 0 ? void 0 : metaField.label, value: (data === null || data === void 0 ? void 0 : data[metaField.value]) || 0, enableBorder: enableBorder })); })));
};
exports.default = Statistics;
