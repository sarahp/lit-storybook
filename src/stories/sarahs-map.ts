import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('location-map')
class LocationMap extends LitElement {
  static override properties = {
    apiUrl: { type: String },
    locations: { type: Array, state: true },
  };

  // Define styles - this is crucial for the map to display properly
  static override styles = css`
    :host {
      display: block;
      height: 100%;
      min-height: 400px;
    }
    #map {
      height: 100%;
      width: 100%;
      z-index: 0;
    }
    /* Required Leaflet styles that need to pierce shadow DOM */
    ::slotted(.leaflet-pane),
    ::slotted(.leaflet-top),
    ::slotted(.leaflet-bottom) {
      z-index: 0 !important;
    }
  `;

  apiUrl: string | null = null;
  locations: Array<any> = [];
  map: L.Map | null = null;

  override async firstUpdated() {
    // Wait for the shadow DOM to be ready
    await this.updateComplete;
    
    if (this.apiUrl) {
      await this.fetchLocations();
    }
    this.initializeMap();
  }

  async fetchLocations() {
    try {
      const response = await fetch(this.apiUrl as string);
      if (!response.ok) throw new Error('Failed to fetch location data');
      const data = await response.json();
      this.locations = data;
      this.addMarkers();
    } catch (error) {
      console.error('Error fetching location data:', error);
    }
  }

  initializeMap() {
    // Create a wrapper div outside shadow DOM for Leaflet
    const mapContainer = document.createElement('div');
    mapContainer.style.height = '100%';
    mapContainer.style.width = '100%';
    
    const mapElement = this.renderRoot.querySelector('#map') as HTMLElement;
    if (mapElement) {
      mapElement.appendChild(mapContainer);
      
      // Initialize the map on the container
      this.map = L.map(mapContainer).setView([39.9526, -75.1652], 12);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors',
        maxZoom: 19
      }).addTo(this.map);

      // Force a resize after initialization
      setTimeout(() => {
        this.map?.invalidateSize();
      }, 0);
    } else {
      console.error('Map element not found');
    }
  }

  addMarkers() {
    if (!this.map) return;
    
    this.locations.forEach(({ lat, lon, title }) => {
      if (lat && lon) {
        L.marker([lat, lon])
          .addTo(this.map!)
          .bindPopup(`<b>${title}</b>`);
      }
    });
  }

  // Cleanup when the element is removed
  override disconnectedCallback() {
    super.disconnectedCallback();
    if (this.map) {
      this.map.remove();
      this.map = null;
    }
  }

  override render() {
    return html`<div id="map"></div>`;
  }
}

export default LocationMap;