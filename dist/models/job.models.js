"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ts_mongoose_1 = require("ts-mongoose");
const site_models_1 = require("./site.models");
const shared_models_1 = require("./shared.models");
const WorkObject = {
    likelihood: ts_mongoose_1.Type.string(),
    nextAvailableSlot: ts_mongoose_1.Type.optionalBoolean(),
    start: ts_mongoose_1.Type.optionalDate(),
    end: ts_mongoose_1.Type.optionalDate(),
    assignedOperatives: ts_mongoose_1.Type.optionalNumber(),
    preferredStaff: ts_mongoose_1.Type.optionalArray().of(ts_mongoose_1.Type.string()),
    staffArray: ts_mongoose_1.Type.optionalArray().of(ts_mongoose_1.Type.object()),
    tlProjectManager: ts_mongoose_1.Type.optionalString(),
    tlAdminContact: ts_mongoose_1.Type.optionalString(),
    clientProjectManager: ts_mongoose_1.Type.optionalString(),
    clientSiteContact: ts_mongoose_1.Type.optionalString(),
    projectManagerTel: ts_mongoose_1.Type.optionalString(),
    siteContactTel: ts_mongoose_1.Type.optionalString(),
    notes: ts_mongoose_1.Type.optionalString(),
    workType: ts_mongoose_1.Type.object().of({
        TLtype: ts_mongoose_1.Type.string(),
        quoteRate: ts_mongoose_1.Type.number(),
        quantity: ts_mongoose_1.Type.number({ default: 1 }),
        requirements: ts_mongoose_1.Type.optionalArray().of(ts_mongoose_1.Type.object().of(shared_models_1.RequirementsObject)),
        elements: ts_mongoose_1.Type.optionalArray().of(ts_mongoose_1.Type.string())
    }),
    completed: ts_mongoose_1.Type.boolean({ default: false })
};
const JobSchema = ts_mongoose_1.createSchema({
    _id: ts_mongoose_1.Type.optionalObject(),
    title: ts_mongoose_1.Type.string(),
    reference: ts_mongoose_1.Type.number(),
    batchId: ts_mongoose_1.Type.string(),
    batchName: ts_mongoose_1.Type.string(),
    projectId: ts_mongoose_1.Type.string(),
    projectName: ts_mongoose_1.Type.string(),
    clientId: ts_mongoose_1.Type.string(),
    clientName: ts_mongoose_1.Type.string(),
    status: ts_mongoose_1.Type.string({ default: 'Not Booked' }),
    isOnHold: ts_mongoose_1.Type.boolean({ default: false }),
    onHoldReason: ts_mongoose_1.Type.optionalString(),
    onHoldDetails: ts_mongoose_1.Type.optionalString(),
    onHoldDate: ts_mongoose_1.Type.optionalDate(),
    lowerLimit: ts_mongoose_1.Type.optionalDate(),
    higherLimit: ts_mongoose_1.Type.optionalDate(),
    deletionRequestedBy: ts_mongoose_1.Type.optionalString(),
    site: ts_mongoose_1.Type.object().of(site_models_1.SiteObject),
    contact: ts_mongoose_1.Type.object().of({
        name: ts_mongoose_1.Type.optionalString(),
        phone: ts_mongoose_1.Type.optionalString(),
        mobile: ts_mongoose_1.Type.optionalString(),
        alternative: ts_mongoose_1.Type.optionalString(),
        email: ts_mongoose_1.Type.optionalString()
    }),
    notes: ts_mongoose_1.Type.optionalString(),
    engineerNote: ts_mongoose_1.Type.optionalString(),
    purchaseOrder: ts_mongoose_1.Type.optionalString(),
    twoMen: ts_mongoose_1.Type.boolean({ default: false }),
    sendReport: ts_mongoose_1.Type.boolean({ default: true }),
    work: ts_mongoose_1.Type.object().of(WorkObject),
    requirements: ts_mongoose_1.Type.optionalArray().of(ts_mongoose_1.Type.object().of(shared_models_1.RequirementsObject)),
    failure: ts_mongoose_1.Type.optionalObject().of({
        reason: ts_mongoose_1.Type.string({ default: 'No Answer' }),
        notes: ts_mongoose_1.Type.optionalString()
    }),
    workflow: ts_mongoose_1.Type.optionalObject().of(shared_models_1.WorkflowObject),
    samples: ts_mongoose_1.Type.optionalObject().of(shared_models_1.SamplesObject),
    files: ts_mongoose_1.Type.optionalArray().of(ts_mongoose_1.Type.object().of(shared_models_1.GoogleFileObject)),
    reportFileIds: ts_mongoose_1.Type.optionalArray().of(ts_mongoose_1.Type.string()),
    reportDraftGenerated: ts_mongoose_1.Type.optionalBoolean({ default: false }),
    riskAssessments: ts_mongoose_1.Type.optionalArray().of(ts_mongoose_1.Type.string()),
    tags: ts_mongoose_1.Type.optionalArray().of(ts_mongoose_1.Type.string()),
    createdBy: ts_mongoose_1.Type.string(),
    createdAt: ts_mongoose_1.Type.date({ default: new Date(Date.now()) })
});
exports.Job = ts_mongoose_1.typedModel('jobs', JobSchema);
//# sourceMappingURL=job.models.js.map