import { createSchema, Type, typedModel } from 'ts-mongoose';
import { ExtractInterface } from '../utils/type-extractors';

const ExternalUserSchema = createSchema({
  _id: Type.string({ required: true }),
  signedIn: Type.boolean({ required: true, default: false }),
  clientId: Type.string({ required: true }),
  clientName: Type.string({ required: true }),
  googleId: Type.string({ unique: true, sparse: true }),
  microsoftId: Type.string({ unique: true, sparse: true }),
  email: Type.string({ required: true, unique: true }),
  firstname: Type.string({ required: true }),
  lastname: Type.string({ required: true }),
  createdAt: Type.date({ required: true, default: new Date(Date.now()) }),
  token: Type.string({ required: true }),
  permissions: Type.object({ required: true }).of({
    reports: Type.boolean({ required: true, default: false }),
    orders: Type.boolean({ required: true, default: false }),
    activityLog: Type.boolean({ required: true, default: false }),
    admin: Type.boolean({ required: true, default: false })
  })
});

export const ExternalUser = typedModel('external_users', ExternalUserSchema);
export type IExternalUser = ExtractInterface<typeof ExternalUser>;
