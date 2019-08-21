import { prop, Typegoose, Ref, arrayProp } from 'typegoose';

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

class Session {
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

	@arrayProp({ itemsRef: Session, _id: false })
	sessions: Session[];
}

export const ExternalUser = new ExternalUserSchema().getModelForClass(ExternalUserSchema, {
	schemaOptions: { collection: 'external_users' }
});

export type IExternalUser = ExternalUserSchema;
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
	sessions: Session[];
}
