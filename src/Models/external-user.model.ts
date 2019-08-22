import { prop, Typegoose, Ref, arrayProp } from 'typegoose';
import { Without } from './shared.models';

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

class AuthMethods {
    @prop({ default: false })
    microsoft: boolean;
    @prop({ default: false })
    google: boolean;
    @prop({ default: false })
    local: boolean;
}

export class ExternalUserSchema extends Typegoose {
    @prop({ required: true })
    _id: string;

    @prop({ default: null })
    lastAuth: string;

    @prop({ ref: AuthMethods, _id: false })
    authMethods: AuthMethods;

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

    @prop({ default: Date.now() })
    createdAt: Date;

    @prop({
        ref: Permissions,
        _id: false
    })
    permissions: Permissions;
}

export const ExternalUser = new ExternalUserSchema().getModelForClass(
    ExternalUserSchema,
    {
        schemaOptions: { collection: 'external_users' }
    }
);

export type IExternalUser = Without<
    ExternalUserSchema,
    'getModelForClass' | 'setModelForClass' | 'buildSchema'
>;
export type IPermissions = Permissions;
