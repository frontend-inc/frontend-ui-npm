"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var __1 = require("../..");
var AddonGoogleMap = function (props) {
    var _a = props || {}, resource = _a.resource, _b = _a.zoom, zoom = _b === void 0 ? 16 : _b, _c = _a.darkTheme, darkTheme = _c === void 0 ? false : _c, _d = _a.displayFields, displayFields = _d === void 0 ? [] : _d;
    return (react_1.default.createElement(__1.GoogleMap, { darkTheme: darkTheme, zoom: zoom, resources: [resource], displayFields: displayFields }));
};
exports.default = AddonGoogleMap;
