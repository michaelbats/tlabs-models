// import { createSchema, Type, typedModel, ExtractProps } from 'ts-mongoose';
// import { GoogleFileSchema } from './shared.models';

// const EngineerSchema = createSchema({
//   homePostcode: Type.optionalString(),
//   ratePerHour: Type.optionalNumber(),
//   workingHours: Type.optionalObject().of({
//     monday: Type.object().of({
//       start: Type.string({ required: true }),
//       end: Type.string({ required: true })
//     }),
//     tuesday: Type.object().of({
//       start: Type.string({ required: true }),
//       end: Type.string({ required: true })
//     }),
//     wednesday: Type.object().of({
//       start: Type.string({ required: true }),
//       end: Type.string({ required: true })
//     }),
//     thursday: Type.object().of({
//       start: Type.string({ required: true }),
//       end: Type.string({ required: true })
//     }),
//     friday: Type.object().of({
//       start: Type.string({ required: true }),
//       end: Type.string({ required: true })
//     }),
//     saturday: Type.object().of({
//       start: Type.string({ required: true }),
//       end: Type.string({ required: true })
//     }),
//     sunday: Type.object().of({
//       start: Type.string({ required: true }),
//       end: Type.string({ required: true })
//     })
//   }),
//   safetyEquipment: Type.optionalArray().of(Type.string()),
//   skills: Type.optionalArray().of(Type.string()),
//   inductedSites: Type.optionalArray().of(Type.string())
// });

// const UserSchema = createSchema({
//   _id: Type.string({ required: true }),
//   firstname: Type.string({ required: true }),
//   lastname: Type.string({ required: true }),
//   email: Type.string({ required: true }),
//   workMobile: Type.optionalNumber(),
//   usersSignature: Type.optionalSchema().of(GoogleFileSchema),
//   jobTitle: Type.optionalString(),
//   teamsId: Type.optionalString(),
//   roles: Type.optionalObject(),
//   disabled: Type.boolean({ required: true, default: false }),
//   permissions: Type.optionalObject(),
//   pinColour: Type.optionalString(),
//   createdAt: Type.optionalDate({
//     required: true,
//     default: new Date(Date.now())
//   }),
//   engineerAttributes: Type.optionalSchema().of(EngineerSchema),
//   settings: Type.optionalObject().of({
//     globalCalendar: Type.optionalObject().of({
//       maxTime: Type.optionalString(),
//       minTime: Type.optionalString()
//     })
//   }),
//   tags: Type.optionalArray().of(Type.string())
// });

// export const User = typedModel('users', UserSchema);
// export type IUser = ExtractProps<typeof UserSchema>;
