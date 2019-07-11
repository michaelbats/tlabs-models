import { prop, Typegoose, Ref, arrayProp } from 'typegoose';

export class NextTask {
	@prop({ required: true })
	_id?: string;
	@prop({ required: true })
	title: string;
	@prop()
	details?: string;
	@prop()
	dueDate?: Date;
	@prop()
	higherLimit?: Date;
	@prop()
	lowerLimit?: Date;
	@arrayProp({ items: String })
	assigneeIds?: string[];
	@prop({ ref: NextTask, _id: false })
	nextTask?: Ref<NextTask>;
}

export enum RelatedCollection {
	Clients = 'clients',
	Contacts = 'contacts',
	Jobs = 'jobs',
	Leads = 'leads',
	Personal = 'personal',
	Projects = 'projects',
	Quotes = 'quotes',
	Sites = 'sites'
}

export class TaskSchema extends Typegoose {
	@prop({ required: true })
	_id?: string;
	@prop({ required: true })
	title: string;
	@prop({ default: false })
	complete: boolean;
	@prop()
	completedAt?: Date;
	@arrayProp({ items: String })
	assigneeIds?: string[];
	@prop()
	groupAssigneeId?: string;
	@prop()
	details?: string;
	@prop({ required: true })
	dueDate: Date;
	@prop()
	lowerLimit?: Date;
	@prop()
	higherLimit?: Date;
	@prop({ required: true })
	raisedBy?: string;
	@prop({ enum: Object.values(RelatedCollection) })
	relatedCollection?: RelatedCollection;
	@prop({ required: true })
	relatedId: string;
	@prop()
	relatedStage?: string;
	@prop()
	relatedStep?: number;
	@prop()
	relatedStepAction?: string;
	@prop({ ref: NextTask, _id: false })
	nextTask: Ref<NextTask>;
	@prop({ default: false })
	dismissedAlert?: boolean;
	@arrayProp({ items: String })
	tags?: string[];
	@prop({ default: new Date(Date.now()) })
	createdAt?: Date;
}

export type ITask = TaskSchema;
export type INextTask = NextTask;
export const Task = new TaskSchema().getModelForClass(TaskSchema, {
	schemaOptions: {
		collection: 'tasks'
	}
});
