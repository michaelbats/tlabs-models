import { prop, arrayProp } from 'typegoose';
import { QAActions, QAIssueType, RaiseInvoice, AutomaticAnalysisReport } from '../enums';

export type Without<T, K> = Pick<T, Exclude<keyof T, K>>;

export class GoogleFile {
	@prop({ required: true })
	fileId: string;
	@prop({ required: true })
	fileName: string;
	@prop({ required: true })
	fileUrl: string;
	@prop({ required: true })
	hideFromEngineer: boolean;
}

export class GoogleFolder {
	@prop({ required: true })
	id: string;
	@prop({ required: true })
	name: string;
	@prop({ required: true })
	url: string;
}

export class Element {
	@prop({ required: true })
	_id: string;
	@prop({ required: true })
	name: string;
	@prop({ required: true })
	description: string;
	@prop({ default: 0 })
	duration: number;
	@prop({ default: 0 })
	price: number;
	@prop({ default: 0 })
	priceWeekend: number;
	@prop({ default: 0 })
	reference: number;
}

export class StepsType {
	@prop()
	action?: string;
	@prop()
	percentage?: number;
	@prop()
	delay?: number;
	@prop()
	associatedRole?: string;
}

export class Steps {
	@prop({ _id: false })
	type: StepsType;
	@prop()
	label?: string;
}

export class WorkflowSteps {
	@prop()
	numberOfDays?: number;
	@arrayProp({ _id: false })
	steps: Steps[];
}

export class Requirements {
	@prop({ required: true })
	reqId: string;
	@prop({ required: true })
	quantity: number;
	@prop({ required: true })
	clientCost: number;
	@prop({ required: true })
	externalCost: number;
}

export class Workflow {
	@arrayProp({ _id: false })
	presite?: WorkflowSteps[];
	@arrayProp({ _id: false })
	site?: WorkflowSteps[];
	@arrayProp({ _id: false })
	postsite?: WorkflowSteps[];
}

export class ProjectContacts {
	@prop()
	contactId?: string;
	@prop()
	notes?: string;
	@prop()
	noAccess?: string;
	@prop()
	reports?: string;
	@prop()
	jobStatus?: string;
}

export class ProjectCompliance {
	@prop()
	hasMethodStatement?: boolean;
	@prop()
	hasScheduleOfRates?: boolean;
	@prop({ enum: Object.values(AutomaticAnalysisReport) })
	automaticAnalysisReport?: AutomaticAnalysisReport;
	@prop({ enum: Object.values(RaiseInvoice) })
	raiseInvoice?: RaiseInvoice;
}

export class Team {
	@arrayProp({ items: String })
	admin?: string[];
	@arrayProp({ items: String })
	engineers?: string[];
	@arrayProp({ items: String })
	others?: string[];
}

export class Samples {
	@prop()
	quantity?: number;
	@prop()
	trackingCode?: string;
	@prop()
	isUrgent?: boolean;
	@prop()
	isUrgentContact?: string;
	@prop()
	isUrgentReason?: string;
	@prop()
	analysisStartTime?: string;
	@prop()
	analysisEndTime?: string;
	@prop()
	qaStartTime?: string;
	@prop()
	qaEndTime?: string;
	@prop({ enum: Object.values(QAActions) })
	qaAction?: QAActions;
	@prop()
	qaIssues?: boolean;
	@prop({ enum: Object.values(QAIssueType) })
	qaIssueType: QAIssueType;
	@prop()
	teamsReport?: string;
}

export class ScheduleOfRates {
	@prop({ required: true })
	_id: string;
	@prop({ required: true })
	title: string;
	@prop()
	normalHours?: number;
	@prop()
	weekend?: number;
	@prop()
	duration?: number;
	@prop()
	internalProcedure?: string;
	@prop()
	description?: string;
	@arrayProp({ items: String })
	reqSkills?: string[];
	@prop()
	teamsAppointmentType?: string;
	@prop()
	teamsSurveyType?: string;
	@prop()
	teamsPropertyType?: string;
	@prop()
	teamsDistanceBand?: string;
	@prop()
	numberOfPumps?: number;
	@prop()
	teamsAirTestType?: string;
	@arrayProp({ items: String })
	elements?: string[];
	@prop()
	reference?: number;
}
