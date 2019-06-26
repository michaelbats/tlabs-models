"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ts_mongoose_1 = require("ts-mongoose");
var BookingSchema = ts_mongoose_1.createSchema({
    _id: ts_mongoose_1.Type.optionalString({ required: true }),
    jobId: ts_mongoose_1.Type.optionalString(),
    jobName: ts_mongoose_1.Type.optionalString(),
    batchId: ts_mongoose_1.Type.optionalString(),
    batchName: ts_mongoose_1.Type.optionalString(),
    projectId: ts_mongoose_1.Type.optionalString(),
    projectName: ts_mongoose_1.Type.optionalString(),
    clientId: ts_mongoose_1.Type.optionalString(),
    clientName: ts_mongoose_1.Type.optionalString(),
    teamsId: ts_mongoose_1.Type.optionalString(),
    engineerId: ts_mongoose_1.Type.optionalString(),
    isAVO: ts_mongoose_1.Type.optionalBoolean(),
    startDate: ts_mongoose_1.Type.optionalDate(),
    endDate: ts_mongoose_1.Type.optionalDate(),
    isNotModifiable: ts_mongoose_1.Type.optionalBoolean(),
    isLockedToEngineer: ts_mongoose_1.Type.optionalBoolean(),
    actualStart: ts_mongoose_1.Type.optionalDate(),
    actualEnd: ts_mongoose_1.Type.optionalDate(),
    notes: ts_mongoose_1.Type.optionalString(),
    status: ts_mongoose_1.Type.optionalString(),
    statusDate: ts_mongoose_1.Type.optionalDate(),
    ended: ts_mongoose_1.Type.optionalBoolean(),
    workCompleted: ts_mongoose_1.Type.optionalBoolean(),
    elementCompleted: ts_mongoose_1.Type.optionalArray().of(ts_mongoose_1.Type.string()),
    imageId: ts_mongoose_1.Type.optionalString(),
    confirmationCode: ts_mongoose_1.Type.optionalString(),
    confirmationCodeReason: ts_mongoose_1.Type.optionalString(),
    feedback: ts_mongoose_1.Type.optionalString(),
    createdBy: ts_mongoose_1.Type.optionalString(),
    createdAt: ts_mongoose_1.Type.optionalDate()
});
exports.Booking = ts_mongoose_1.typedModel('bookings', BookingSchema);
