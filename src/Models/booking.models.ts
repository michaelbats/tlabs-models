import { prop, Typegoose, arrayProp } from 'typegoose';

export class BookingSchema extends Typegoose {
	@prop({ required: true })
	_id?: string;
	@prop()
	jobId?: string;
	@prop()
	jobName?: string;
	@prop()
	batchId?: string;
	@prop()
	batchName?: string;
	@prop()
	projectId?: string;
	@prop()
	projectName?: string;
	@prop()
	clientId?: string;
	@prop()
	clientName?: string;
	@prop()
	teamsId?: string;
	@prop()
	engineerId?: string;
	@prop()
	notes?: string;
	@prop()
	status?: string;
	@prop()
	imageId?: string;
	@prop()
	confirmationCode?: string;
	@prop()
	confirmationCodeReason?: string;
	@prop()
	feedback?: string;
	@prop()
	isAVO?: boolean;
	@prop()
	startDate?: Date;
	@prop()
	endDate?: Date;
	@prop()
	isNotModifiable?: boolean;
	@prop()
	isLockedToEngineer?: boolean;
	@prop()
	actualStart?: Date;
	@prop()
	actualEnd?: Date;
	@prop()
	statusDate?: Date;
	@prop()
	ended?: boolean;
	@prop()
	workCompleted?: boolean;
	@prop({ required: true })
	createdBy?: string;
	@prop({ default: new Date(Date.now()) })
	createdAt?: Date;
	@arrayProp({ items: String })
	elementCompleted?: string[];
}

export const Booking = new BookingSchema().getModelForClass(BookingSchema, {
	schemaOptions: {
		collection: 'bookings'
	}
});

export type IBooking = BookingSchema;
