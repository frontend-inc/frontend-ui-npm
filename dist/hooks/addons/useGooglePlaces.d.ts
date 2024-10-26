type GooglePredictionType = {
    description: string;
    place_id: string;
};
type GooglePlaceType = {
    formatted_address: string;
    geometry: {
        location: {
            lat: number;
            lng: number;
        };
    };
    name: string;
    place_id: string;
};
declare const useGooglePlaces: () => {
    loading: boolean;
    error: any;
    place: GooglePlaceType;
    places: [] | GooglePredictionType[];
    placeOptions: any[];
    fetchPlace: (placeId: any) => Promise<any>;
    fetchPlaces: (keywords: any) => Promise<any>;
};
export default useGooglePlaces;
