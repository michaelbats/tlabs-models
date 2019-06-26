"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ts_mongoose_1 = require("ts-mongoose");
var shared_models_1 = require("./shared.models");
var SystemSchema = ts_mongoose_1.createSchema({
    _id: ts_mongoose_1.Type.string(),
    lists: ts_mongoose_1.Type.array().of(ts_mongoose_1.Type.object().of({
        engineerSkills: ts_mongoose_1.Type.array().of(ts_mongoose_1.Type.object().of({ name: ts_mongoose_1.Type.string(), _id: ts_mongoose_1.Type.string() })),
        requirements: ts_mongoose_1.Type.array().of(ts_mongoose_1.Type.object().of({
            name: ts_mongoose_1.Type.string(),
            clientCost: ts_mongoose_1.Type.number(),
            externalCost: ts_mongoose_1.Type.number(),
            _id: ts_mongoose_1.Type.string()
        })),
        sectors: ts_mongoose_1.Type.array().of(ts_mongoose_1.Type.object().of({ name: ts_mongoose_1.Type.string(), _id: ts_mongoose_1.Type.string() })),
        sources: ts_mongoose_1.Type.array().of(ts_mongoose_1.Type.object().of({ name: ts_mongoose_1.Type.string(), _id: ts_mongoose_1.Type.string() })),
        safetyEquipments: ts_mongoose_1.Type.array().of(ts_mongoose_1.Type.object().of({ name: ts_mongoose_1.Type.string(), _id: ts_mongoose_1.Type.string() })),
        siteItems: ts_mongoose_1.Type.array().of(ts_mongoose_1.Type.object().of({ para: ts_mongoose_1.Type.string(), item: ts_mongoose_1.Type.string() })),
        riskAssessments: ts_mongoose_1.Type.array().of(ts_mongoose_1.Type.object().of({
            _id: ts_mongoose_1.Type.string(),
            name: ts_mongoose_1.Type.string(),
            applicable: ts_mongoose_1.Type.boolean()
        })),
        caveats: ts_mongoose_1.Type.array().of(ts_mongoose_1.Type.object().of({
            name: ts_mongoose_1.Type.string(),
            description: ts_mongoose_1.Type.string(),
            _id: ts_mongoose_1.Type.string()
        })),
        elements: ts_mongoose_1.Type.array().of(ts_mongoose_1.Type.object().of(shared_models_1.ElementObject)),
        cancellationReasons: ts_mongoose_1.Type.array().of(ts_mongoose_1.Type.object().of({ name: ts_mongoose_1.Type.string(), _id: ts_mongoose_1.Type.string() })),
        onHoldReasons: ts_mongoose_1.Type.array().of(ts_mongoose_1.Type.object().of({ name: ts_mongoose_1.Type.string(), _id: ts_mongoose_1.Type.string() }))
    })),
    rag: ts_mongoose_1.Type.object().of({ danger: ts_mongoose_1.Type.number(), warniing: ts_mongoose_1.Type.number() }),
    scheduleOfRates: ts_mongoose_1.Type.array().of(ts_mongoose_1.Type.object().of(shared_models_1.ScheduleOfRatesObject)),
    lastSiteDownload: ts_mongoose_1.Type.date(),
    callScript: ts_mongoose_1.Type.string(),
    lastJobDownload: ts_mongoose_1.Type.date(),
    reportEmailText: ts_mongoose_1.Type.string(),
    latestJobsOutputReport: ts_mongoose_1.Type.object().of(shared_models_1.GoogleFileObject),
    reportEmail: ts_mongoose_1.Type.string(),
    currentTLuprn: ts_mongoose_1.Type.number(),
    dayEnd: ts_mongoose_1.Type.string(),
    dayStart: ts_mongoose_1.Type.string(),
    weeklyTaskReport: ts_mongoose_1.Type.array().of(ts_mongoose_1.Type.object().of({
        type: ts_mongoose_1.Type.string(),
        data: ts_mongoose_1.Type.array().of(ts_mongoose_1.Type.object())
    })),
    engineerLocations: ts_mongoose_1.Type.array().of(ts_mongoose_1.Type.object().of({
        emails: ts_mongoose_1.Type.array().of(ts_mongoose_1.Type.string()),
        name: ts_mongoose_1.Type.string(),
        report: ts_mongoose_1.Type.array().of(ts_mongoose_1.Type.string())
    })),
    weeklyTaskReportConfig: ts_mongoose_1.Type.object().of({
        emails: ts_mongoose_1.Type.array().of(ts_mongoose_1.Type.string())
    })
});
exports.System = ts_mongoose_1.typedModel('system', SystemSchema);
