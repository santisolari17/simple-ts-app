import { faker } from "@faker-js/faker";
import { Mappable } from "./Map";

export class User implements Mappable {
  name: string;
  location: {
    lat: number,
    lng: number,
  }

  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      lat: Number(faker.address.latitude()),
      lng: Number(faker.address.longitude()),
    }
  }

  markerContent(): string {
    return `
      <div>
        <h1>User name: ${this.name}</h1>
      </div>
    `;
  }
}