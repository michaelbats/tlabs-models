import { prop, Typegoose, Ref, arrayProp } from 'typegoose';
import { ScheduleOfRates, GoogleFile, GoogleFolder } from './shared.models';
import { Site, SiteSchema } from './site.models';

export class ReportEmail {
    @prop()
    body?: string;
    @prop()
    subject?: string;
    @prop()
    subjectUrgent?: string;
}

export class ClientSchema extends Typegoose {
    @prop({ required: true })
    _id: string;
    @prop()
    TLAccount?: string;
    @prop()
    TLAdmin?: string;
    @prop()
    TLTechnical?: string;
    @prop()
    accountStatus?: string;
    @prop()
    accountType?: string;
    @prop()
    address1?: string;
    @prop()
    name?: string;
    @prop()
    notes?: string;
    @prop()
    ownerId?: string;
    @prop()
    postcode?: string;
    @prop()
    sector?: string;
    @prop()
    teamsId?: string;
    @prop()
    city?: string;
    @prop()
    county?: string;
    @prop()
    createdAt?: string;
    @prop()
    sageReference?: string;
    @prop()
    accountLimit?: number;
    @prop()
    agreedScheduleRates?: boolean;
    @prop()
    autoGeneratedReportName?: boolean;
    @prop()
    autoGenerateUprn?: boolean;
    @prop()
    isContractor?: boolean;
    @prop()
    hasOwnScheduleOfRates?: boolean;
    @prop()
    telephone?: string;
    @arrayProp({ itemsRef: SiteSchema, _id: false })
    sites: Ref<SiteSchema>[];
    @arrayProp({ items: String })
    tags: string[];
    @arrayProp({ itemsRef: ScheduleOfRates, _id: false })
    scheduleOfRates: Ref<ScheduleOfRates>[];
    @prop({ ref: ReportEmail, _id: false })
    reportEmail?: Ref<ReportEmail>;
    @arrayProp({ itemsRef: GoogleFile, _id: false })
    files?: Ref<GoogleFile>[];
    @prop({ ref: GoogleFolder, _id: false })
    googleFolder?: Ref<GoogleFolder>;
}

export const Client = new ClientSchema().getModelForClass(ClientSchema, {
    schemaOptions: { collection: 'clients' }
});

export type IClient = ClientSchema;
