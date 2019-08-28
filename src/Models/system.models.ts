import { prop, arrayProp, Typegoose } from 'typegoose';
import { Element, ScheduleOfRates, GoogleFile, Without } from './shared.models';

export class IdNameSchema {
    @prop({ required: true })
    _id: string;

    @prop({ required: true })
    name: string;
}

export class RequirementsSchema {
    @prop()
    _id: string;
    @prop()
    name: string;
    @prop()
    clientCost: number;
    @prop()
    externalCost: number;
}

export class SiteItemsSchema {
    @prop()
    para: string;
    @prop()
    item: string;
}

export class RiskAssessmentsSchema {
    @prop()
    _id: string;
    @prop()
    name: string;
    @prop()
    applicable: boolean;
}

export class CaveatsSchema {
    _id: string;
    name: string;
    description: string;
}
export class ListSchema {
    @arrayProp({ items: Object, _id: false })
    engineerSkills: IdNameSchema[];

    @arrayProp({ items: Object, _id: false })
    requirements: RequirementsSchema;

    @arrayProp({ items: Object, _id: false })
    sectors: IdNameSchema[];

    @arrayProp({ items: Object, _id: false })
    sources: IdNameSchema[];

    @arrayProp({ items: Object, _id: false })
    safetyEquipments: IdNameSchema[];

    @arrayProp({ items: Object, _id: false })
    siteItems: SiteItemsSchema[];

    @arrayProp({ items: Object, _id: false })
    riskAssessments: RiskAssessmentsSchema[];

    @arrayProp({ items: Object, _id: false })
    caveats: CaveatsSchema[];

    @arrayProp({ items: Object, _id: false })
    elements: Element[];

    @arrayProp({ items: Object, _id: false })
    cancellationReasons: IdNameSchema[];

    @arrayProp({ items: Object, _id: false })
    onHoldReasons: IdNameSchema[];
}

export class RagSchema {
    @prop()
    danger: number;
    @prop()
    warning: number;
}

export class WeeklyTaskReportSchema {
    @prop()
    type: string;

    @prop({ _id: false })
    data: object[];
}

export class EngineerLocationSchema {
    @prop()
    emails: string[];
    @prop()
    name: string;
    @prop()
    report: string[];
}

export class SystemSchema extends Typegoose {
    @prop({ required: true })
    _id?: string;

    @prop()
    lists: ListSchema;

    @prop()
    rag: RagSchema;

    @arrayProp({ items: Object, _id: false })
    scheduleOfRates: ScheduleOfRates[];

    @prop()
    lastSiteDownload: Date;

    @prop()
    callScript: string;

    @prop()
    lastJobDownload: Date;

    @prop()
    reportEmailText: string;

    @prop()
    latestJobsOutputReport: GoogleFile;

    @prop()
    reportEmail: string;

    @prop()
    currentTLuprn: number;

    @prop()
    dayEnd: string;

    @prop()
    dayStart: string;

    @prop()
    weeklyTaskReport: WeeklyTaskReportSchema[];

    @arrayProp({ items: Object, _id: false })
    engineerLocations: EngineerLocationSchema[];

    @prop()
    weeklyTaskReportConfig: { emails: string[] };
}

export const System = new SystemSchema().getModelForClass(SystemSchema, {
    schemaOptions: { collection: 'system' }
});

export type ISystem = Without<
    SystemSchema,
    'getModelForClass' | 'setModelForClass' | 'buildSchema'
>;
