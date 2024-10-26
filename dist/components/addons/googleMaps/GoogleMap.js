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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var react_google_maps_1 = require("@vis.gl/react-google-maps");
var mapConfigs_1 = require("./styles/mapConfigs");
var GoogleMarker_1 = __importDefault(require("./GoogleMarker"));
var frontend_shadcn_1 = require("frontend-shadcn");
function GoogleMap(_a) {
    var _b = _a.darkTheme, darkTheme = _b === void 0 ? false : _b, _c = _a.height, height = _c === void 0 ? 300 : _c, width = _a.width, resources = _a.resources, _d = _a.zoom, zoom = _d === void 0 ? 16 : _d, _e = _a.enableBorder, enableBorder = _e === void 0 ? false : _e, _f = _a.displayFields, displayFields = _f === void 0 ? [] : _f;
    var _g = (0, react_1.useState)(mapConfigs_1.MAP_CONFIGS[0]), mapConfig = _g[0], setMapConfig = _g[1];
    var NYC_LAT = 40.7128;
    var NYC_LNG = -73.935242;
    var _h = (0, react_1.useState)({ lat: NYC_LAT, lng: NYC_LNG }), center = _h[0], setCenter = _h[1];
    (0, react_1.useEffect)(function () {
        setMapConfig(darkTheme ? mapConfigs_1.MAP_CONFIGS[1] : mapConfigs_1.MAP_CONFIGS[0]);
    }, [darkTheme]);
    var _j = (0, react_1.useState)([]), googleMarkers = _j[0], setGoogleMarkers = _j[1];
    var handleSetMarkers = function (resources) {
        var markers = resources === null || resources === void 0 ? void 0 : resources.map(function (res) { return ({
            lat: res === null || res === void 0 ? void 0 : res.lat,
            lng: res === null || res === void 0 ? void 0 : res.lng,
            label: res === null || res === void 0 ? void 0 : res.title,
            resource: res,
        }); });
        setGoogleMarkers((markers === null || markers === void 0 ? void 0 : markers.length) ? markers : []);
    };
    var map = (0, react_google_maps_1.useMap)();
    (0, react_1.useEffect)(function () {
        if (map) {
            map.setCenter(center);
        }
    }, [center, map]);
    (0, react_1.useEffect)(function () {
        var _a, _b;
        if ((googleMarkers === null || googleMarkers === void 0 ? void 0 : googleMarkers.length) > 0) {
            setCenter({
                lat: (_a = googleMarkers[0]) === null || _a === void 0 ? void 0 : _a.lat,
                lng: (_b = googleMarkers[0]) === null || _b === void 0 ? void 0 : _b.lng,
            });
        }
    }, [googleMarkers]);
    (0, react_1.useEffect)(function () {
        if (resources) {
            handleSetMarkers(resources);
        }
    }, [resources]);
    if ((googleMarkers === null || googleMarkers === void 0 ? void 0 : googleMarkers.length) <= 0)
        return null;
    return (react_1.default.createElement("div", { className: (0, frontend_shadcn_1.cn)('sticky rounded overflow-hidden transition-shadow duration-300 hover:shadow-md', enableBorder && 'border border-divider'), style: {
            height: height,
            width: width || '100%',
        } },
        react_1.default.createElement(react_google_maps_1.Map, { scaleControl: true, fullscreenControl: true, mapTypeControl: false, streetViewControl: false, mapId: mapConfig.mapId || undefined, mapTypeId: mapConfig.mapTypeId, styles: mapConfig.styles, defaultZoom: zoom, defaultCenter: center }, googleMarkers.map(function (marker, index) { return (react_1.default.createElement(GoogleMarker_1.default, { key: index, marker: marker, displayFields: displayFields })); }))));
}
exports.default = GoogleMap;
