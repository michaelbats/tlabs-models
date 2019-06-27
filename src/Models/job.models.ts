import { createSchema, Type, typedModel, ExtractProps } from 'ts-mongoose';
import { SiteSchema } from './site.models';
import {
  RequirementsSchema,
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
  workType: Type.object().of({
    TLtype: Type.string(),
    quoteRate: Type.number(),
    quantity: Type.number({ default: 1 }),
    requirements: Type.optionalArray().of(Type.schema().of(RequirementsSchema)),
    elements: Type.optionalArray().of(Type.string())
  }),
  completed: Type.boolean({ default: false })
});

const JobSchema = createSchema({
  _id: Type.optionalString(),
  title: Type.string(),
  reference: Type.number(),
  batchId: Type.string(),
  batchName: Type.string(),
  projectId: Type.string(),
  projectName: Type.string(),
  clientId: Type.string(),
  clientName: Type.string(),
  status: Type.string({ default: 'Not Booked' }) as
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
  site: Type.schema().of(SiteSchema),
  contact: Type.object().of({
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
  work: Type.schema().of(WorkSchema),
  requirements: Type.optionalArray().of(Type.schema().of(RequirementsSchema)),
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
  samples: Type.optionalObject().of(SamplesSchema),
  files: Type.optionalArray().of(Type.schema().of(GoogleFileSchema)),
  reportFileIds: Type.optionalArray().of(Type.string()),
  reportDraftGenerated: Type.optionalBoolean({ default: false }),
  riskAssessments: Type.optionalArray().of(Type.string()),
  tags: Type.optionalArray().of(Type.string()),
  createdBy: Type.string(),
  createdAt: Type.date({ default: new Date(Date.now()) })
});

export const Job = typedModel('jobs', JobSchema);
export type IJob = ExtractProps<typeof JobSchema>;
