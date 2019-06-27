import { Site } from './site.models';
import {
  IRequirements,
  IWorkflow,
  ISamples,
  IGoogleFile
} from './shared.models';
import { prop, Ref } from 'typegoose';

export class Contact {
  @prop()
  name?: string;

  @prop()
  phone?: string;

  @prop()
  mobile?: string;

  @prop()
  alternative?: string;

  @prop()
  email?: string;
}

export class Failure {
  @prop({
    default: 'No Answer',
    enum: [
      'No Answer',
      'Call Rejected By Contact',
      'Wrong Number',
      'Contact Unavailable',
      'Callback Requested'
    ]
  })
  reason:
    | 'No Answer'
    | 'Call Rejected By Contact'
    | 'Wrong Number'
    | 'Contact Unavailable'
    | 'Callback Requested';

  @prop()
  notes?: string;
}

export class WorkType {
  @prop({ required: true })
  TLtype: string;
  @prop({ required: true })
  quoteRate: number;
  @prop({ required: true })
  quantity: number;
  @prop()
  requirements?: IRequirements[];
  @prop()
  elements: string[];
}

export class IWork {
  likelihood: 'Certain/Guaranteed' | 'Likely' | 'Possible' | 'Unlikely';
  @prop()
  nextAvailableSlot?: boolean;

  @prop()
  start?: Date;

  @prop()
  end?: Date;

  assignedOperatives?: number;
  preferredStaff?: string[];
  staffArray?: object[];
  @prop()
  tlProjectManager?: string;

  @prop()
  tlAdminContact?: string;

  @prop()
  clientProjectManager?: string;

  @prop()
  clientSiteContact?: string;

  @prop()
  projectManagerTel?: string;

  @prop()
  siteContactTel?: string;

  @prop()
  notes?: string;

  workType: {};
  completed: boolean;
}

export class Job {
  _id: string;
  title: string;
  reference: number;
  batchId: string;
  batchName: string;
  projectId: string;
  projectName: string;
  clientId: string;
  clientName: string;
  status: 'Not Booked' | 'Booked' | 'Finished';
  isOnHold: boolean;
  @prop()
  onHoldReason?: string;

  @prop()
  onHoldDetails?: string;

  @prop()
  onHoldDate?: Date;

  @prop()
  lowerLimit?: Date;

  @prop()
  higherLimit?: Date;

  @prop()
  deletionRequestedBy?: string;

  @prop({ ref: Site, _id: false })
  site: Ref<Site>;

  @prop({ ref: Contact, _id: false })
  contact: Ref<Contact>;

  @prop()
  notes?: string;

  @prop()
  engineerNote?: string;

  @prop()
  purchaseOrder?: string;

  twoMen: boolean;
  sendReport: boolean;
  work: IWork;
  requirements?: IRequirements[];
  @prop({ ref: Failure, _id: false })
  failure?: Ref<Failure>;
  workflow?: IWorkflow;
  samples?: ISamples;
  files: IGoogleFile[];
  reportFileIds?: string[];
  @prop()
  reportDraftGenerated?: boolean;

  riskAssessments?: string[];
  tags?: string[];
  createdBy: string;
  @prop()
  createdAt?: Date;
}
