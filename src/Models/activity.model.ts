// import { createSchema, Type, typedModel, ExtractProps } from 'ts-mongoose';

// const ActivitySchema = createSchema({
//   _id: Type.optionalString({ required: true }),
//   title: Type.string({ required: true }),
//   details: Type.string({ required: true }),
//   type: Type.string({ required: true, default: 'note' }) as
//     | 'email'
//     | 'note'
//     | 'call'
//     | 'update'
//     | 'meeting',
//   createdBy: Type.string({ required: true }),
//   relatedId: Type.string({ required: true }),
//   relatedCollection: Type.string({ required: true }) as
//     | 'clients'
//     | 'contacts'
//     | 'jobs'
//     | 'leads'
//     | 'personal'
//     | 'projects'
//     | 'quotes'
//     | 'sites',
//   createdAt: Type.date({ default: new Date(Date.now()) })
// });

// export const Activity = typedModel('activities', ActivitySchema);
// export type IActivity = ExtractProps<typeof ActivitySchema>;
