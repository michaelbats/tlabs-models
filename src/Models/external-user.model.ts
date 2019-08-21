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

export class ExternalUserSchema extends Typegoose {
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
		ref: Permissions,
		_id: false
	})
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
