import { prop, Typegoose, ModelType, InstanceType } from 'typegoose';
import { Without } from './shared.models';

export class SiteSchema extends Typegoose {
	@prop({ required: true })
	_id?: string;

	@prop({ required: true })
	clientId: string;

	@prop({ default: true })
	autoGenerated?: boolean;

	@prop()
	title?: string;

	@prop({ required: true })
	UPRN: string;

	@prop({ required: true })
	UPRNLabel: string;

	@prop({ required: true })
	postcode: string;

	@prop({ required: true })
	addressLine1: string;

	@prop({ required: true })
	city: string;

	@prop({ required: true })
	county: string;

	@prop({ default: false })
	mandatoryInduction: boolean;

	@prop({ default: Date.now() })
	createdAt?: string;

	@prop()
	teamsId?: string;
}

export const Site = new SiteSchema().getModelForClass(SiteSchema, {
	schemaOptions: { collection: 'sites' }
});

export type ISite = Without<SiteSchema, 'getModelForClass' | 'setModelForClass' | 'buildSchema'>;

export const SiteDocExample: ISite = {
	_id: 'string',
	clientId: 'string',
	autoGenerated: false,
	title: 'string',
	UPRN: 'string',
	UPRNLabel: 'string',
	postcode: 'string',
	addressLine1: 'string',
	city: 'string',
	county: 'string',
	mandatoryInduction: false,
	createdAt: new Date(Date.now()).toISOString(),
	teamsId: 'string'
};
