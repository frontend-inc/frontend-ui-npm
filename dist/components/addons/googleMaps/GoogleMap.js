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
var react_2 = require("@nextui-org/react");
var NYC_LAT = 40.7128;
var NYC_LNG = -73.935242;
function GoogleMap(props) {
    var darkTheme = props.darkTheme, _a = props.height, height = _a === void 0 ? 300 : _a, width = props.width, _b = props.lat, lat = _b === void 0 ? NYC_LAT : _b, _c = props.lng, lng = _c === void 0 ? NYC_LNG : _c, label = props.label, image = props.image, _d = props.zoom, zoom = _d === void 0 ? 16 : _d, _e = props.enableBorder, enableBorder = _e === void 0 ? false : _e;
    var _f = (0, react_1.useState)(mapConfigs_1.MAP_CONFIGS[0]), mapConfig = _f[0], setMapConfig = _f[1];
    (0, react_1.useEffect)(function () {
        setMapConfig(darkTheme ? mapConfigs_1.MAP_CONFIGS[1] : mapConfigs_1.MAP_CONFIGS[0]);
    }, [darkTheme]);
    var center = {
        lat: lat,
        lng: lng,
    };
    var map = (0, react_google_maps_1.useMap)();
    (0, react_1.useEffect)(function () {
        if (map) {
            map.setCenter(center);
        }
    }, [center, map]);
    return (react_1.default.createElement("div", { className: (0, react_2.cn)('sticky rounded overflow-hidden transition-shadow duration-300 hover:shadow-md', enableBorder && 'border border-divider'), style: {
            height: height,
            width: width || '100%',
        } },
        react_1.default.createElement(react_google_maps_1.Map, { scaleControl: true, fullscreenControl: true, mapTypeControl: false, streetViewControl: false, mapId: mapConfig.mapId || undefined, mapTypeId: mapConfig.mapTypeId, styles: mapConfig.styles, defaultZoom: zoom, defaultCenter: center },
            react_1.default.createElement(GoogleMarker_1.default, { lat: lat, lng: lng, image: image, label: label }))));
}
exports.default = GoogleMap;
