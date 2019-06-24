import { createSchema, Type, typedModel, ExtractProps } from 'ts-mongoose';
import { SiteSchema } from './site.models';
import {
  RequirementsSchema,
  ElementSchema,
  WorkflowSchema,
  SamplesSchema,
  GoogleFileSchema
} from './shared.models';

const WorkSchema = createSchema({
  likelihood: Type.string() as
    | 'Certain/Guaranteed'
    | 'Likely'
    | 'Possible'
    | 'Unlikely',
  nextAvailableSlot: Type.optionalBoolean(),
  start: Type.optionalDate(),
  end: Type.optionalDate(),
  assignedOperatives: Type.optionalNumber(),
  preferredStaff: Type.optionalArray().of(Type.string()),
  staffArray: Type.optionalArray().of(Type.object()),
  tlProjectManager: Type.optionalString(),
  tlAdminContact: Type.optionalString(),
  clientProjectManager: Type.optionalString(),
  clientSiteContact: Type.optionalString(),
  projectManagerTel: Type.optionalString(),
  siteContactTel: Type.optionalString(),
  notes: Type.optionalString(),
  workType: Type.object({ required: true }).of({
    TLtype: Type.string({ required: true }),
    quoteRate: Type.number({ required: true }),
    quantity: Type.number({ required: true, default: 1 }),
    requirements: Type.optionalArray().of(Type.schema().of(RequirementsSchema)),
    elements: Type.optionalArray().of(Type.string())
  }),
  completed: Type.boolean({ required: true, default: false })
});

const JobSchema = createSchema({
  _id: Type.optionalObject({ required: true }),
  title: Type.string({ required: true }),
  reference: Type.number({ required: true }),
  batchId: Type.string({ required: true }),
  batchName: Type.string({ required: true }),
  projectId: Type.string({ required: true }),
  projectName: Type.string({ required: true }),
  clientId: Type.string({ required: true }),
  clientName: Type.string({ required: true }),
  status: Type.string({ required: true, default: 'Not Booked' }) as
    | 'Not Booked'
    | 'Booked'
    | 'Finished',
  isOnHold: Type.boolean({ default: false }),
  onHoldReason: Type.optionalString(),
  onHoldDetails: Type.optionalString(),
  onHoldDate: Type.optionalDate(),
  lowerLimit: Type.optionalDate(),
  higherLimit: Type.optionalDate(),
  deletionRequestedBy: Type.optionalString(),
  site: Type.schema({ required: true }).of(SiteSchema),
  contact: Type.object({ required: true }).of({
    name: Type.optionalString(),
    phone: Type.optionalString(),
    mobile: Type.optionalString(),
    alternative: Type.optionalString(),
    email: Type.optionalString()
  }),
  notes: Type.optionalString(),
  engineerNote: Type.optionalString(),
  purchaseOrder: Type.optionalString(),
  twoMen: Type.boolean({ default: false }),
  sendReport: Type.boolean({ default: true }),
  work: Type.schema({ required: true }).of(WorkSchema),
  requirements: Type.optionalArray().of(RequirementsSchema),
  failure: Type.optionalObject().of({
    reason: Type.string({ default: 'No Answer' }) as
      | 'No Answer'
      | 'Call Rejected By Contact'
      | 'Wrong Number'
      | 'Contact Unavailable'
      | 'Callback Requested',
    notes: Type.optionalString()
  }),
  workflow: Type.optionalSchema().of(WorkflowSchema),
  samples: Type.optionalSchema().of(SamplesSchema),
  files: Type.optionalArray().of(Type.schema().of(GoogleFileSchema)),
  reportFileIds: Type.optionalArray().of(Type.string()),
  reportDraftGenerated: Type.optionalBoolean({ default: false }),
  riskAssessments: Type.optionalArray().of(Type.string()),
  tags: Type.optionalArray().of(Type.string()),
  createdBy: Type.string({ required: true }),
  createdAt: Type.date({ required: true, default: new Date(Date.now()) })
});

export const Job = typedModel('jobs', JobSchema);
export type IJob = ExtractProps<typeof JobSchema>;
