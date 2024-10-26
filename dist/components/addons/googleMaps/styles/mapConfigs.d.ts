/// <reference types="google.maps" />
export type MapConfig = {
    id: string;
    label: string;
    mapId?: string;
    mapTypeId?: string;
    styles?: google.maps.MapTypeStyle[];
};
export declare const MAP_CONFIGS: MapConfig[];
