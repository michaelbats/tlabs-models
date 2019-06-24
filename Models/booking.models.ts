import { createSchema, Type, typedModel, ExtractProps } from 'ts-mongoose';
import { SiteSchema } from './site.models';
import { ElementSchema } from './shared.models';

const BookingSchema = createSchema({
  _id: Type.optionalString({ required: true }),
  jobId: Type.optionalString(),
  jobName: Type.optionalString(),
  batchId: Type.optionalString(),
  batchName: Type.optionalString(),
  projectId: Type.optionalString(),
  projectName: Type.optionalString(),
  clientId: Type.optionalString(),
  clientName: Type.optionalString(),
  teamsId: Type.optionalString(),
  engineerId: Type.optionalString(),
  isAVO: Type.optionalBoolean(),
  startDate: Type.optionalDate(),
  endDate: Type.optionalDate(),
  isNotModifiable: Type.optionalBoolean(),
  isLockedToEngineer: Type.optionalBoolean(),
  actualStart: Type.optionalDate(),
  actualEnd: Type.optionalDate(),
  notes: Type.optionalString(),
  status: Type.optionalString(),
  statusDate: Type.optionalDate(),
  ended: Type.optionalBoolean(),
  workCompleted: Type.optionalBoolean(),
  elementCompleted: Type.optionalArray().of(Type.schema().of(ElementSchema)),
  imageId: Type.optionalString(),
  confirmationCode: Type.optionalString(),
  confirmationCodeReason: Type.optionalString(),
  feedback: Type.optionalString(),
  createdBy: Type.optionalString(),
  createdAt: Type.optionalDate()
});

export const Booking = typedModel('bookings', BookingSchema);
export type IBooking = ExtractProps<typeof BookingSchema>;
