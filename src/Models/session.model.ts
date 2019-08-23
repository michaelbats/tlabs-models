import { prop, Typegoose } from 'typegoose';
import { Without } from './shared.models';
import { IExternalUser } from 'src/models/external-user.model';
export class SessionSchema extends Typegoose {
    @prop({ required: true })
    _id?: string;

    @prop({ required: true })
    agent: string;

    @prop({ required: true })
    ip: string;

    @prop({ _id: false })
    user: IExternalUser;

    @prop({ default: new Date(Date.now()) })
    createdAt?: string;

    @prop({ default: new Date(Date.now()) })
    lastAccess: string;
}

export const Session = new SessionSchema().getModelForClass(SessionSchema, {
    schemaOptions: { collection: 'sessions' }
});

export type ISession = Without<
    SessionSchema,
    'getModelForClass' | 'setModelForClass' | 'buildSchema'
>;
