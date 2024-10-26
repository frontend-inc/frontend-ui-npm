"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MAP_CONFIGS = void 0;
var vitamen_c_1 = __importDefault(require("./vitamen-c"));
var bright_colors_1 = __importDefault(require("./bright-colors"));
var MapTypeId = {
    HYBRID: 'hybrid',
    ROADMAP: 'roadmap',
    SATELLITE: 'satellite',
    TERRAIN: 'terrain',
};
exports.MAP_CONFIGS = [
    {
        id: 'light',
        label: 'Light',
        mapId: '49ae42fed52588c3',
        mapTypeId: MapTypeId.ROADMAP,
    },
    {
        id: 'dark',
        label: 'Dark',
        mapId: '739af084373f96fe',
        mapTypeId: MapTypeId.ROADMAP,
    },
    {
        id: 'styled1',
        label: 'Raster / "Bright Colors" (no mapId)',
        mapTypeId: MapTypeId.ROADMAP,
        styles: bright_colors_1.default,
    },
    {
        id: 'styled2',
        label: 'Raster / "Vitamin C" (no mapId)',
        mapTypeId: MapTypeId.ROADMAP,
        styles: vitamen_c_1.default,
    },
];
