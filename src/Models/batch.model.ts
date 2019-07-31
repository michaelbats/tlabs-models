import { Typegoose, prop } from 'typegoose';
import { Without } from './shared.models';

export class BatchSchema extends Typegoose {
	@prop({ required: true })
	_id?: string;
	@prop({ required: true })
	reference: number;
	@prop({ required: true })
	projectId: string;
	@prop()
	projectName?: string;
	@prop({ required: true })
	clientId: string;
	@prop()
	clientName?: string;
	@prop({ default: false })
	isCompleted: boolean;
	@prop()
	activationDate?: string;
	@prop()
	completionDate?: string;
	@prop()
	note?: string;
	@prop({ default: new Date(Date.now()) })
	createdAt?: string;
}

export const Batch = new BatchSchema().getModelForClass(BatchSchema, {
	schemaOptions: {
		collection: 'batches'
	}
});

export type IBatch = Without<BatchSchema, 'getModelForClass' | 'setModelForClass' | 'buildSchema'>;
