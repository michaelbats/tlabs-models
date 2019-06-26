"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ts_mongoose_1 = require("ts-mongoose");
const shared_models_1 = require("./shared.models");
const EngineerSchema = ts_mongoose_1.createSchema({
    homePostcode: ts_mongoose_1.Type.optionalString(),
    ratePerHour: ts_mongoose_1.Type.optionalNumber(),
    workingHours: ts_mongoose_1.Type.optionalObject().of({
        monday: ts_mongoose_1.Type.object().of({
            start: ts_mongoose_1.Type.string({ required: true }),
            end: ts_mongoose_1.Type.string({ required: true })
        }),
        tuesday: ts_mongoose_1.Type.object().of({
            start: ts_mongoose_1.Type.string({ required: true }),
            end: ts_mongoose_1.Type.string({ required: true })
        }),
        wednesday: ts_mongoose_1.Type.object().of({
            start: ts_mongoose_1.Type.string({ required: true }),
            end: ts_mongoose_1.Type.string({ required: true })
        }),
        thursday: ts_mongoose_1.Type.object().of({
            start: ts_mongoose_1.Type.string({ required: true }),
            end: ts_mongoose_1.Type.string({ required: true })
        }),
        friday: ts_mongoose_1.Type.object().of({
            start: ts_mongoose_1.Type.string({ required: true }),
            end: ts_mongoose_1.Type.string({ required: true })
        }),
        saturday: ts_mongoose_1.Type.object().of({
            start: ts_mongoose_1.Type.string({ required: true }),
            end: ts_mongoose_1.Type.string({ required: true })
        }),
        sunday: ts_mongoose_1.Type.object().of({
            start: ts_mongoose_1.Type.string({ required: true }),
            end: ts_mongoose_1.Type.string({ required: true })
        })
    }),
    safetyEquipment: ts_mongoose_1.Type.optionalArray().of(ts_mongoose_1.Type.string()),
    skills: ts_mongoose_1.Type.optionalArray().of(ts_mongoose_1.Type.string()),
    inductedSites: ts_mongoose_1.Type.optionalArray().of(ts_mongoose_1.Type.string())
});
const UserSchema = ts_mongoose_1.createSchema({
    _id: ts_mongoose_1.Type.string({ required: true }),
    firstname: ts_mongoose_1.Type.string({ required: true }),
    lastname: ts_mongoose_1.Type.string({ required: true }),
    email: ts_mongoose_1.Type.string({ required: true }),
    workMobile: ts_mongoose_1.Type.optionalNumber(),
    usersSignature: ts_mongoose_1.Type.optionalObject().of(shared_models_1.GoogleFileObject),
    jobTitle: ts_mongoose_1.Type.optionalString(),
    teamsId: ts_mongoose_1.Type.optionalString(),
    roles: ts_mongoose_1.Type.optionalObject(),
    disabled: ts_mongoose_1.Type.boolean({ required: true, default: false }),
    permissions: ts_mongoose_1.Type.optionalObject(),
    pinColour: ts_mongoose_1.Type.optionalString(),
    createdAt: ts_mongoose_1.Type.optionalDate({
        required: true,
        default: new Date(Date.now())
    }),
    engineerAttributes: ts_mongoose_1.Type.optionalSchema().of(EngineerSchema),
    settings: ts_mongoose_1.Type.optionalObject().of({
        globalCalendar: ts_mongoose_1.Type.optionalObject().of({
            maxTime: ts_mongoose_1.Type.optionalString(),
            minTime: ts_mongoose_1.Type.optionalString()
        })
    }),
    tags: ts_mongoose_1.Type.optionalArray().of(ts_mongoose_1.Type.string())
});
exports.User = ts_mongoose_1.typedModel('users', UserSchema);
//# sourceMappingURL=user.models.js.map