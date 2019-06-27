export interface IGoogleFile {
  fileId: string;
  fileName: string;
  fileUrl: string;
  hideFromEngineer: boolean;
}

export interface IGoogleFolder {
  id: string;
  name: string;
  url: string;
}

export interface IElement {
  _id: string;
  name: string;
  description: string;
  duration: number;
  price: number;
  priceWeekend: number;
  reference: number;
}

export interface IWorkflowSteps {
  numberOfDays?: number;
  steps?: {
    type?: {
      action?: string;
      percentage?: number;
      delay?: number;
      associatedRole?: string;
    };
    label?: string;
  }[];
}

export interface IRequirements {
  reqId: string;
  quantity: number;
  clientCost: number;
  externalCost: number;
}

export interface IWorkflow {
  presite: IWorkflowSteps[];
  site: IWorkflowSteps[];
  postsite: IWorkflowSteps[];
}

export interface ISamples {
  quantity?: number;
  trackingCode?: string;
  isUrgent?: boolean;
  isUrgentContact?: string;
  isUrgentReason?: string;
  analysisStartTime?: Date;
  analysisEndTime?: Date;
  qaStartTime?: Date;
  qaEndTime?: Date;
  qaAction:
    | 'Urgent Attention Required'
    | 'Repair/Encapsulate'
    | 'Action Required'
    | 'Removal Recommended'
    | 'Material to be managed as asbestos'
    | 'No asbestos detected'
    | 'No suspect material identified';
  qaIssues?: boolean;
  qaIssueType: 'Lab Issues' | 'Surveyor Issues' | 'Admin Issues' | 'Other';
  teamsReport?: string;
}

export interface IScheduleOfRates {
  _id: string;
  title: string;
  normalHourse?: number;
  weekend?: number;
  duration?: number;
  internalProcedure?: string;
  description?: string;
  reqSkills?: string[];
  teamsAppointmentType?: string;
  teamsSurveyType?: string;
  teamsPropertyType?: string;
  teamsDistanceBand?: string;
  numberOfPumps?: number;
  teamsAirTestType?: string;
  elements?: string[];
  reference?: number;
}
