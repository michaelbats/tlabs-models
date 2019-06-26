"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ts_mongoose_1 = require("ts-mongoose");
var site_models_1 = require("./site.models");
var SurveyObject = {
    scheduleId: ts_mongoose_1.Type.string(),
    property: ts_mongoose_1.Type.optionalObject().of({
        type: ts_mongoose_1.Type.string(),
        totalFloors: ts_mongoose_1.Type.number(),
        allProperty: ts_mongoose_1.Type.object().of({
            flooring: ts_mongoose_1.Type.object().of({
                survey: ts_mongoose_1.Type.boolean(),
                details: ts_mongoose_1.Type.optionalString()
            }),
            windows: ts_mongoose_1.Type.object().of({
                survey: ts_mongoose_1.Type.boolean(),
                details: ts_mongoose_1.Type.optionalString()
            }),
            heating: ts_mongoose_1.Type.object().of({
                survey: ts_mongoose_1.Type.boolean(),
                details: ts_mongoose_1.Type.optionalString()
            }),
            roof: ts_mongoose_1.Type.object().of({
                survey: ts_mongoose_1.Type.boolean(),
                details: ts_mongoose_1.Type.optionalString()
            }),
            ceiling: ts_mongoose_1.Type.object().of({
                survey: ts_mongoose_1.Type.boolean(),
                details: ts_mongoose_1.Type.optionalString()
            }),
            externalWalls: ts_mongoose_1.Type.object().of({
                survey: ts_mongoose_1.Type.boolean(),
                details: ts_mongoose_1.Type.optionalString()
            }),
            intercom: ts_mongoose_1.Type.object().of({
                survey: ts_mongoose_1.Type.boolean(),
                details: ts_mongoose_1.Type.optionalString()
            }),
            rewire: ts_mongoose_1.Type.object().of({
                survey: ts_mongoose_1.Type.boolean(),
                details: ts_mongoose_1.Type.optionalString()
            })
        }),
        utilities: ts_mongoose_1.Type.object().of({
            boiler: ts_mongoose_1.Type.object().of({
                survey: ts_mongoose_1.Type.boolean(),
                details: ts_mongoose_1.Type.optionalString()
            })
        }),
        kitchen: ts_mongoose_1.Type.object().of({
            furniture: ts_mongoose_1.Type.object().of({
                survey: ts_mongoose_1.Type.boolean(),
                details: ts_mongoose_1.Type.optionalString()
            }),
            flooring: ts_mongoose_1.Type.object().of({
                survey: ts_mongoose_1.Type.boolean(),
                details: ts_mongoose_1.Type.optionalString()
            }),
            detectors: ts_mongoose_1.Type.object().of({
                survey: ts_mongoose_1.Type.boolean(),
                details: ts_mongoose_1.Type.optionalString()
            }),
            windows: ts_mongoose_1.Type.object().of({
                survey: ts_mongoose_1.Type.boolean(),
                details: ts_mongoose_1.Type.optionalString()
            }),
            ceiling: ts_mongoose_1.Type.object().of({
                survey: ts_mongoose_1.Type.boolean(),
                details: ts_mongoose_1.Type.optionalString()
            })
        }),
        bathroom: ts_mongoose_1.Type.object().of({
            toilet: ts_mongoose_1.Type.object().of({
                survey: ts_mongoose_1.Type.boolean(),
                details: ts_mongoose_1.Type.optionalString()
            }),
            tiles: ts_mongoose_1.Type.object().of({
                survey: ts_mongoose_1.Type.boolean(),
                details: ts_mongoose_1.Type.optionalString()
            })
        })
    })
};
var ResidentObject = {
    isVoid: ts_mongoose_1.Type.string(),
    name: ts_mongoose_1.Type.optionalString(),
    email: ts_mongoose_1.Type.optionalString(),
    phone: ts_mongoose_1.Type.optionalString(),
    details: ts_mongoose_1.Type.optionalString
};
var ResidentSchema = ts_mongoose_1.createSchema({ ResidentObject: ResidentObject });
var OrderSchema = ts_mongoose_1.createSchema({
    _id: ts_mongoose_1.Type.string(),
    status: ts_mongoose_1.Type.string({ default: 'draft' }),
    clientId: ts_mongoose_1.Type.string(),
    createdAt: ts_mongoose_1.Type.optionalDate({
        required: true,
        default: new Date(Date.now())
    }),
    updatedAt: ts_mongoose_1.Type.optionalDate({ required: true }),
    createdBy: ts_mongoose_1.Type.optionalString({ required: true }),
    updatedBy: ts_mongoose_1.Type.optionalString({ required: true }),
    site: ts_mongoose_1.Type.object().of(site_models_1.SiteObject),
    survey: ts_mongoose_1.Type.optionalObject().of(SurveyObject),
    resident: ts_mongoose_1.Type.optionalObject().of(ResidentObject)
});
// mongoose usable schema
exports.Order = ts_mongoose_1.typedModel('orders', OrderSchema);
