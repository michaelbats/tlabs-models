// import { createSchema, Type, typedModel, ExtractProps } from 'ts-mongoose';

// // GEOMETRY
// const Geometry = createSchema({
//   type: Type.string({ required: true }),
//   coordinates: Type.array({ required: true }).of(Type.number()) as [
//     number,
//     number
//   ]
// });

// // PROPERTIES
// const Properties = createSchema({
//   UPRN: Type.optionalString(),
//   clientId: Type.optionalString(),
//   clientName: Type.optionalString(),
//   addressLine1: Type.optionalString(),
//   postcode: Type.optionalString()
// });

// // LOCATIONS COLLECTION MONGOOSE SCHEMA
// const LocationsSchema = createSchema({
//   _id: Type.string({ required: true }),
//   type: Type.string({ required: true }),
//   geometry: Type.schema().of(Geometry),
//   properties: Type.schema().of(Properties),
//   modifiedBy: Type.string({ required: true }),
//   modifiedAt: Type.date({ default: new Date(Date.now()) })
// });

// // ALL EXPORTS:
// // MAIN EXPORT
// export const Locations = typedModel('locations', LocationsSchema);
// export type ILocations = ExtractProps<typeof LocationsSchema>;
// // SECONDARY STUFF
// export type IGeometry = ExtractProps<typeof Geometry>;
// export type IProperties = ExtractProps<typeof Properties>;
// export interface IGeoJson {
//   type: string;
//   geometry: IGeometry;
//   properties?: IProperties;
//   $key?: string;
// }
