"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ts_mongoose_1 = require("ts-mongoose");
var ActivitySchema = ts_mongoose_1.createSchema({
    _id: ts_mongoose_1.Type.optionalString({ required: true }),
    title: ts_mongoose_1.Type.string({ required: true }),
    details: ts_mongoose_1.Type.string({ required: true }),
    type: ts_mongoose_1.Type.string({ required: true, default: 'note' }),
    createdBy: ts_mongoose_1.Type.string({ required: true }),
    relatedId: ts_mongoose_1.Type.string({ required: true }),
    relatedCollection: ts_mongoose_1.Type.string({ required: true }),
    createdAt: ts_mongoose_1.Type.date({ default: new Date(Date.now()) })
});
exports.Activity = ts_mongoose_1.typedModel('activities', ActivitySchema);
