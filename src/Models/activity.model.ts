import { prop, Ref, arrayProp, Typegoose } from 'typegoose';
import { RelatedCollection } from '../models/task.models';
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
	createdAt?: Date;
}

export type IActivity = ActivitySchema;
export const Activity = new ActivitySchema().getModelForClass(ActivitySchema, {
	schemaOptions: {
		collection: 'activities'
	}
});
