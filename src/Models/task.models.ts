import { prop, Typegoose, Ref, arrayProp } from 'typegoose';
import { Without } from './shared.models';
import { RelatedCollection } from '../enums';

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
	nextTask: NextTask;
	@prop({ default: false })
	dismissedAlert?: boolean;
	@arrayProp({ items: String })
	tags?: string[];
	@prop({ default: new Date(Date.now()) })
	createdAt?: Date;
}

export type ITask = Without<TaskSchema, 'getModelForClass' | 'setModelForClass' | 'buildSchema'>;
export const Task = new TaskSchema().getModelForClass(TaskSchema, {
	schemaOptions: {
		collection: 'tasks'
	}
});
