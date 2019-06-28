// import { createSchema, Type, typedModel, ExtractProps } from 'ts-mongoose';
// import { SiteSchema } from './site.models';
// import {
//   GoogleFileSchema,
//   GoogleFolderSchema,
//   ScheduleOfRatesSchema
// } from './shared.models';

// const ClientSchema = createSchema({
//   _id: Type.string(),
//   TLAccount: Type.optionalString(),
//   TLAdmin: Type.optionalString(),
//   TLTechnical: Type.optionalString(),
//   accountLimit: Type.optionalNumber(),
//   accountStatus: Type.optionalString(),
//   accountType: Type.optionalString(),
//   address1: Type.optionalString(),
//   agreedScheduleRates: Type.optionalBoolean(),
//   autoGeneratedReportName: Type.optionalBoolean(),
//   autoGenerateUprn: Type.optionalBoolean(),
//   city: Type.optionalString(),
//   county: Type.optionalString(),
//   createdAt: Type.optionalString(),
//   files: Type.optionalSchema().of(Type.object().of(GoogleFileSchema)),
//   googleFolder: Type.optionalSchema().of(Type.object().of(GoogleFolderSchema)),
//   hasOwnScheduleOfRates: Type.optionalBoolean(),
//   isContractor: Type.optionalBoolean(),
//   name: Type.optionalString(),
//   notes: Type.optionalString(),
//   ownerId: Type.optionalString(),
//   postcode: Type.optionalString(),
//   reportEmail: Type.optionalObject().of({
//     body: Type.string(),
//     subject: Type.string(),
//     subjectUrgent: Type.string()
//   }),
//   sageReference: Type.optionalString(),
//   scheduleOfRates: Type.optionalArray().of(
//     Type.schema().of(ScheduleOfRatesSchema)
//   ),
//   sector: Type.optionalString(),
//   sites: Type.optionalArray().of(Type.schema().of(SiteSchema)),
//   tags: Type.optionalArray().of(Type.string()),
//   teamsId: Type.optionalString(),
//   telephone: Type.optionalString()
// });

// export const Client = typedModel('clients', ClientSchema);
// export type IClient = ExtractProps<typeof ClientSchema>;

// let thing = new Client();
