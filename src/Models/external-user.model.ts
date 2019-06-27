import { createSchema, Type, typedModel, ExtractProps } from 'ts-mongoose';
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

/** Use this to interact with the 'external_users' collection in mongodb */
export const ExternalUser = typedModel('external_users', ExternalUserSchema);

/** Interface extracted from ExternalUser with the 'Document' parts removed */
export type IExternalUser = ExtractProps<typeof ExternalUserSchema>;

/** frontend interface of how the user object returned from the token upon authentication, to be used on frontend */
export interface IJWTUser {
  _id: string;
  firstname: string;
  lastname: string;
  signedIn: boolean;
  email: string;
  permissions: {
    admin: boolean;
    orders: boolean;
    reports: boolean;
    activityLog: boolean;
  };
  exp: number;
  iat: number;
  clientId: string;
  clientName: string;
  googleId?: string;
  microsoftId?: string;
}
