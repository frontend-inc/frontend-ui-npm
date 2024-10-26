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
var core_1 = require("../../core");
var react_google_maps_1 = require("@vis.gl/react-google-maps");
var components_1 = require("../../../components");
// https://visgl.github.io/react-google-maps/docs/api-reference/components/map
// https://visgl.github.io/react-google-maps/docs/api-reference/components/advanced-marker
var GoogleMarker = function (props) {
    var _a, _b;
    var marker = props.marker, displayFields = props.displayFields;
    var NYC_LAT = 40.7128;
    var NYC_LNG = -74.006;
    var position = {
        lat: (marker === null || marker === void 0 ? void 0 : marker.lat) || NYC_LAT,
        lng: (marker === null || marker === void 0 ? void 0 : marker.lng) || NYC_LNG,
    };
    var _c = (0, react_google_maps_1.useAdvancedMarkerRef)(), markerRef = _c[0], setMarkerRef = _c[1];
    var _d = (0, react_1.useState)(false), infoWindowShown = _d[0], setInfoWindowShown = _d[1];
    var handleMarkerClick = function (ev) {
        setInfoWindowShown(!infoWindowShown);
    };
    var handleClose = function () {
        setInfoWindowShown(false);
    };
    var resource = (marker || {}).resource;
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(react_google_maps_1.AdvancedMarker, { ref: markerRef, position: position, onClick: handleMarkerClick },
            react_1.default.createElement(react_google_maps_1.Pin, null)),
        infoWindowShown && (react_1.default.createElement(react_google_maps_1.InfoWindow, { anchor: setMarkerRef, onClose: handleClose },
            react_1.default.createElement("div", { className: "flex flex-col space-y-2 min-w-[160px]" },
                ((_a = resource === null || resource === void 0 ? void 0 : resource.image) === null || _a === void 0 ? void 0 : _a.url) && (react_1.default.createElement("div", { className: "w-[64px] h-[64px]" },
                    react_1.default.createElement(components_1.Image, { alt: resource === null || resource === void 0 ? void 0 : resource.title, aspectRatio: 1.0, src: (_b = resource === null || resource === void 0 ? void 0 : resource.image) === null || _b === void 0 ? void 0 : _b.url }))),
                react_1.default.createElement(core_1.Typography, { variant: "subtitle2", className: "text-gray-900" }, marker === null || marker === void 0 ? void 0 : marker.label),
                react_1.default.createElement(components_1.DisplayFields, { fields: displayFields, resource: resource }))))));
};
exports.default = GoogleMarker;
