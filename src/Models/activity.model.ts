import { prop, Typegoose } from 'typegoose';
import { RelatedCollection } from './task.models';
import { Without } from 'src';
enum Type {
	Email = 'email',
	Note = 'note',
	Call = 'call',
	Update = 'update',
	Meeting = 'meeting'
}

class ActivitySchema extends Typegoose {
	@prop({ required: true })
	_id?: string;
	@prop({ required: true })
	title: string;
	@prop({ required: true })
	details: string;
	@prop({ enum: Object.values(Type) })
	type: Type;
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

export const ActivityDocExample: IActivity = {
	_id: 'string',
	title: 'string',
	details: 'string',
	type: Type.Call,
	createdBy: 'string',
	createdAt: new Date(Date.now()).toISOString(),
	relatedId: 'string',
	relatedCollection: RelatedCollection.Clients
};
