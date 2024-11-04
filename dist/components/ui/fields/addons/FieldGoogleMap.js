'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var __1 = require("../../../");
var FieldGoogleMap = function (props) {
    var _a = props || {}, value = _a.value, lat = _a.lat, lng = _a.lng, label = _a.label, image = _a.image, _b = _a.zoom, zoom = _b === void 0 ? 16 : _b;
    return (react_1.default.createElement("div", { className: "flex flex-col space-y-3 w-full" },
        react_1.default.createElement(__1.GoogleMap, { zoom: zoom, lat: lat, lng: lng, label: label, image: image }),
        react_1.default.createElement("div", { className: "text-sm text-foreground" }, value)));
};
exports.default = FieldGoogleMap;
