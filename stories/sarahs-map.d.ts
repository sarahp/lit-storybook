import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { LitElement } from 'lit';
declare class LocationMap extends LitElement {
    static properties: {
        apiUrl: {
            type: StringConstructor;
        };
        locations: {
            type: ArrayConstructor;
            state: boolean;
        };
    };
    static styles: import("lit").CSSResult;
    apiUrl: string | null;
    locations: Array<any>;
    map: L.Map | null;
    firstUpdated(): Promise<void>;
    fetchLocations(): Promise<void>;
    initializeMap(): void;
    addMarkers(): void;
    disconnectedCallback(): void;
    render(): import("lit-html").TemplateResult<1>;
}
export default LocationMap;
//# sourceMappingURL=sarahs-map.d.ts.map