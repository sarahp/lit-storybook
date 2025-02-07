import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { LitElement, html } from 'lit';
import './sarahs-map.css';
export class LocationMap extends LitElement {
    constructor() {
        super(...arguments);
        this.apiUrl = null;
        this.locations = [];
        this.map = null;
    }
    async firstUpdated() {
        if (this.apiUrl) {
            await this.fetchLocations();
        }
        this.initializeMap();
    }
    async fetchLocations() {
        try {
            const response = await fetch(this.apiUrl);
            if (!response.ok)
                throw new Error('Failed to fetch location data');
            const data = await response.json();
            this.locations = data;
            this.addMarkers();
        }
        catch (error) {
            console.error('Error fetching location data:', error);
        }
    }
    initializeMap() {
        const mapElement = this.renderRoot.querySelector('#map');
        if (mapElement) {
            this.map = L.map(mapElement).setView([39.9526, -75.1652], 12);
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; OpenStreetMap contributors',
            }).addTo(this.map);
        }
        else {
            console.error('Map element not found');
        }
    }
    addMarkers() {
        this.locations.forEach(({ lat, lon, title }) => {
            if (lat && lon && this.map) {
                L.marker([lat, lon]).addTo(this.map).bindPopup(`<b>${title}</b>`);
            }
        });
    }
    render() {
        return html `<div id="map"></div>`;
    }
}
LocationMap.properties = {
    apiUrl: { type: String },
    locations: { type: Array, state: true },
};
customElements.define('location-map', LocationMap);
//# sourceMappingURL=sarahs-map.js.map