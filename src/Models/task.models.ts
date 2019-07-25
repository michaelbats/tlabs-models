import { prop, Typegoose, Ref, arrayProp } from 'typegoose';
import { Without } from 'src';

export class NextTask {
	@prop({ required: true })
	_id?: string;
	@prop({ required: true })
	title: string;
	@prop()
	details?: string;
	@prop()
	dueDate?: string;
	@prop()
	higherLimit?: string;
	@prop()
	lowerLimit?: string;
	@arrayProp({ items: String })
	assigneeIds?: string[];
	@prop({ ref: NextTask, _id: false })
	nextTask?: NextTask;
}

export const NextTaskExample: NextTask = {
	_id: 'string',
	title: 'string',
	details: 'string',
	dueDate: new Date(Date.now()).toISOString(),
	higherLimit: new Date(Date.now()).toISOString(),
	lowerLimit: new Date(Date.now()).toISOString(),
	assigneeIds: ['string1', 'string2', 'string3'],
	nextTask: undefined
};

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
	completedAt?: string;
	@arrayProp({ items: String })
	assigneeIds?: string[];
	@prop()
	groupAssigneeId?: string;
	@prop()
	details?: string;
	@prop({ required: true })
	dueDate: string;
	@prop()
	lowerLimit?: string;
	@prop()
	higherLimit?: string;
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
	nextTask: NextTask;
	@prop({ default: false })
	dismissedAlert?: boolean;
	@arrayProp({ items: String })
	tags?: string[];
	@prop({ default: new Date(Date.now()) })
	createdAt?: string;
}

export type ITask = Without<TaskSchema, 'getModelForClass' | 'setModelForClass' | 'buildSchema'>;
export const Task = new TaskSchema().getModelForClass(TaskSchema, {
	schemaOptions: {
		collection: 'tasks'
	}
});

export const TaskDocExample: ITask = {
	_id: 'string',
	title: 'string',
	complete: false,
	completedAt: new Date(Date.now()).toISOString(),
	assigneeIds: ['string1', 'string2', 'string3'],
	details: 'string',
	dueDate: new Date(Date.now()).toISOString(),
	lowerLimit: new Date(Date.now()).toISOString(),
	higherLimit: new Date(Date.now()).toISOString(),
	raisedBy: 'string',
	relatedCollection: RelatedCollection.Clients,
	relatedId: 'string',
	relatedStage: 'string',
	relatedStep: 12345,
	relatedStepAction: 'string',
	nextTask: NextTaskExample,
	dismissedAlert: false,
	tags: ['string1', 'string2', 'string3'],
	createdAt: new Date(Date.now()).toISOString()
};
