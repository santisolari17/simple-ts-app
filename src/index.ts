import { Company } from "./Company";
import { User } from "./User";
import { Map } from "./Map";

const webMap = new Map('map');

const user = new User();
const company = new Company();

webMap.addMarker(user);
webMap.addMarker(company);