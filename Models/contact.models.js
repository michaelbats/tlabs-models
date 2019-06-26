"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ts_mongoose_1 = require("ts-mongoose");
var ContactSchema = ts_mongoose_1.createSchema({
    _id: ts_mongoose_1.Type.optionalString({ required: true }),
    firstname: ts_mongoose_1.Type.string({ required: true }),
    lastname: ts_mongoose_1.Type.string({ required: true }),
    jobRole: ts_mongoose_1.Type.optionalString(),
    email: ts_mongoose_1.Type.string({ required: true }),
    telephone: ts_mongoose_1.Type.optionalArray().of(ts_mongoose_1.Type.object().of({
        type: ts_mongoose_1.Type.string({ required: true }),
        number: ts_mongoose_1.Type.string({ required: true })
    })),
    notes: ts_mongoose_1.Type.optionalString(),
    clientId: ts_mongoose_1.Type.string({ required: true }),
    ownerId: ts_mongoose_1.Type.string({ required: true }),
    source: ts_mongoose_1.Type.string({ required: true }),
    status: ts_mongoose_1.Type.string({ default: 'active' }),
    tags: ts_mongoose_1.Type.optionalArray().of(ts_mongoose_1.Type.string()),
    createdAt: ts_mongoose_1.Type.date({ requried: true, default: new Date(Date.now()) })
});
exports.Contact = ts_mongoose_1.typedModel('contacts', ContactSchema);
