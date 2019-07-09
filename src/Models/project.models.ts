import {
    prop,
    Typegoose,
    ModelType,
    InstanceType,
    Ref,
    arrayProp
} from 'typegoose';

import {
    GoogleFile,
    GoogleFolder,
    Requirements,
    Workflow,
    ProjectContacts,
    ProjectCompliance,
    Team
} from './shared.models';
import { SiteSchema } from './site.models';

export class ProjectSchema extends Typegoose {
    @prop({ required: true })
    _id: string;
    @prop({ required: true })
    clientId: string;
    @prop({ required: true })
    clientName: string;
    @prop({ required: true })
    createdBy: string;
    @prop()
    teamsId?: string;
    @prop()
    scopeOfWorks?: string;
    @prop()
    engineerNote?: string;
    @prop()
    sourceQuoteId?: string;
    @prop()
    quoteRequestedBy?: string;
    @prop()
    quotePreparedBy?: string;
    @prop()
    removalContractorContactId?: string;
    @prop()
    purchaseOrder?: string;
    @prop()
    callScript?: string;
    @prop()
    reference?: number;
    @prop({ default: false })
    isActive: boolean;
    @prop({ default: false })
    isCompleted: boolean;
    @prop()
    activationDate?: Date;
    @prop()
    endDate?: Date;
    @prop({ default: new Date(Date.now()) })
    createdAt: Date;
    @prop({ ref: GoogleFile, _id: false })
    latestJobsOutputReport: Ref<GoogleFile>;
    @arrayProp({ items: String })
    tags?: string[];
    @prop()
    sendReports?: boolean;
    @arrayProp({ itemsRef: GoogleFile, _id: false })
    files?: Ref<GoogleFile>[];
    @prop({ ref: GoogleFolder, _id: false })
    googleFolder?: Ref<GoogleFolder>;
    @arrayProp({ itemsRef: Requirements, _id: false })
    requirements?: Ref<Requirements>[];
    @arrayProp({ items: String })
    riskAssessments?: string[];
    @prop({ ref: Workflow, _id: false })
    workflow?: Ref<Workflow>;
    @arrayProp({ itemsRef: SiteSchema, _id: false })
    sites: Ref<SiteSchema>[];
    @arrayProp({ items: String })
    allowedWorkTypes?: string[];
    @arrayProp({ items: String })
    documents?: string[];
    @arrayProp({ itemsRef: ProjectContacts, _id: false })
    contacts?: Ref<ProjectContacts>[];
    @prop({ ref: ProjectCompliance, _id: false })
    compliance?: Ref<ProjectCompliance>;
    @prop({ ref: Team })
    team?: Ref<Team>;
}

export const Project = new ProjectSchema().getModelForClass(ProjectSchema, {
    schemaOptions: { collection: 'projects' }
});
export type IProject = ProjectSchema;
