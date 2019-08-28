import { prop, Typegoose, arrayProp } from 'typegoose';
import { Without } from './shared.models';
import { IdNameSchema } from './system.models';

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

	@prop()
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

	@arrayProp({ items: Object, _id: false })
	projects: IdNameSchema[];

	@prop()
	permissions: Permissions;
}

export const ExternalUser = new ExternalUserSchema().getModelForClass(ExternalUserSchema, {
	schemaOptions: { collection: 'external_users' }
});

export type IExternalUser = Without<
	ExternalUserSchema,
	'getModelForClass' | 'setModelForClass' | 'buildSchema'
>;
export type IPermissions = Permissions;

export interface IPublicUser {
	_id: string;
	firstname: string;
	lastname: string;
	clientId: string;
	clientName: string;
	email: string;
	projects: string[];
	permissions: Permissions;
}
