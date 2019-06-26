"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ts_mongoose_1 = require("ts-mongoose");
exports.GoogleFileObject = {
    fileId: ts_mongoose_1.Type.string(),
    fileName: ts_mongoose_1.Type.string(),
    fileUrl: ts_mongoose_1.Type.string(),
    hideFromEngineer: ts_mongoose_1.Type.boolean()
};
const GoogleFileSchema = ts_mongoose_1.createSchema(exports.GoogleFileObject);
exports.GoogleFolderObject = {
    id: ts_mongoose_1.Type.string(),
    name: ts_mongoose_1.Type.string(),
    url: ts_mongoose_1.Type.string()
};
const GoogleFolderSchema = ts_mongoose_1.createSchema(exports.GoogleFolderObject);
exports.ElementObject = {
    _id: ts_mongoose_1.Type.string(),
    name: ts_mongoose_1.Type.string(),
    description: ts_mongoose_1.Type.string(),
    duration: ts_mongoose_1.Type.number({ required: true, default: 0 }),
    price: ts_mongoose_1.Type.number({ required: true, default: 0 }),
    priceWeekend: ts_mongoose_1.Type.number({ required: true, default: 0 }),
    reference: ts_mongoose_1.Type.number()
};
const ElementSchema = ts_mongoose_1.createSchema(exports.ElementObject);
exports.WorkflowStepsObject = {
    numberOfDays: ts_mongoose_1.Type.optionalNumber(),
    steps: ts_mongoose_1.Type.optionalArray().of(ts_mongoose_1.Type.optionalObject().of({
        type: ts_mongoose_1.Type.optionalObject().of({
            action: ts_mongoose_1.Type.optionalString(),
            percentage: ts_mongoose_1.Type.optionalNumber(),
            delay: ts_mongoose_1.Type.optionalNumber(),
            associatedRole: ts_mongoose_1.Type.optionalString()
        }),
        label: ts_mongoose_1.Type.optionalString()
    }))
};
exports.RequirementsObject = {
    reqId: ts_mongoose_1.Type.string(),
    quantity: ts_mongoose_1.Type.number(),
    clientCost: ts_mongoose_1.Type.number(),
    externalCost: ts_mongoose_1.Type.number()
};
const RequirementsSchema = ts_mongoose_1.createSchema(exports.RequirementsObject);
exports.WorkflowObject = {
    presite: ts_mongoose_1.Type.optionalObject().of(exports.WorkflowStepsObject),
    site: ts_mongoose_1.Type.optionalObject().of(exports.WorkflowStepsObject),
    postsite: ts_mongoose_1.Type.optionalObject().of(exports.WorkflowStepsObject)
};
const WorkflowSchema = ts_mongoose_1.createSchema(exports.WorkflowObject);
exports.SamplesObject = {
    quantity: ts_mongoose_1.Type.optionalNumber(),
    trackingCode: ts_mongoose_1.Type.optionalString(),
    isUrgent: ts_mongoose_1.Type.optionalBoolean(),
    isUrgentContact: ts_mongoose_1.Type.optionalString(),
    isUrgentReason: ts_mongoose_1.Type.optionalString(),
    analysisStartTime: ts_mongoose_1.Type.optionalDate(),
    analysisEndTime: ts_mongoose_1.Type.optionalDate(),
    qaStartTime: ts_mongoose_1.Type.optionalDate(),
    qaEndTime: ts_mongoose_1.Type.optionalDate(),
    qaAction: ts_mongoose_1.Type.string(),
    qaIssues: ts_mongoose_1.Type.optionalBoolean(),
    qaIssueType: ts_mongoose_1.Type.string(),
    teamsReport: ts_mongoose_1.Type.optionalString()
};
const SamplesSchema = ts_mongoose_1.createSchema(exports.SamplesObject);
exports.ScheduleOfRatesObject = {
    _id: ts_mongoose_1.Type.string(),
    title: ts_mongoose_1.Type.string(),
    normalHourse: ts_mongoose_1.Type.optionalNumber({ default: 0 }),
    weekend: ts_mongoose_1.Type.optionalNumber({ default: 0 }),
    duration: ts_mongoose_1.Type.optionalNumber({ default: 0 }),
    internalProcedure: ts_mongoose_1.Type.optionalString(),
    description: ts_mongoose_1.Type.optionalString(),
    reqSkills: ts_mongoose_1.Type.optionalArray().of(ts_mongoose_1.Type.string()),
    teamsAppointmentType: ts_mongoose_1.Type.optionalString(),
    teamsSurveyType: ts_mongoose_1.Type.optionalString(),
    teamsPropertyType: ts_mongoose_1.Type.optionalString(),
    teamsDistanceBand: ts_mongoose_1.Type.optionalString(),
    numberOfPumps: ts_mongoose_1.Type.optionalNumber(),
    teamsAirTestType: ts_mongoose_1.Type.optionalString(),
    elements: ts_mongoose_1.Type.optionalArray().of(ts_mongoose_1.Type.string()),
    reference: ts_mongoose_1.Type.optionalNumber()
};
const ScheduleOfRatesSchema = ts_mongoose_1.createSchema(exports.ScheduleOfRatesObject);
//# sourceMappingURL=shared.models.js.map