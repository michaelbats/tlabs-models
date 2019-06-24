import { createSchema, Type, typedModel, ExtractProps } from 'ts-mongoose';

const ContactSchema = createSchema({
  _id: Type.optionalString({ required: true }),
  firstname: Type.string({ required: true }),
  lastname: Type.string({ required: true }),
  jobRole: Type.optionalString(),
  email: Type.string({ required: true }),
  telephone: Type.optionalArray().of(
    Type.object().of({
      type: Type.string({ required: true }),
      number: Type.string({ required: true })
    })
  ),
  notes: Type.optionalString(),
  clientId: Type.string({ required: true }),
  ownerId: Type.string({ required: true }),
  source: Type.string({ required: true }),
  status: Type.string({ default: 'active' }) as 'active' | 'inactive',
  tags: Type.optionalArray().of(Type.string()),
  createdAt: Type.date({ requried: true, default: new Date(Date.now()) })
});

export const Contact = typedModel('contacts', ContactSchema);
export type IContact = ExtractProps<typeof ContactSchema>;
