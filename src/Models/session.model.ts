import { prop, Typegoose } from 'typegoose';
import { Without } from './shared.models';
export class SessionSchema extends Typegoose {
	@prop({ required: true })
	_id?: string;

	@prop({ required: true })
	token: string;

	@prop({ required: true })
	details: string;

	@prop({ required: true })
	address: string;

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
