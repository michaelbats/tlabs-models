import {
  prop,
  arrayProp,
  Typegoose,
  ModelType,
  InstanceType,
  Ref
} from 'typegoose';

class Telephone {
  @prop({ required: true })
  type: string;

  @prop({ required: true })
  number: string;
}

enum Status {
  Active = 'active',
  Inactive = 'inactive'
}

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

  @arrayProp({ itemsRef: Telephone, _id: false })
  telephone?: Ref<Telephone>[];

  @prop()
  notes?: string;

  @prop({ required: true })
  clientId: string;

  @prop({ required: true })
  ownerId: string;

  @prop({ required: true })
  source: string;

  @prop({ default: 'active', enum: Object.values(Status) })
  status: Status;

  @arrayProp({ items: String })
  tags?: string[];

  @prop({ default: Date.now() })
  createdAt: Date;
}
