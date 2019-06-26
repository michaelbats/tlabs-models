import { createSchema, Type, typedModel, ExtractProps } from 'ts-mongoose';
import {
  GoogleFileObject,
  RequirementsObject,
  GoogleFolderObject,
  WorkflowObject
} from './shared.models';
import { SiteObject } from './site.models';

const ProjectSchema = createSchema({
  _id: Type.string(),
  teamsId: Type.optionalString(),
  scopeOfWorks: Type.optionalString(),
  engineerNote: Type.optionalString(),
  reference: Type.optionalNumber(),
  sourceQuoteId: Type.optionalString(),
  clientId: Type.string(),
  clientName: Type.string(),
  quoteRequestedBy: Type.optionalString(),
  quotePreparedBy: Type.optionalString(),
  isActive: Type.boolean({ default: false }),
  isCompleted: Type.boolean({ default: false }),
  activationDate: Type.optionalDate(),
  endDate: Type.optionalDate(),
  latestJobsOutputReport: Type.optionalObject().of(GoogleFileObject),
  documents: Type.optionalArray().of(Type.string()),
  purchaseOrder: Type.optionalString(),
  callScript: Type.optionalString(),
  allowedWorkTypes: Type.optionalArray().of(Type.string()),
  sites: Type.optionalArray().of(Type.object().of(SiteObject)),
  team: Type.optionalObject().of({
    admin: Type.optionalArray().of(Type.string()),
    engineers: Type.optionalArray().of(Type.string()),
    others: Type.optionalArray().of(Type.string())
  }),
  removalContractorContactId: Type.optionalString(),
  contacts: Type.optionalArray().of(
    Type.object().of({
      contactId: Type.optionalString(),
      notes: Type.optionalString(),
      noAccess: Type.optionalString(),
      reports: Type.optionalString(),
      jobStatus: Type.optionalString()
    })
  ),
  workflow: Type.optionalObject().of(WorkflowObject),
  compliance: Type.optionalObject().of({
    hasMethodStatement: Type.optionalBoolean(),
    hasScheduleOfRates: Type.optionalBoolean(),
    automaticAnalysisReport: Type.string() as 'manual' | 'automatic',
    raiseInvoice: Type.string() as 'manual' | 'automatic' | 'bulk'
  }),
  riskAssessments: Type.optionalArray().of(Type.string()),
  requirements: Type.optionalArray().of(Type.object().of(RequirementsObject)),
  googleFolder: Type.optionalObject().of(GoogleFolderObject),
  files: Type.optionalArray().of(Type.object().of(GoogleFileObject)),
  sendReports: Type.optionalBoolean({ default: true }),
  tags: Type.optionalArray().of(Type.string()),
  createdBy: Type.string(),
  createdAt: Type.date({ default: new Date(Date.now()) })
});

export const Project = typedModel('projects', ProjectSchema);
export type IProject = ExtractProps<typeof ProjectSchema>;
