import { createSchema, Type, typedModel } from 'ts-mongoose';
import { ExtractInterface } from '../utils/type-extractors';

// GEOMETRY
const Geometry = createSchema({
  type: Type.string({ required: true }),
  coordinates: Type.array({ required: true }).of(Type.number())
});
const G = typedModel('', Geometry);

// PROPERTIES
const Properties = createSchema({
  UPRN: Type.optionalString(),
  clientId: Type.optionalString(),
  clientName: Type.optionalString(),
  addressLine1: Type.optionalString(),
  postcode: Type.optionalString()
});
const P = typedModel('', Properties);

// LOCATIONS COLLECTION MONGOOSE SCHEMA
const LocationsSchema = createSchema({
  _id: Type.string({ required: true }),
  type: Type.string({ required: true }),
  geometry: Type.schema().of(Geometry),
  properties: Type.schema().of(Properties),
  modifiedBy: Type.string({ required: true }),
  modifiedAt: Type.date({ default: new Date(Date.now()) })
});

// ALL EXPORTS:
// MAIN EXPORT
export const Locations = typedModel('locations', LocationsSchema);
export type ILocations = ExtractInterface<typeof Locations>;
// SECONDARY STUFF
export type IGeometry = ExtractInterface<typeof G>;
export type IProperties = ExtractInterface<typeof P>;
export interface IGeoJson {
  type: string;
  geometry: IGeometry;
  properties?: IProperties;
  $key?: string;
}
