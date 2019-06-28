// import { createSchema, Type, typedModel, ExtractProps } from 'ts-mongoose';
// import {
//   GoogleFileSchema,
//   RequirementsSchema,
//   GoogleFolderSchema,
//   WorkflowSchema
// } from './shared.models';
// import { SiteSchema } from './site.models';

// const ProjectSchema = createSchema({
//   _id: Type.string(),
//   teamsId: Type.optionalString(),
//   scopeOfWorks: Type.optionalString(),
//   engineerNote: Type.optionalString(),
//   reference: Type.optionalNumber(),
//   sourceQuoteId: Type.optionalString(),
//   clientId: Type.string(),
//   clientName: Type.string(),
//   quoteRequestedBy: Type.optionalString(),
//   quotePreparedBy: Type.optionalString(),
//   isActive: Type.boolean({ default: false }),
//   isCompleted: Type.boolean({ default: false }),
//   activationDate: Type.optionalDate(),
//   endDate: Type.optionalDate(),
//   latestJobsOutputReport: Type.optionalSchema().of(GoogleFileSchema),
//   documents: Type.optionalArray().of(Type.string()),
//   purchaseOrder: Type.optionalString(),
//   callScript: Type.optionalString(),
//   allowedWorkTypes: Type.optionalArray().of(Type.string()),
//   sites: Type.optionalArray().of(Type.schema().of(SiteSchema)),
//   team: Type.optionalObject().of({
//     admin: Type.optionalArray().of(Type.string()),
//     engineers: Type.optionalArray().of(Type.string()),
//     others: Type.optionalArray().of(Type.string())
//   }),
//   removalContractorContactId: Type.optionalString(),
//   contacts: Type.optionalArray().of(
//     Type.object().of({
//       contactId: Type.optionalString(),
//       notes: Type.optionalString(),
//       noAccess: Type.optionalString(),
//       reports: Type.optionalString(),
//       jobStatus: Type.optionalString()
//     })
//   ),
//   workflow: Type.optionalSchema().of(WorkflowSchema),
//   compliance: Type.optionalObject().of({
//     hasMethodStatement: Type.optionalBoolean(),
//     hasScheduleOfRates: Type.optionalBoolean(),
//     automaticAnalysisReport: Type.string() as 'manual' | 'automatic',
//     raiseInvoice: Type.string() as 'manual' | 'automatic' | 'bulk'
//   }),
//   riskAssessments: Type.optionalArray().of(Type.string()),
//   requirements: Type.optionalArray().of(Type.schema().of(RequirementsSchema)),
//   googleFolder: Type.optionalSchema().of(GoogleFolderSchema),
//   files: Type.optionalArray().of(Type.schema().of(GoogleFileSchema)),
//   sendReports: Type.optionalBoolean({ default: true }),
//   tags: Type.optionalArray().of(Type.string()),
//   createdBy: Type.string(),
//   createdAt: Type.date({ default: new Date(Date.now()) })
// });

// export const Project = typedModel('projects', ProjectSchema);
// export type IProject = ExtractProps<typeof ProjectSchema>;
