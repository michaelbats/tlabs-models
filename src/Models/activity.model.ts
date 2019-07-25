import { prop, Typegoose } from 'typegoose';
import { Without } from './shared.models';
import { RelatedCollection, ActivityType } from '../enums';

class ActivitySchema extends Typegoose {
	@prop({ required: true })
	_id?: string;
	@prop({ required: true })
	title: string;
	@prop({ required: true })
	details: string;
	@prop({ enum: Object.values(ActivityType) })
	type: ActivityType;
	@prop({ required: true })
	createdBy: string;
	@prop({ required: true })
	relatedId: string;
	@prop({ enum: Object.values(RelatedCollection) })
	relatedCollection: RelatedCollection;
	@prop({ default: new Date(Date.now()) })
	createdAt?: string;
}

export type IActivity = Without<
	ActivitySchema,
	'getModelForClass' | 'setModelForClass' | 'buildSchema'
>;
export const Activity = new ActivitySchema().getModelForClass(ActivitySchema, {
	schemaOptions: {
		collection: 'activities'
	}
});
