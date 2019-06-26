"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ts_mongoose_1 = require("ts-mongoose");
// GEOMETRY
const Geometry = ts_mongoose_1.createSchema({
    type: ts_mongoose_1.Type.string({ required: true }),
    coordinates: ts_mongoose_1.Type.array({ required: true }).of(ts_mongoose_1.Type.number())
});
// PROPERTIES
const Properties = ts_mongoose_1.createSchema({
    UPRN: ts_mongoose_1.Type.optionalString(),
    clientId: ts_mongoose_1.Type.optionalString(),
    clientName: ts_mongoose_1.Type.optionalString(),
    addressLine1: ts_mongoose_1.Type.optionalString(),
    postcode: ts_mongoose_1.Type.optionalString()
});
// LOCATIONS COLLECTION MONGOOSE SCHEMA
const LocationsSchema = ts_mongoose_1.createSchema({
    _id: ts_mongoose_1.Type.string({ required: true }),
    type: ts_mongoose_1.Type.string({ required: true }),
    geometry: ts_mongoose_1.Type.schema().of(Geometry),
    properties: ts_mongoose_1.Type.schema().of(Properties),
    modifiedBy: ts_mongoose_1.Type.string({ required: true }),
    modifiedAt: ts_mongoose_1.Type.date({ default: new Date(Date.now()) })
});
// ALL EXPORTS:
// MAIN EXPORT
exports.Locations = ts_mongoose_1.typedModel('locations', LocationsSchema);
//# sourceMappingURL=location.models.js.map