import { prop, Ref, arrayProp } from 'typegoose';

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

class Steps {
	@prop({ ref: StepsType, _id: false })
	type: Ref<StepsType>;
	label?: string;
}

export class WorkflowSteps {
	@prop()
	numberOfDays?: number;

	@arrayProp({ itemsRef: Steps, _id: false })
	steps: Ref<Steps>[];
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
	@arrayProp({ itemsRef: WorkflowSteps, _id: false })
	presite?: Ref<WorkflowSteps>[];
	@arrayProp({ itemsRef: WorkflowSteps, _id: false })
	site?: Ref<WorkflowSteps>[];
	@arrayProp({ itemsRef: WorkflowSteps, _id: false })
	postsite?: Ref<WorkflowSteps>[];
}

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
	analysisStartTime?: Date;
	@prop()
	analysisEndTime?: Date;
	@prop()
	qaStartTime?: Date;
	@prop()
	qaEndTime?: Date;
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
	normalHourse?: number;
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
