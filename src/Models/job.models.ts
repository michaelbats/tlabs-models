import { SiteSchema } from './site.models';
import { Requirements, Workflow, Samples, GoogleFile } from './shared.models';
import { prop, Ref, arrayProp, Typegoose } from 'typegoose';

export class JobContact {
	@prop()
	name?: string;

	@prop()
	phone?: string;

	@prop()
	mobile?: string;

	@prop()
	alternative?: string;

	@prop()
	email?: string;
}

enum Reason {
	NoAnswer = 'No Answer',
	CallRejectedByContact = 'Call Rejected By Contact',
	WrongNumber = 'Wrong Number',
	ContactUnavailable = 'Contact Unavailable',
	CallbackRequested = 'Callback Requested'
}

export class Failure {
	@prop({
		default: 'No Answer',
		enum: Object.values(Reason)
	})
	reason: Reason;
	@prop()
	notes?: string;
}

export class WorkType {
	@prop({ required: true })
	TLtype: string;
	@prop({ required: true })
	quoteRate: number;
	@prop({ required: true })
	quantity: number;
	@arrayProp({ itemsRef: Requirements, _id: false })
	requirements?: Ref<Requirements>[];
	@arrayProp({ items: String, _id: false })
	elements?: string[];
}

enum Likelihood {
	CertainGuaranteed = 'Certain/Guaranteed',
	Likely = 'Likely',
	Possible = 'Possible',
	Unlikely = 'Unlikely'
}

export class Work {
	@prop({ enum: Object.values(Likelihood) })
	likelihood?: Likelihood;
	@prop()
	nextAvailableSlot?: boolean;
	@prop()
	start?: Date;
	@prop()
	end?: Date;
	@prop()
	assignedOperatives?: number;
	@arrayProp({ items: String })
	preferredStaff?: string[];
	@arrayProp({ items: Object })
	staffArray?: object[];
	@prop()
	tlProjectManager?: string;
	@prop()
	tlAdminContact?: string;
	@prop()
	clientProjectManager?: string;
	@prop()
	clientSiteContact?: string;
	@prop()
	projectManagerTel?: string;
	@prop()
	siteContactTel?: string;
	@prop()
	notes?: string;
	@prop({ ref: WorkType })
	workType: Ref<WorkType>;
	@prop({ required: true })
	completed: boolean;
}

enum Status {
	NotBooked = 'Not Booked',
	Booked = 'Booked',
	Finished = 'Finished'
}

export class JobSchema extends Typegoose {
	@prop({ required: true })
	_id: string;
	@prop({ required: true })
	title: string;
	@prop({ required: true })
	reference: number;
	@prop({ required: true })
	batchId: string;
	@prop({ required: true })
	batchName: string;
	@prop({ required: true })
	projectId: string;
	@prop({ required: true })
	projectName: string;
	@prop({ required: true })
	clientId: string;
	@prop({ required: true })
	clientName: string;
	@prop({ default: 'Not Booked', enum: Object.values(Status) })
	status: Status;
	@prop({ default: false })
	isOnHold: boolean;
	@prop()
	onHoldReason?: string;
	@prop()
	onHoldDetails?: string;
	@prop()
	onHoldDate?: Date;
	@prop()
	lowerLimit?: Date;
	@prop()
	higherLimit?: Date;
	@prop()
	deletionRequestedBy?: string;
	@prop({ ref: SiteSchema, _id: false })
	site: Ref<SiteSchema>;
	@prop({ ref: JobContact, _id: false })
	contact: Ref<JobContact>;
	@prop()
	notes?: string;
	@prop()
	engineerNote?: string;
	@prop()
	purchaseOrder?: string;
	@prop({ required: true })
	twoMen: boolean;
	@prop({ required: true })
	sendReport: boolean;
	@prop({ required: true })
	work: Ref<Work>;
	@arrayProp({ itemsRef: Requirements, _id: false })
	requirements?: Ref<Requirements>[];
	@prop({ ref: Failure, _id: false })
	failure?: Ref<Failure>;
	@prop({ ref: Workflow, _id: false })
	workflow?: Ref<Workflow>;
	@prop({ ref: Samples, _id: false })
	samples?: Ref<Samples>;
	@arrayProp({ itemsRef: GoogleFile, _id: false })
	files: Ref<GoogleFile>[];
	@arrayProp({ items: String })
	reportFileIds?: string[];
	@prop()
	reportDraftGenerated?: boolean;
	@arrayProp({ items: String })
	riskAssessments?: string[];
	@arrayProp({ items: String })
	tags?: string[];
	@prop({ required: true })
	createdBy: string;
	@prop({ required: true })
	createdAt: Date;
}

export const Job = new JobSchema().getModelForClass(JobSchema, {
	schemaOptions: { collection: 'jobs' }
});

export type IJob = JobSchema;
