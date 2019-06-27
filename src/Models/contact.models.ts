import { prop, Typegoose, ModelType, InstanceType } from 'typegoose';

export class Contact {
  @prop({ required: true })
  _id?: string;

  @prop({ required: true })
  firstname: string;

  @prop({ required: true })
  lastname: string;

  @prop()
  jobRole?: string;

  @prop({ required: true })
  email: string;

  @prop()
  telephone?: { type: string; number: string }[];

  @prop()
  notes?: string;

  @prop({ required: true })
  clientId: string;

  @prop({ required: true })
  ownerId: string;

  @prop({ required: true })
  source: string;

  @prop({ default: 'active', enum: ['active', 'inactive'] })
  status: 'active' | 'inactive';

  @prop()
  tags: string[];

  @prop({ default: Date.now() })
  createdAt: Date;
}
