import { Company } from "./Company";
import { User } from "./User";

export interface Mappable {
  location: {
    lat: number;
    lng: number;
  },
  markerContent(): string;
}

export class Map {
  private _map: google.maps.Map;

  constructor(divId: string) {
    this._map = new google.maps.Map(document.getElementById(divId)!, {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0,
      }
    });
  }

  addMarker(params: Mappable) {
    const marker = new google.maps.Marker({ map: this._map, position: params.location });
    const infoWindow = new google.maps.InfoWindow({ content: params.markerContent() });

    marker.addListener('click', () => {
      infoWindow.open(this._map, marker);
    })
  }
}