import { prop, Ref, arrayProp } from 'typegoose';
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

export const GoogleFileExample = {
	fileId: 'string',
	fileName: 'string',
	fileUrl: 'string',
	hideFromEngineer: false
};

export class GoogleFolder {
	@prop({ required: true })
	id: string;
	@prop({ required: true })
	name: string;
	@prop({ required: true })
	url: string;
}

export const GoogleFolderExample = {
	id: 'string',
	name: 'string',
	url: 'string'
};

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

export const ElementExample = {
	_id: 'string',
	name: 'string',
	description: 'string',
	duration: 12345,
	price: 12345,
	priceWeekend: 12345,
	reference: 12345
};

class StepsType {
	@prop()
	action?: string;
	@prop()
	percentage?: number;
	@prop()
	delay?: number;
	@prop()
	associatedRole?: string;
}

export const StepsTypeExample = {
	action: 'string',
	percentage: 12345,
	delay: 12345,
	associatedRole: 'string'
};

class Steps {
	@prop({ ref: StepsType, _id: false })
	type: StepsType;
	@prop()
	label?: string;
}

export const StepsExample = {
	type: StepsTypeExample,
	label: 'string'
};

export class WorkflowSteps {
	@prop()
	numberOfDays?: number;

	@arrayProp({ itemsRef: Steps, _id: false })
	steps: Steps[];
}

export const WorkflowStepsExample = {
	numberOfDays: 12345,
	steps: [StepsExample, StepsExample, StepsExample]
};

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

export const RequirementsExample = {
	reqId: 'string',
	quantity: 12345,
	clientCost: 12345,
	externalCost: 12345
};

export class Workflow {
	@arrayProp({ itemsRef: WorkflowSteps, _id: false })
	presite?: WorkflowSteps[];
	@arrayProp({ itemsRef: WorkflowSteps, _id: false })
	site?: WorkflowSteps[];
	@arrayProp({ itemsRef: WorkflowSteps, _id: false })
	postsite?: WorkflowSteps[];
}

export const WorkflowExample = {
	presite: [WorkflowStepsExample, WorkflowStepsExample],
	site: [WorkflowStepsExample, WorkflowStepsExample],
	postsite: [WorkflowStepsExample, WorkflowStepsExample]
};

enum QAActions {
	UrgentAttentionRequired = 'Urgent Attention Required',
	RepairEncapsulate = 'Repair/Encapsulate',
	ActionRequired = 'Action Required',
	RemovalRecommended = 'Removal Recommended',
	MaterialToBeManagedAsAsbestos = 'Material to be managed as asbestos',
	NoAsbestosDetected = 'No asbestos detected',
	NoSuspectMaterialIdnetified = 'No suspect material identified'
}

enum QAIssueType {
	LabIssues = 'Lab Issues',
	SurveyorIssues = 'Surveyor Issues',
	AdminIssues = 'Admin Issues',
	Other = 'Other'
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

export const ProjectContactsExample = {
	contactId: 'string',
	notes: 'string',
	noAccess: 'string',
	reports: 'string',
	jobStatus: 'string'
};

enum RaiseInvoice {
	Manual = 'manual',
	Automatic = 'automatic',
	Bulk = 'bulk'
}

enum AutomaticAnalysisReport {
	Manual = 'manual',
	Automatic = 'automatic'
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

export const ProjectComplianceExample = {
	hasMethodStatement: false,
	hasScheduleOfRates: false,
	automaticAnalysisReport: AutomaticAnalysisReport.Automatic,
	raiseInvoice: RaiseInvoice.Automatic
};

export class Team {
	@arrayProp({ items: String })
	admin?: string[];
	@arrayProp({ items: String })
	engineers?: string[];
	@arrayProp({ items: String })
	others?: string[];
}

export const TeamExample = {
	admin: ['string1', 'string2', 'string3'],
	engineers: ['string1', 'string2', 'string3'],
	others: ['string1', 'string2', 'string3']
};

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

export const SamplesExample = {
	quantity: 12345,
	trackingCode: 'string',
	isUrgent: false,
	isUrgentContact: 'string',
	isUrgentReason: 'string',
	analysisStartTime: new Date(Date.now()).toISOString(),
	analysisEndTime: new Date(Date.now()).toISOString(),
	qaStartTime: new Date(Date.now()).toISOString(),
	qaEndTime: new Date(Date.now()).toISOString(),
	qaAction: QAActions.ActionRequired,
	qaIssues: false,
	qaIssueType: QAIssueType.AdminIssues,
	teamsReport: 'string'
};

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

export const ScheduleOfRatesExample = {
	_id: 'string',
	title: 'string',
	normalHours: 12345,
	weekend: 12345,
	duration: 12345,
	internalProcedure: 'string',
	description: 'string',
	reqSkills: ['string1', 'string2', 'string3'],
	teamsAppointmentType: 'string',
	teamsPropertyType: 'string',
	teamsDistanceBand: 'string',
	numberOfPumps: 12345,
	teamsAirTestType: 'string',
	elements: ['string1', 'string2', 'string3'],
	reference: 12345
};
