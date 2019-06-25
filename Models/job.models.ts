import { createSchema, Type, typedModel, ExtractProps } from 'ts-mongoose';
import { SiteObject } from './site.models';
import {
  RequirementsObject,
  WorkflowObject,
  SamplesObject,
  GoogleFileObject
} from './shared.models';

const WorkObject = {
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
    requirements: Type.optionalArray().of(Type.object().of(RequirementsObject)),
    elements: Type.optionalArray().of(Type.string())
  }),
  completed: Type.boolean({ default: false })
};

const JobSchema = createSchema({
  _id: Type.optionalObject(),
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
  site: Type.object().of(SiteObject),
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
  work: Type.object().of(WorkObject),
  requirements: Type.optionalArray().of(Type.object().of(RequirementsObject)),
  failure: Type.optionalObject().of({
    reason: Type.string({ default: 'No Answer' }) as
      | 'No Answer'
      | 'Call Rejected By Contact'
      | 'Wrong Number'
      | 'Contact Unavailable'
      | 'Callback Requested',
    notes: Type.optionalString()
  }),
  workflow: Type.optionalObject().of(WorkflowObject),
  samples: Type.optionalObject().of(SamplesObject),
  files: Type.optionalArray().of(Type.object().of(GoogleFileObject)),
  reportFileIds: Type.optionalArray().of(Type.string()),
  reportDraftGenerated: Type.optionalBoolean({ default: false }),
  riskAssessments: Type.optionalArray().of(Type.string()),
  tags: Type.optionalArray().of(Type.string()),
  createdBy: Type.string(),
  createdAt: Type.date({ default: new Date(Date.now()) })
});

export const Job = typedModel('jobs', JobSchema);
export type IJob = ExtractProps<typeof JobSchema>;
