import { prop, Typegoose, ModelType, InstanceType, Ref } from 'typegoose';

class Permissions {
  @prop({ default: false })
  reports: boolean;

  @prop({ default: false })
  orders: boolean;

  @prop({ default: false })
  activityLog: boolean;

  @prop({ default: false })
  admin: boolean;
}
export class ExternalUser {
  @prop({ required: true })
  _id: string;

  @prop({ default: false })
  signedIn: boolean;

  @prop({ required: true })
  clientId: string;

  @prop({ required: true })
  clientName: string;

  @prop({ unique: true, sparse: true })
  googleId: string;

  @prop({ unique: true, sparse: true })
  microsoftId: string;

  @prop({ required: true, unique: true })
  email: string;

  @prop({ required: true })
  firstname: string;

  @prop({ required: true })
  lastname: string;

  @prop({ required: true })
  token: string;

  @prop({ default: Date.now() })
  createdAt: Date;

  @prop({
    default: { reports: false, orders: false, activityLog: false, admin: false }
  })
  permissions: {
    reports: boolean;
    orders: boolean;
    activityLog: boolean;
    admin: boolean;
  };
}

/** frontend interface of how the user object returned from the token upon authentication, to be used on frontend */
export interface IJWTUser {
  _id: string;
  firstname: string;
  lastname: string;
  signedIn: boolean;
  email: string;
  permissions: {
    admin: boolean;
    orders: boolean;
    reports: boolean;
    activityLog: boolean;
  };
  exp: number;
  iat: number;
  clientId: string;
  clientName: string;
  googleId?: string;
  microsoftId?: string;
}
