import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { LitElement } from 'lit';
import './sarahs-map.css';
export declare class LocationMap extends LitElement {
    static properties: {
        apiUrl: {
            type: StringConstructor;
        };
        locations: {
            type: ArrayConstructor;
            state: boolean;
        };
    };
    apiUrl: string | null;
    locations: Array<any>;
    map: L.Map | null;
    firstUpdated(): Promise<void>;
    fetchLocations(): Promise<void>;
    initializeMap(): void;
    addMarkers(): void;
    render(): import("lit-html").TemplateResult<1>;
}
//# sourceMappingURL=sarahs-map.d.ts.map