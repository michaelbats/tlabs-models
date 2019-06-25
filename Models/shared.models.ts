import { createSchema, Type, typedModel, ExtractProps } from 'ts-mongoose';

export const GoogleFileObject = {
  fileId: Type.string(),
  fileName: Type.string(),
  fileUrl: Type.string(),
  hideFromEngineer: Type.boolean()
};
const GoogleFileSchema = createSchema(GoogleFileObject);

export const GoogleFolderObject = {
  id: Type.string(),
  name: Type.string(),
  url: Type.string()
};
const GoogleFolderSchema = createSchema(GoogleFolderObject);

export const ElementObject = {
  _id: Type.string(),
  name: Type.string(),
  description: Type.string(),
  duration: Type.number({ required: true, default: 0 }),
  price: Type.number({ required: true, default: 0 }),
  priceWeekend: Type.number({ required: true, default: 0 }),
  reference: Type.number()
};
const ElementSchema = createSchema(ElementObject);

export const WorkflowStepsObject = {
  numberOfDays: Type.optionalNumber(),
  steps: Type.optionalArray().of(
    Type.optionalObject().of({
      type: Type.optionalObject().of({
        action: Type.optionalString(),
        percentage: Type.optionalNumber(),
        delay: Type.optionalNumber(),
        associatedRole: Type.optionalString()
      }),
      label: Type.optionalString()
    })
  )
};

export const RequirementsObject = {
  reqId: Type.string(),
  quantity: Type.number(),
  clientCost: Type.number(),
  externalCost: Type.number()
};
const RequirementsSchema = createSchema(RequirementsObject);

export const WorkflowObject = {
  presite: Type.optionalObject().of(WorkflowStepsObject),
  site: Type.optionalObject().of(WorkflowStepsObject),
  postsite: Type.optionalObject().of(WorkflowStepsObject)
};
const WorkflowSchema = createSchema(WorkflowObject);

export const SamplesObject = {
  quantity: Type.optionalNumber(),
  trackingCode: Type.optionalString(),
  isUrgent: Type.optionalBoolean(),
  isUrgentContact: Type.optionalString(),
  isUrgentReason: Type.optionalString(),
  analysisStartTime: Type.optionalDate(),
  analysisEndTime: Type.optionalDate(),
  qaStartTime: Type.optionalDate(),
  qaEndTime: Type.optionalDate(),
  qaAction: Type.string() as
    | 'Urgent Attention Required'
    | 'Repair/Encapsulate'
    | 'Action Required'
    | 'Removal Recommended'
    | 'Material to be managed as asbestos'
    | 'No asbestos detected'
    | 'No suspect material identified',
  qaIssues: Type.optionalBoolean(),
  qaIssueType: Type.string() as
    | 'Lab Issues'
    | 'Surveyor Issues'
    | 'Admin Issues'
    | 'Other',
  teamsReport: Type.optionalString()
};
const SamplesSchema = createSchema(SamplesObject);

export const ScheduleOfRatesObject = {
  _id: Type.string(),
  title: Type.string(),
  normalHourse: Type.optionalNumber({ default: 0 }),
  weekend: Type.optionalNumber({ default: 0 }),
  duration: Type.optionalNumber({ default: 0 }),
  internalProcedure: Type.optionalString(),
  description: Type.optionalString(),
  reqSqills: Type.optionalArray().of(Type.string()),
  teamsAppointmentType: Type.optionalString(),
  teamsSurveyType: Type.optionalString(),
  teamsPropertyType: Type.optionalString(),
  teamsDistanceBand: Type.optionalString(),
  numberOfPumps: Type.optionalNumber(),
  teamsAirTestType: Type.optionalString(),
  elements: Type.optionalArray().of(Type.string()),
  reference: Type.optionalNumber()
};
const ScheduleOfRatesSchema = createSchema(ScheduleOfRatesObject);

export type ISamples = ExtractProps<typeof SamplesSchema>;
export type IWorlflow = ExtractProps<typeof WorkflowSchema>;
export type IRequirements = ExtractProps<typeof RequirementsSchema>;
export type IGoogleFile = ExtractProps<typeof GoogleFileSchema>;
export type IGoogleFolder = ExtractProps<typeof GoogleFolderSchema>;
export type IElement = ExtractProps<typeof ElementSchema>;
export type IScheduleOfRates = ExtractProps<typeof ScheduleOfRatesSchema>;
