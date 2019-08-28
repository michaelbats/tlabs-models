import { SiteSchema } from './site.models';
import { prop, Typegoose } from 'typegoose';
import { Without } from './shared.models';
import { SurveyType } from 'src/enums';

export class SurveySchema {
    @prop()
    scheduleId?: string;
    @prop()
    projectId?: string;
    @prop({ enum: Object.values(SurveyType) })
    type: SurveyType;
    @prop()
    details?: string;
}

export class ResidentSchema {
    @prop({ required: true })
    isVoid: boolean;
    @prop()
    name?: string;
    @prop()
    email?: string;
    @prop()
    phone?: string;
    @prop()
    details?: string;
}

export class OrderSchema extends Typegoose {
    @prop({ required: true })
    _id?: string;

    @prop({ default: 'draft' })
    status?: string;

    @prop({ required: true })
    clientId: string;

    @prop({ required: true })
    projectId: string;

    @prop({ default: new Date(Date.now()) })
    createdAt: Date;

    @prop({ default: new Date(Date.now()) })
    updatedAt: Date;

    @prop({ required: true })
    createdBy?: string;

    @prop({ required: true })
    updatedBy?: string;

    @prop({ ref: SiteSchema, _id: false })
    site?: SiteSchema;

    @prop({ ref: SurveySchema, _id: false })
    survey?: SurveySchema;

    @prop({ ref: ResidentSchema, _id: false })
    resident?: ResidentSchema;
}

export const Order = new OrderSchema().getModelForClass(OrderSchema, {
    schemaOptions: { collection: 'orders' }
});

export type IOrder = Without<
    OrderSchema,
    'getModelForClass' | 'setModelForClass' | 'buildSchema'
>;
export type IResidentSchema = ResidentSchema;
export type ISurveySchema = SurveySchema;
