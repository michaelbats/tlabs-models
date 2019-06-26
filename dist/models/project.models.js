"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ts_mongoose_1 = require("ts-mongoose");
const shared_models_1 = require("./shared.models");
const site_models_1 = require("./site.models");
const ProjectSchema = ts_mongoose_1.createSchema({
    _id: ts_mongoose_1.Type.string(),
    teamsId: ts_mongoose_1.Type.optionalString(),
    scopeOfWorks: ts_mongoose_1.Type.optionalString(),
    engineerNote: ts_mongoose_1.Type.optionalString(),
    reference: ts_mongoose_1.Type.optionalNumber(),
    sourceQuoteId: ts_mongoose_1.Type.optionalString(),
    clientId: ts_mongoose_1.Type.string(),
    clientName: ts_mongoose_1.Type.string(),
    quoteRequestedBy: ts_mongoose_1.Type.optionalString(),
    quotePreparedBy: ts_mongoose_1.Type.optionalString(),
    isActive: ts_mongoose_1.Type.boolean({ default: false }),
    isCompleted: ts_mongoose_1.Type.boolean({ default: false }),
    activationDate: ts_mongoose_1.Type.optionalDate(),
    endDate: ts_mongoose_1.Type.optionalDate(),
    latestJobsOutputReport: ts_mongoose_1.Type.optionalObject().of(shared_models_1.GoogleFileObject),
    documents: ts_mongoose_1.Type.optionalArray().of(ts_mongoose_1.Type.string()),
    purchaseOrder: ts_mongoose_1.Type.optionalString(),
    callScript: ts_mongoose_1.Type.optionalString(),
    allowedWorkTypes: ts_mongoose_1.Type.optionalArray().of(ts_mongoose_1.Type.string()),
    sites: ts_mongoose_1.Type.optionalArray().of(ts_mongoose_1.Type.object().of(site_models_1.SiteObject)),
    team: ts_mongoose_1.Type.optionalObject().of({
        admin: ts_mongoose_1.Type.optionalArray().of(ts_mongoose_1.Type.string()),
        engineers: ts_mongoose_1.Type.optionalArray().of(ts_mongoose_1.Type.string()),
        others: ts_mongoose_1.Type.optionalArray().of(ts_mongoose_1.Type.string())
    }),
    removalContractorContactId: ts_mongoose_1.Type.optionalString(),
    contacts: ts_mongoose_1.Type.optionalArray().of(ts_mongoose_1.Type.object().of({
        contactId: ts_mongoose_1.Type.optionalString(),
        notes: ts_mongoose_1.Type.optionalString(),
        noAccess: ts_mongoose_1.Type.optionalString(),
        reports: ts_mongoose_1.Type.optionalString(),
        jobStatus: ts_mongoose_1.Type.optionalString()
    })),
    workflow: ts_mongoose_1.Type.optionalObject().of(shared_models_1.WorkflowObject),
    compliance: ts_mongoose_1.Type.optionalObject().of({
        hasMethodStatement: ts_mongoose_1.Type.optionalBoolean(),
        hasScheduleOfRates: ts_mongoose_1.Type.optionalBoolean(),
        automaticAnalysisReport: ts_mongoose_1.Type.string(),
        raiseInvoice: ts_mongoose_1.Type.string()
    }),
    riskAssessments: ts_mongoose_1.Type.optionalArray().of(ts_mongoose_1.Type.string()),
    requirements: ts_mongoose_1.Type.optionalArray().of(ts_mongoose_1.Type.object().of(shared_models_1.RequirementsObject)),
    googleFolder: ts_mongoose_1.Type.optionalObject().of(shared_models_1.GoogleFolderObject),
    files: ts_mongoose_1.Type.optionalArray().of(ts_mongoose_1.Type.object().of(shared_models_1.GoogleFileObject)),
    sendReports: ts_mongoose_1.Type.optionalBoolean({ default: true }),
    tags: ts_mongoose_1.Type.optionalArray().of(ts_mongoose_1.Type.string()),
    createdBy: ts_mongoose_1.Type.string(),
    createdAt: ts_mongoose_1.Type.date({ default: new Date(Date.now()) })
});
exports.Project = ts_mongoose_1.typedModel('projects', ProjectSchema);
//# sourceMappingURL=project.models.js.map